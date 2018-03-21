const INITIAL_STATE = {
    users: [],
    user: null
}

export function user(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `GET_USER_SUCCESS/${action.id}`: 
            return {
                ...state, 
                [action.id]: action.item
            }
        default:
            return state
    }
}

export function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            return {
                ...state, 
                users: action.items
            }
        default:
            return state
    }
}