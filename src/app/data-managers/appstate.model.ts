import { Users } from './users.model';
import { Admins } from './admins.model';

export interface AppState {
    message: string;
    users: Users;
    admins: Admins;
  }