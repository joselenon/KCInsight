import { IUserSelf } from './IUser';

export interface IReduxStore {
  auth: { userCredentials: IUserSelf | undefined | null };
}
