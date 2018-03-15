import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import '@firebase/firestore';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const config = {
    apiKey: "AIzaSyDlJ7XT3X3-04SI7ps7Gn_5Fz2_dHHTAOU",
    authDomain: "loop22n.firebaseapp.com",
    databaseURL: "https://loop22n.firebaseio.com",
    projectId: "loop22n",
    storageBucket: "loop22n.appspot.com",
    messagingSenderId: "692347862383"
};

firebase.initializeApp(config);

firebase.firestore().collection('objectives').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
});

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();

export default store