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