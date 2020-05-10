import { Action } from '@ngrx/store';

export function simpleReducer(state: string = "Hello World", action: Action) {
    switch(action.type) {
        case 'first': {
            return state = "First Hello World";
        }
        case 'second': {
            return state = "Second Hello World";
        }
        default: {
            return state;
        }
    }
}