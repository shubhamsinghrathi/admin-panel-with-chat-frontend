import * as actions from './messages.action';
import { Messages } from './messages.model';

export type Action = actions.All;

const defaultState: Messages = [];

export function messageReducer(state: Messages = defaultState, action: Action) {
    switch(action.type) {
        case actions.UPDATE_MESSAGES: {
            const updatedMessages: Messages = [];
            action.payload.forEach(message => {
                updatedMessages.push(Object.assign({}, message));
            });
            return updatedMessages;
        };
        case actions.CLEAR_MESSAGES: {
            return defaultState;
        };
        case actions.ADD_MESSAGE: {
            const updatedMessages: Messages = [];
            updatedMessages.unshift(Object.assign({}, action.payload));
            state.forEach(messaage => {
                updatedMessages.push(Object.assign({}, messaage));
            });
            return updatedMessages;
        };
        default: {
            return state;
        }
    }
}