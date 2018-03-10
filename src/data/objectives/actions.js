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