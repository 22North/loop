import { 
    ADD_USER_TO_SHARED_WITH, 
    CLEAR_OBJECTIVE,
    GET_OBJECTIVE, 
    GET_USERS_SHARED_WITH,
} from './actions'

const INITIAL_STATE = {
    data: null,
    usersSharedWith: [],
}

export function objective(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_USER_TO_SHARED_WITH:

            const users = state.usersSharedWith
            const userExists = users.find(user => { return user.id === action.user.id })

            if (userExists) {
                return {
                    ...state
                }
            }
            
            return {
                ...state,
                usersSharedWith: [ ...state.usersSharedWith, action.user ],
            }
        case GET_OBJECTIVE:
            return {
                ...state, 
                data: action.objective,
                usersSharedWith: [], // We want to re-populate this each time we get a new objective.
            }
        case GET_USERS_SHARED_WITH:
            return {
                ...state, 
                usersSharedWith: [ ...state.usersSharedWith, action.user ],
            }
        case CLEAR_OBJECTIVE:
            return {
                ...state, 
                data: null,
                usersSharedWith: [],
            }
        default:
            return {
                ...state
            }
    }
}