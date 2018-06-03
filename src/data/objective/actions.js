import '@firebase/firestore'
import * as firebase from 'firebase'

export const ADD_USER_TO_SHARED_WITH = 'ADD_USER_TO_SHARED_WITH'
export const CLEAR_OBJECTIVE = 'CLEAR_OBJECTIVE'
export const GET_OBJECTIVE = 'GET_OBJECTIVE'
export const GET_USERS_SHARED_WITH = 'GET_USERS_SHARED_WITH'

export function addToSharedWith(user) {
    return dispatch => dispatch(onAddToUsersSharedWith(user))
}

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
    
                    const data = {id: doc.id, ...doc.data()}

                    dispatch(onGetObjective(data))
                    dispatch(getUsersSharedWith(data.sharedwith))

                } else {
                    console.log('No such document!')
                }
            }).catch(function(error) {
                console.log("Error getting document:", error)
            })
    }
}

export function getEmptyObjective() {
    return (dispatch) => dispatch(onGetObjective({
        description: '',
        dueDate: '',
        feedback: null,
        isNewlyCreated: true,
        sharedwith: [],
        status: 'draft',
        title: '',
    }))
}

export function getUsersSharedWith(userIds) {
    return (dispatch) => {
        userIds.forEach(function(userId, index) {                 
                const docRef = firebase.firestore().collection('users').doc(userId)
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        dispatch(onGetUsersSharedWith({id: doc.id, ...doc.data()}))
                    } else {
                        console.log('No such user!')
                    }
                }).catch(function(error) {
                    console.log('Error getting user:', error)
                })
        })
    }
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

// Dispatch to reducers.

export function onAddToUsersSharedWith(user) {
    return {
        type: ADD_USER_TO_SHARED_WITH,
        user,
    }
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

export function onGetUsersSharedWith(user) {
    return {
        type: ADD_USER_TO_SHARED_WITH,
        user
    }
}