import '@firebase/firestore';
import * as firebase from 'firebase';

export function getUser(actionId, id) {
    return (dispatch) => {

        const docRef = firebase.firestore().collection('users').doc(id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                dispatch(getUserSuccess(actionId, {id: doc.id, ...doc.data()}));
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    };
}

export function getUserSuccess(actionId, item) {
    return {
        id: actionId,
        type: `GET_USER_SUCCESS/${actionId}`,
        item
    };
}

export function getUsers() {
    return (dispatch) => {

        dispatch(getUsersSuccess([
            {'id': '1', firstname: 'Awais', surname: 'Muzaffar', fullname: 'Awais Muzaffar'},
            {'id': '2', firstname: 'Gary', surname: 'Walker', fullname: 'Gary Walker'},
            {'id': '3', firstname: 'Matthew', surname: 'Goddard', fullname: 'Matthew Goddard'}, 
            {'id': '4', firstname: 'Andrew', surname: 'Payne', fullname: 'Andrew Payne'}
        ]));

        /*firebase.firestore().collection('users')
            .onSnapshot((querySnapshot) => {

                let collection = [];

                querySnapshot.forEach(doc => collection.push({ id: doc.id, ...doc.data()}));

                dispatch(getUsersSuccess(collection));

            }, (error) => console.log(error))*/

    };
}

export function getUsersSuccess(items) {
    return {
        type: 'GET_USERS_SUCCESS',
        items
    };
}