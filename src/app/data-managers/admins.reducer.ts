import * as actions from './admins.action';
import { Admins } from './admins.model';

export type Action = actions.All;

const defaultState: Admins = [];

export function adminsReducer(state: Admins = defaultState, action: Action) {
    switch(action.type) {
        case actions.UPDATE_ADMINS: {
            const updatedAdmins: Admins = [];
            action.payload.forEach(user => {
                updatedAdmins.push(Object.assign({}, user));
            });
            return updatedAdmins;
        };
        case actions.CLEAR_ADMINS: {
            return defaultState;
        };
        case actions.EDIT_ADMIN: {
            const updatedAdmins: Admins = [];
            state.forEach(admin => {
                if (admin.id == action.payload.id) {
                    updatedAdmins.push(Object.assign({}, action.payload));
                } else {
                    updatedAdmins.push(Object.assign({}, admin));
                }
            });
            return updatedAdmins;
        };
        case actions.ADD_ADMIN: {
            const updatedAdmins: Admins = [];
            state.forEach(admin => {
                updatedAdmins.push(Object.assign({}, admin));
            });
            updatedAdmins.push(Object.assign({}, action.payload));
            return updatedAdmins;
        };
        case actions.DELETE_ADMIN: {
            const updatedAdmins: Admins = [];
            state.forEach(admin => {
                if (admin.id != action.payload) {
                    updatedAdmins.push(Object.assign({}, admin));
                }
            });
            return updatedAdmins;
        };
        default: {
            return state;
        }
    }
}