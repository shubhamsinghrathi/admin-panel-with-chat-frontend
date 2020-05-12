import { Action } from '@ngrx/store';
import { Admin, Admins } from './admins.model';

export const UPDATE_ADMINS = "[ADMINS] UPDATE";
export const EDIT_ADMIN= "[ADMINS] EDIT ADMIN";
export const ADD_ADMIN= "[ADMINS] ADD ADMIN";
export const DELETE_ADMIN = "[ADMINS] DELETE ADMIN";
export const CLEAR_ADMINS = "[ADMINS] CLEAR";

export class UpdateAdmins implements Action {
    readonly type = UPDATE_ADMINS;

    constructor (public payload: Admins) {}
}

export class EditAdmin implements Action {
    readonly type = EDIT_ADMIN;

    constructor (public payload: Admin) {}
}

export class AddAdmin implements Action {
    readonly type = ADD_ADMIN;

    constructor (public payload: Admin) {}
}

export class DeleteAdmin implements Action {
    readonly type = DELETE_ADMIN;

    constructor (public payload: number) {}
}

export class ClearAdmins implements Action {
    readonly type = CLEAR_ADMINS;
}

export type All
= UpdateAdmins
| EditAdmin
| AddAdmin
| DeleteAdmin
| ClearAdmins;