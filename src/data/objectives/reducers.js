const INITIAL_STATE = {
    objectives: []
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