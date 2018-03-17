const INITIAL_STATE = {
    objectives: [],
    objective: null
}

export function objectives(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_OBJECTIVES_SUCCESS':
            return {
                ...state, 
                objectives: action.items
            }
        default:
            return state
    }
}

export function objective(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_OBJECTIVE_SUCCESS':
            return {
                ...state, 
                objective: action.item
            }
        case 'UPDATE_OBJECTIVE_SUCCESS':
            return {
                ...state,
            }
        case 'CREATE_OBJECTIVE_SUCCESS':
            return {
                ...state,
                objective: action.item
            }
        case 'CLEAR_OBJECTIVE':
            return {
                ...state, 
                objective: null
            }
        default:
            return state
    }
}