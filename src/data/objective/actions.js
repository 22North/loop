import '@firebase/firestore'
import * as firebase from 'firebase'
export const GET_OBJECTIVE = 'GET_OBJECTIVE'
export const CLEAR_OBJECTIVE = 'CLEAR_OBJECTIVE'

export function clearObjective() {
    return (dispatch) => dispatch(onClearObjective())
}

export function getObjective(objectiveId) {
    return (dispatch) => {

        const objectiveRef = firebase.firestore().collection('objectives').doc(objectiveId)

        objectiveRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    dispatch(onGetObjective({id: doc.id, ...doc.data()}))
                } else {
                    console.log("No such document!")
                }
            }).catch(function(error) {
                console.log("Error getting document:", error)
            })
    }
}

export function getEmptyObjective() {
    return dispatch => dispatch(onGetObjective({
        description: '',
        dueDate: '',
        feedback: null,
        isNewlyCreated: true,
        sharedwith: [],
        status: 'draft',
        title: '',
    }))
}

export function saveObjective(objective) {
    return (dispatch) => {
        
        const objectiveRef = firebase.firestore().collection('objectives').doc(objective.id)

        objectiveRef
            .update(objective)
            .then(() => {

            })
            .catch((error) => {

            })
    }
}

export function setObjective(objective) {
    return dispatch => dispatch(onGetObjective(objective))
}

export function onClearObjective(objective) {
    return {
        type: CLEAR_OBJECTIVE,
    }
}

export function onGetObjective(objective) {
    return {
        type: GET_OBJECTIVE,
        objective,
    }
}