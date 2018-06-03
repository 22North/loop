import { GET_OBJECTIVE, CLEAR_OBJECTIVE } from './actions'

const INITIAL_STATE = {
    data: null,
}

export function objective(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_OBJECTIVE:
            return {
                ...state, 
                data: action.objective,
            }
        case CLEAR_OBJECTIVE:
            return {
                ...state, 
                data: null,
            }
        default:
            return state
    }
}