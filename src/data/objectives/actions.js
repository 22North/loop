import axios from 'axios'

export function getObjectives() {
    return (dispatch) => {
        axios.get('/objectives.json')
            .then((response) => dispatch(getObjectivesSuccess(response.data.objectives)))
    };
}

export function getObjectivesSuccess(items) {
    return {
        type: 'GET_OBJECTIVES_SUCCESS',
        items
    };
}

export function getObjective() {
    return (dispatch) => {
        axios.get('/objective.json')
            .then((response) => dispatch(getObjectiveSuccess(response.data)))
    };
}

export function getObjectiveSuccess(item) {
    return {
        type: 'GET_OBJECTIVE_SUCCESS',
        item
    };
}

export function clearObjective() {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR_OBJECTIVE'  
        })
    };
}

export function updateObjective(item) {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_OBJECTIVE',
            item
        })
    };
}

export function createObjective(success) {
    return (dispatch) => {
        const emptyObjective = {
            status: 'draft',
            id: null,
            title: null,
            description: null,
            dueDate: null,
            sharedwith: [],
            documents: [],
            isNewlyCreated: true
        }
        dispatch(createObjectiveSuccess(emptyObjective))
    }
}

export function createObjectiveSuccess(item) {   
    return (dispatch) => {
        dispatch({
            type: 'CREATE_OBJECTIVE_SUCCESS',
            item
        })
    };
}