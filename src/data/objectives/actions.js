import '@firebase/firestore';
import * as firebase from 'firebase';

export function getObjectives() {
    return (dispatch) => {

        firebase.firestore().collection('objectives')
            .onSnapshot((querySnapshot) => {

                let collection = [];

                querySnapshot.forEach(doc => collection.push({ id: doc.id, ...doc.data()}));

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

export function getObjective(id) {
    return (dispatch) => {

        const docRef = firebase.firestore().collection('objectives').doc(id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                dispatch(getObjectiveSuccess({id: doc.id, ...doc.data()}));
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    };
}

export function loadObjective(item) {
    return (dispatch) => dispatch(getObjectiveSuccess(item))
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

export function createTempObjective() {
    return dispatch => dispatch(createObjectiveSuccess({
        status: 'draft',
        title: null,
        description: null,
        dueDate: null,
        sharedwith: [],
        isNewlyCreated: true
    }))
}

export function createObjective(item) {
    item.isNewlyCreated = false;
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
    if (item.isNewlyCreated) {
        return createObjective(item)
    } else {
        return updateObjective(item)
    }
}