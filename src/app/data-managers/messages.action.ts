import { Action } from '@ngrx/store';
import { Message, Messages } from './messages.model';

export const UPDATE_MESSAGES = "[MESSAGE] UPDATE";
export const ADD_MESSAGE= "[MESSAGE] ADD MESSAGE";
export const CLEAR_MESSAGES = "[MESSAGE] CLEAR";

export class UpdateMessages implements Action {
    readonly type = UPDATE_MESSAGES;

    constructor (public payload: Messages) {}
}

export class AddMessage implements Action {
    readonly type = ADD_MESSAGE;

    constructor (public payload: Message) {}
}

export class ClearMessages implements Action {
    readonly type = CLEAR_MESSAGES;
}

export type All
= UpdateMessages
| AddMessage
| ClearMessages;