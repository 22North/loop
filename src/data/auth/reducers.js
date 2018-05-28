import { AUTH_SUCCESS, SIGNOUT_SUCCESS } from "./actions"

const INITIAL_STATE = {
    uid: '',
    email: '',
    password: '',
    authenticated: false,
    error: null,
};

export function auth(state = INITIAL_STATE, action) {

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, 
                authenticated: true,
                uid: action.user.uid,
                error: null,
            }    
        case SIGNOUT_SUCCESS:
            return {
                ...state, 
                authenticated: false,
                uid: '',
                error: null,
            }
        default:
            return state
    }
}