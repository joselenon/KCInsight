// Otimizar tipagem (Priority: **)
import * as admin from 'firebase-admin';

import {
  IFirebaseAllDocumentsByCollectionQueryResponse,
  IFirebaseManyDocumentsResponse,
  IFirebaseResponse,
  TDBCollections,
} from '@/interfaces/IFirebase';
import ENVIRONMENT from '@/config/environment.config';
import { DocumentNotFoundError, UnexpectedDatabaseError } from '@/config/errors/classes/SystemErrors';
import { DocumentData, DocumentReference } from 'firebase-admin/firestore';

export interface IFirebaseChunksConfig {
  forward: boolean;
  lastTime: number;
}

export default class FirestoreService {
  private firebaseApp: admin.app.App;
  public firestore: FirebaseFirestore.Firestore;

  constructor(serviceAccount: admin.ServiceAccount) {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    this.firestore = this.firebaseApp.firestore();
  }

  async writeDocument<T extends admin.firestore.DocumentData>(
    collection: TDBCollections,
    payload: T,
    options?: { customId?: string }, // adicionamos options
  ): Promise<{ docId: string; docRef: DocumentReference<T>; success: boolean }> {
    try {
      let docRef: DocumentReference<T>;

      if (options?.customId) {
        docRef = this.firestore.collection(collection).doc(options.customId) as DocumentReference<T>;
        await docRef.set(payload); // cria com customId
      } else {
        docRef = (await this.firestore.collection(collection).add(payload)) as DocumentReference<T>;
      }

      return { docId: docRef.id, docRef, success: true };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async writeSubcollectionDocument<T extends admin.firestore.DocumentData>({
    path,
    docIds,
    payload,
    options,
  }: {
    path: string; // Ex: 'users.sessions'
    docIds: string[]; // Ex: ['userId']
    payload: T;
    options?: { customId?: string };
  }): Promise<{ docId: string; docRef: DocumentReference<T>; success: boolean }> {
    try {
      const segments = path.split('.');
      if (segments.length !== docIds.length + 1) {
        throw new Error(`Path "${path}" and docIds "${docIds}" are misaligned`);
      }

      // Caminha até a subcoleção
      let ref: FirebaseFirestore.DocumentReference = this.firestore.collection(segments[0]).doc(docIds[0]);

      for (let i = 1; i < docIds.length; i++) {
        ref = ref.collection(segments[i]).doc(docIds[i]);
      }

      const subcollectionRef = ref.collection(segments[segments.length - 1]);

      let docRef: DocumentReference<T>;

      if (options?.customId) {
        docRef = subcollectionRef.doc(options.customId) as DocumentReference<T>;
        await docRef.set(payload);
      } else {
        docRef = (await subcollectionRef.add(payload)) as DocumentReference<T>;
      }

      return { docId: docRef.id, docRef, success: true };
    } catch (error: any) {
      console.error(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async deleteDocument(collection: TDBCollections, docId: string): Promise<{ docId: string; success: boolean }> {
    try {
      const docRef = this.firestore.collection(collection).doc(docId);
      const docSnapshot = await docRef.get();

      if (!docSnapshot.exists) throw new DocumentNotFoundError(`Document ${docId} not found`);

      await docRef.delete();

      return { docId, success: true };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async deleteSubcollectionDocument(
    collection: TDBCollections,
    parentDocId: string,
    subcollection: string,
    subDocId: string,
  ): Promise<{ docId: string; success: boolean }> {
    try {
      const subDocRef = this.firestore.collection(collection).doc(parentDocId).collection(subcollection).doc(subDocId);

      const subDocSnapshot = await subDocRef.get();

      if (!subDocSnapshot.exists) {
        throw new DocumentNotFoundError(
          `Subdocument ${subDocId} not found in ${collection}/${parentDocId}/${subcollection}`,
        );
      }

      await subDocRef.delete();

      return { docId: subDocId, success: true };
    } catch (error: any) {
      console.error(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  // Specific query (if the document doesn't exists, it throws an error)
  // IMPORTANT: It throws error in case a docRef.get is requested with an nonexistent docId in db
  async updateDocument<D>(
    collection: TDBCollections,
    docId: string,
    payload: any /* MUDAR ISSO IMEDIATAMENTE */,
  ): Promise<IFirebaseResponse<D>> {
    try {
      const docRef = (await this.firestore.collection(collection).doc(docId)) as DocumentReference<D>;
      const docSnapshot = await docRef.get();
      if (!docSnapshot.exists) throw new DocumentNotFoundError();

      const docData = docSnapshot.data();
      await docRef.update(payload);

      const fullDocData = { ...docData, ...payload } as D;

      return { docId, docRef, docData: fullDocData };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async updateDocumentFromRef<D>(docRef: DocumentReference<D>, payload: Partial<D>): Promise<IFirebaseResponse<D>> {
    try {
      const docSnapshot = await docRef.get();

      if (!docSnapshot.exists) {
        throw new DocumentNotFoundError(`Document ${docRef.id} not found`);
      }

      const existingData = docSnapshot.data();
      await docRef.update(payload);

      const fullDocData = { ...existingData, ...payload } as D;

      return {
        docId: docRef.id,
        docRef,
        docData: fullDocData,
      };
    } catch (error: any) {
      console.error(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  // Specific query (if the document doesn't exists, it throws an error)
  // IMPORTANT: It throws error in case a docRef.get is requested with an nonexistent docId in db
  async getDocumentRefWithData<D>(collection: TDBCollections, docId: string): Promise<IFirebaseResponse<D>> {
    try {
      const docRef: DocumentReference<D> = this.firestore.collection(collection).doc(docId) as DocumentReference<D>;

      const docSnapshot = await docRef.get();
      if (!docSnapshot.exists) throw new DocumentNotFoundError();

      const docSnapshotData = docSnapshot.data()!;

      return {
        docId,
        docRef,
        docData: docSnapshotData as D,
      };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getDocumentById<D>(collection: TDBCollections, docId: string): Promise<IFirebaseResponse<D> | null> {
    try {
      const docRef = this.firestore.collection(collection).doc(docId) as DocumentReference<D>;
      const docSnapshot = await docRef.get();

      if (!docSnapshot.exists) return null;

      const docData = docSnapshot.data() as D;
      return { docId, docRef, docData };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getSingleDocumentByParam<D>(
    collection: TDBCollections,
    param: string,
    paramValue: string | admin.firestore.DocumentReference<admin.firestore.DocumentData>,
  ): Promise<IFirebaseResponse<D> | null> {
    try {
      const docQuery = await this.firestore.collection(collection).where(param, '==', paramValue).limit(1);
      const docSnapshot = await docQuery.get();
      if (docSnapshot.empty) return null;

      const queryDocSnapshot = docSnapshot.docs[0];
      const docId = queryDocSnapshot.id;
      const docRef = queryDocSnapshot.ref as DocumentReference<D>;
      const docData = queryDocSnapshot.data() as D;

      return {
        docId: docId as string,
        docRef: docRef,
        docData: docData as D,
      };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getManyDocumentsByParam<D>(
    collection: TDBCollections,
    param: string,
    paramValue: any,
  ): Promise<IFirebaseManyDocumentsResponse<D>> {
    try {
      const docQuery = this.firestore.collection(collection).where(param, '==', paramValue);
      const querySnapshot = await docQuery.get();
      if (querySnapshot.empty) return { documents: [], hasMore: false };

      const documents = querySnapshot.docs.map((doc) => {
        return { docId: doc.id, docData: doc.data() as D, docRef: doc.ref as DocumentReference<D> };
      });

      return { documents, hasMore: false };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getManyDocumentsByIds<D>(collection: TDBCollections, docIds: string[]): Promise<IFirebaseResponse<D>[]> {
    try {
      const results: IFirebaseResponse<D>[] = [];

      // Firebase não possui busca nativa por múltiplos docIds, então buscamos individualmente
      for (const docId of docIds) {
        const docRef = this.firestore.collection(collection).doc(docId) as DocumentReference<D>;
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          results.push({
            docId,
            docRef,
            docData: docSnapshot.data() as D,
          });
        }
      }

      return results;
    } catch (error: any) {
      console.error(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getManyDocumentsFromSubcollectionByIds<D>({
    path,
    docIds,
  }: {
    path: string; // Ex: 'users.dailyStudyInfo'
    docIds: string[]; // Ex: ['2024-06-20', '2024-06-21']
  }): Promise<IFirebaseResponse<D>[]> {
    try {
      const segments = path.split('.'); // ['users', 'dailyStudyInfo']
      if (segments.length < 2) {
        throw new Error(`Path "${path}" must include at least one document and one subcollection`);
      }

      // Extrai caminho até a subcoleção
      const docPathSegments = segments.slice(0, -1); // ['users']
      const subcollectionName = segments[segments.length - 1]; // 'dailyStudyInfo'

      if (docPathSegments.length % 2 !== 0) {
        throw new Error(`Path "${path}" is not aligned: it must alternate between collection/doc`);
      }

      // Monta caminho do documento pai
      let ref: FirebaseFirestore.DocumentReference = this.firestore
        .collection(docPathSegments[0])
        .doc(docPathSegments[1]);
      for (let i = 2; i < docPathSegments.length; i += 2) {
        ref = ref.collection(docPathSegments[i]).doc(docPathSegments[i + 1]);
      }

      const subcollectionRef = ref.collection(subcollectionName);

      // Busca todos os documentos da subcoleção com os IDs fornecidos
      const results: IFirebaseResponse<D>[] = [];

      for (const docId of docIds) {
        const docRef = subcollectionRef.doc(docId) as DocumentReference<D>;
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          results.push({
            docId,
            docRef,
            docData: docSnapshot.data() as D,
          });
        }
      }

      return results;
    } catch (error: any) {
      console.error(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getAllDocumentsByCollection<D>(collection: TDBCollections): Promise<IFirebaseManyDocumentsResponse<D>> {
    try {
      const collectionRef = this.firestore.collection(collection);
      const collectionSnapshot = await collectionRef.get();

      if (collectionSnapshot.empty) return { documents: [], hasMore: false };

      const documents = collectionSnapshot.docs.map((doc) => {
        return { docId: doc.id, docData: doc.data() as D, docRef: doc.ref as DocumentReference<D> };
      });

      return { documents, hasMore: false };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getAllDocumentsBySubcollection<D>(
    collection: TDBCollections,
    parentDocId: string,
    subcollection: string,
  ): Promise<IFirebaseManyDocumentsResponse<D>> {
    try {
      const subcollectionRef = this.firestore.collection(collection).doc(parentDocId).collection(subcollection);
      const subcollectionSnapshot = await subcollectionRef.get();

      if (subcollectionSnapshot.empty) return { documents: [], hasMore: false };

      const documents = subcollectionSnapshot.docs.map((doc) => ({
        docId: doc.id,
        docData: doc.data() as D,
        docRef: doc.ref as DocumentReference<D>,
      }));

      return { documents, hasMore: false };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getSubcollectionDocumentsInChunks<D>({
    path,
    docIds,
    orderByField,
    chunkSize,
    config,
  }: {
    path: string; // Ex: 'users.sessions'
    docIds: string[]; // Ex: ['userId']
    orderByField: string; // Ex: 'createdAt'
    chunkSize: number;
    config: IFirebaseChunksConfig;
  }): Promise<IFirebaseManyDocumentsResponse<D>> {
    try {
      const { forward, lastTime } = config;

      const segments = path.split('.');
      if (segments.length !== docIds.length + 1) {
        throw new Error(`Path "${path}" and docIds "${docIds}" are misaligned`);
      }

      // Caminha até a subcoleção
      let ref: FirebaseFirestore.DocumentReference = this.firestore.collection(segments[0]).doc(docIds[0]);

      for (let i = 1; i < docIds.length; i++) {
        ref = ref.collection(segments[i]).doc(docIds[i]);
      }

      const subcollectionRef = ref.collection(segments[segments.length - 1]);

      // Cria a query somente com ordenação
      let query = subcollectionRef.orderBy(orderByField, 'desc');

      if (forward) {
        query = query.startAfter(lastTime).limit(chunkSize + 1);
      } else {
        query = query.endBefore(lastTime).limitToLast(chunkSize);
      }

      const snapshot = await query.get();
      if (snapshot.empty) return { documents: [], hasMore: false };

      const documents = snapshot.docs.slice(0, chunkSize).map((doc) => ({
        docId: doc.id,
        docData: doc.data() as D,
        docRef: doc.ref as DocumentReference<D>,
      }));

      const hasMore = snapshot.docs.length > chunkSize;

      return { documents, hasMore };
    } catch (error: any) {
      console.error(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getCollectionRef(
    collection: TDBCollections,
  ): Promise<admin.firestore.CollectionReference<admin.firestore.DocumentData>> {
    try {
      return this.firestore.collection(collection);
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getSubcollectionRef(
    path: string, // Ex: 'users.weeklyStudyInfo'
    docIds: string[], // Ex: ['userId'] para acessar users/{userId}/weeklyStudyInfo
  ): Promise<FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>> {
    try {
      const segments = path.split('.'); // ['users', 'weeklyStudyInfo']
      if (segments.length !== docIds.length + 1) {
        throw new Error(`Path "${path}" and docIds "${docIds}" are misaligned`);
      }

      let ref: FirebaseFirestore.DocumentReference | FirebaseFirestore.CollectionReference = this.firestore
        .collection(segments[0])
        .doc(docIds[0]);

      for (let i = 1; i < segments.length - 1; i++) {
        ref = ref.collection(segments[i]).doc(docIds[i]);
      }

      const subcollectionRef = ref.collection(segments[segments.length - 1]);
      return subcollectionRef;
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getManyDocumentsInChunks<D>({
    collection,
    orderByField,
    chunkSize,
    config,
  }: {
    collection: TDBCollections;
    orderByField: string;
    chunkSize: number;
    config: IFirebaseChunksConfig;
  }): Promise<IFirebaseManyDocumentsResponse<D>> {
    try {
      const { forward, lastTime } = config;
      let query = this.firestore.collection(collection).orderBy(orderByField, 'desc');

      if (forward) {
        query = query.limit(chunkSize + 1);
        query = query.startAfter(lastTime);
      }
      if (!forward) {
        query = query.limitToLast(chunkSize);
        query = query.endBefore(lastTime);
      }

      const snapshot = await query.get();
      if (snapshot.empty) return { documents: [], hasMore: false };

      let documents = snapshot.docs.slice(0, chunkSize).map((doc) => ({
        docId: doc.id,
        docData: doc.data() as D,
        docRef: doc.ref as DocumentReference<D>,
      }));

      const hasMore = snapshot.docs.length > chunkSize;

      return { documents, hasMore };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getManyDocumentsByParamInChunks<D>({
    collection,
    param,
    paramValue,
    orderByField,
    chunkSize,
    config,
  }: {
    collection: TDBCollections;
    param: string;
    paramValue: any;
    orderByField: string;
    chunkSize: number;
    config: IFirebaseChunksConfig;
  }): Promise<IFirebaseManyDocumentsResponse<D>> {
    try {
      const { forward, lastTime } = config;
      let query = this.firestore.collection(collection).where(param, '==', paramValue).orderBy(orderByField, 'desc');

      if (forward) {
        query = query.limit(chunkSize + 1);
        query = query.startAfter(lastTime);
      }
      if (!forward) {
        query = query.limitToLast(chunkSize);
        query = query.endBefore(lastTime);
      }

      const snapshot = await query.get();
      if (snapshot.empty) return { documents: [], hasMore: false };

      let documents = snapshot.docs.slice(0, chunkSize).map((doc) => ({
        docId: doc.id,
        docData: doc.data() as D,
        docRef: doc.ref as DocumentReference<D>,
      }));

      const hasMore = snapshot.docs.length > chunkSize;

      return { documents, hasMore };
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getDocumentDataFromRef<D>(docRef: DocumentReference<D>): Promise<D> {
    try {
      const docSnapshot = await docRef.get();
      if (!docSnapshot.exists) throw new DocumentNotFoundError();

      return docSnapshot.data() as D;
    } catch (error: any) {
      console.log(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async updateSubcollectionDocument<D>({
    path,
    docIds,
    subDocId,
    payload,
  }: {
    path: string; // Ex: 'users.sessions'
    docIds: string[]; // Ex: ['userId']
    subDocId: string; // Ex: 'sessionId'
    payload: Partial<D>;
  }): Promise<IFirebaseResponse<D>> {
    try {
      const segments = path.split('.');
      if (segments.length !== docIds.length + 1) {
        throw new Error(`Path "${path}" and docIds "${docIds}" are misaligned`);
      }

      // Caminha até a subcoleção
      let ref: FirebaseFirestore.DocumentReference = this.firestore.collection(segments[0]).doc(docIds[0]);

      for (let i = 1; i < docIds.length; i++) {
        ref = ref.collection(segments[i]).doc(docIds[i]);
      }

      const subcollectionRef = ref.collection(segments[segments.length - 1]);

      const subDocRef = subcollectionRef.doc(subDocId) as DocumentReference<D>;
      const subDocSnapshot = await subDocRef.get();

      if (!subDocSnapshot.exists) {
        throw new DocumentNotFoundError(
          `Subdocument ${subDocId} not found in path "${path}" with docIds "${docIds.join(' / ')}"`,
        );
      }

      const subDocData = subDocSnapshot.data();
      await subDocRef.update(payload);
      const fullSubDocData = { ...subDocData, ...payload } as D;

      return { docId: subDocId, docRef: subDocRef, docData: fullSubDocData };
    } catch (error: any) {
      console.error(error);
      throw new UnexpectedDatabaseError(error);
    }
  }

  async getSubcollectionDocument<D>(
    path: string, // Ex: 'user.progress.exemplo'
    docIds: string[], // Ex: ['userId', 'progressId', 'exemploId']
  ): Promise<IFirebaseResponse<D> | null> {
    try {
      const segments = path.split('.');
      if (segments.length * 2 !== docIds.length * 2) {
        throw new Error(`Path "${path}" and docIds "${docIds}" are misaligned`);
      }

      // Caminha pela hierarquia: collection/doc/collection/doc...
      let ref: FirebaseFirestore.DocumentReference | FirebaseFirestore.CollectionReference = this.firestore
        .collection(segments[0])
        .doc(docIds[0]);

      for (let i = 1; i < segments.length; i++) {
        ref = ref.collection(segments[i]).doc(docIds[i]);
      }

      const finalDocRef = ref as DocumentReference<D>;
      const docSnapshot = await finalDocRef.get();

      if (!docSnapshot.exists) {
        throw new DocumentNotFoundError(`Document at path ${path} not found`);
      }

      return {
        docId: finalDocRef.id,
        docRef: finalDocRef,
        docData: docSnapshot.data() as D,
      };
    } catch (error: any) {
      return null;
    }
  }

  generateDocId(collection: TDBCollections): string {
    return this.firestore.collection(collection).doc().id;
  }
}
