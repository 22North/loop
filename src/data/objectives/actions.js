import '@firebase/firestore'
import * as firebase from 'firebase'

export function getObjectives(userId) {
    return (dispatch) => {

        const objectivesRef = firebase.firestore().collection('objectives')

        objectivesRef
            .where('createdById', '==', userId)
            .onSnapshot((querySnapshot) => {

                let collection = []

                querySnapshot.forEach(doc => collection.push({ id: doc.id, ...doc.data()}))

                dispatch(getObjectivesSuccess(collection));

            }, (error) => console.log(error))
    };
}

export function getObjectivesSuccess(items) {
    return {
        type: 'GET_OBJECTIVES_SUCCESS',
        items
    };
}

export function clearObjective() {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR_OBJECTIVE'  
        })
    };
}

export function createTempObjective() {
    return dispatch => dispatch(createObjectiveSuccess({
        status: 'draft',
        dueDate: null,
        title: null,
        description: null,
        sharedwith: [],
        feedback: null,
        isNew: true
    }))
}

export function createObjective(item) {
    item.isNew = false;
    return (dispatch) => {
        firebase.firestore().collection('objectives')
            .add(item)
            .then(docRef => dispatch(createObjectiveSuccess({id: docRef.id, ...item})))
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
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

export function updateObjective(item) {
    return (dispatch) => {
        
        const docRef = firebase.firestore().collection('objectives').doc(item.id);

        docRef
            .update(item)
            .then( () => dispatch(updateObjectiveSuccess()))
            .catch(function(error) {
                console.error("Error updating document: ", error);
            });
    };
}

export function updateObjectiveSuccess() {   
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_OBJECTIVE_SUCCESS'
        })
    };
}

export function saveObjective(item) {
    if (item.isNew) {
        return createObjective(item)
    } else {
        return updateObjective(item)
    }
}

export function addToSharedWith(userId) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_SHARED_WITH',
            userId: userId
        })
    };
}

export function changeObjectiveStatus(value) {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_OBJECTIVE_STATUS',
            value: value
        })
    };
}