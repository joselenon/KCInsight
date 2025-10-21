import { DocumentReference } from 'firebase-admin/firestore';

export interface IFirebaseResponse<D> {
  docId: string;
  docData: D;
  docRef: DocumentReference<D>;
}

export interface IFirebaseManyDocuments<D> {
  docId: string;
  docData: D;
  docRef: DocumentReference<D>;
}

export interface IFirebaseManyDocumentsResponse<D> {
  documents: IFirebaseManyDocuments<D>[];
  hasMore: boolean;
}

export interface IFirebaseAllDocumentsByCollectionQueryResponse<R> {
  result: { docId: string; docData: R }[];
}

// Custom (modify when needed)
export type TDBCollections =
  | 'users'
  | 'planUsage'
  | 'decks'
  | 'cards'
  | 'chatMessages'
  | 'activityFeedbacks'
  | 'activityAttempts'
  | 'activityStats'
  | 'chats'
  | 'userXP'
  | 'missionsCatalog'
  | 'activityLogs'
  | 'userProfileCustomizations';

export type DbChangeFunction = (transaction: FirebaseFirestore.Transaction, args: any[]) => Promise<void>;

export interface IFirebaseChunksConfig {
  forward: boolean;
  lastTime: number;
}
