import { Action } from '@ngrx/store';
import { User, Users } from './users.model';

export const UPDATE_USERS = "[USERS] UPDATE";
export const EDIT_USER= "[USERS] EDIT USER";
export const DELETE_USER = "[USERS] DELETE USER";
export const CLEAR_USERS = "[USERS] CLEAR";

export class UpdateUsers implements Action {
    readonly type = UPDATE_USERS;

    constructor (public payload: Users) {}
}

export class EditUser implements Action {
    readonly type = EDIT_USER;

    constructor (public payload: User) {}
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;

    constructor (public payload: number) {}
}

export class ClearUsers implements Action {
    readonly type = CLEAR_USERS;
}

export type All
= UpdateUsers
| EditUser
| DeleteUser
| ClearUsers;