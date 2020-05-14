import { Action } from '@ngrx/store';
import { MsgWall, MsgsWall } from './msgwall.model';

export const UPDATE_WALL = "[WALL] UPDATE";
export const EDIT_WALL= "[WALL] EDIT WALL";
export const ADD_CHAT= "[WALL] ADD CHAT";
export const CLEAR_WALL = "[WALL] CLEAR";

export class UpdateWall implements Action {
    readonly type = UPDATE_WALL;

    constructor (public payload: MsgsWall) {}
}

export class EditWall implements Action {
    readonly type = EDIT_WALL;

    constructor (public payload: MsgWall) {}
}

export class AddChat implements Action {
    readonly type = ADD_CHAT;

    constructor (public payload: MsgWall) {}
}

export class ClearWall implements Action {
    readonly type = CLEAR_WALL;
}

export type All
= UpdateWall
| EditWall
| AddChat
| ClearWall;