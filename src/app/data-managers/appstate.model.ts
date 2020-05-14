import { Users } from './users.model';
import { Admins } from './admins.model';
import { MsgsWall } from './msgwall.model';

export interface AppState {
    message: string;
    users: Users;
    admins: Admins;
    msgsWall: MsgsWall;
  }