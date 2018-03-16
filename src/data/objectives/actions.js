import '@firebase/firestore';
import * as firebase from 'firebase';

export function getObjectives() {
    return (dispatch) => {

        firebase.firestore().collection('objectives')
            .get()
            .then((querySnapshot) => {

                let collection = [];
                querySnapshot.forEach(doc => collection.push({ id: doc.id, ...doc.data()}));

                dispatch(getObjectivesSuccess(collection));
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
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