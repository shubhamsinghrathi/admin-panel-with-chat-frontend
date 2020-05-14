import * as actions from './msgwall.action';
import { MsgsWall } from './msgwall.model';

export type Action = actions.All;

const defaultState: MsgsWall = [];

export function wallReducer(state: MsgsWall = defaultState, action: Action) {
    switch(action.type) {
        case actions.UPDATE_WALL: {
            const updatedWall: MsgsWall = [];
            action.payload.forEach(msgWall => {
                updatedWall.push(Object.assign({}, msgWall));
            });
            return updatedWall;
        };
        case actions.CLEAR_WALL: {
            return defaultState;
        };
        case actions.EDIT_WALL: {
            const updatedWall: MsgsWall = [];
            updatedWall.unshift(Object.assign({}, action.payload));
            state.forEach(admin => {
                if (admin.id != action.payload.id) {
                    updatedWall.push(Object.assign({}, admin));
                }
            });
            return updatedWall;
        };
        case actions.ADD_CHAT: {
            const updatedWall: MsgsWall = [];
            updatedWall.unshift(Object.assign({}, action.payload));
            state.forEach(admin => {
                updatedWall.push(Object.assign({}, admin));
            });
            return updatedWall;
        };
        default: {
            return state;
        }
    }
}