const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    loading: false,
    loggedIn: false
};

export function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SIGN_IN_SUCCESS':
            return {
                ...state, 
                loggedIn: true
            }
        default:
            return state
    }
}