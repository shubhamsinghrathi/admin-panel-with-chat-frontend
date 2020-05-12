import * as actions from './users.action';
import { User, Users } from './users.model';

export type Action = actions.All;

const defaultState: Users = [];

export function usersReducer(state: Users = defaultState, action: Action) {
    switch(action.type) {
        case actions.UPDATE_USERS: {
            const updatedUsers: Users = [];
            action.payload.forEach(user => {
                updatedUsers.push(Object.assign({}, user));
            });
            return updatedUsers;
        };
        case actions.CLEAR_USERS: {
            return defaultState;
        };
        case actions.EDIT_USER: {
            const updatedUsers: Users = [];
            state.forEach(user => {
                if (user.id == action.payload.id) {
                    updatedUsers.push(Object.assign({}, action.payload));
                } else {
                    updatedUsers.push(Object.assign({}, user));
                }
            });
            return updatedUsers;
        };
        case actions.ADD_USER: {
            const updatedUsers: Users = [];
            state.forEach(user => {
                updatedUsers.push(Object.assign({}, user));
            });
            updatedUsers.push(Object.assign({}, action.payload));
            return updatedUsers;
        };
        case actions.DELETE_USER: {
            const updatedUsers: Users = [];
            state.forEach(user => {
                if (user.id != action.payload) {
                    updatedUsers.push(Object.assign({}, user));
                }
            });
            return updatedUsers;
        };
        default: {
            return state;
        }
    }
}