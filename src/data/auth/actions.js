import { auth } from '../../index'

export function signIn(email, password) {
    return (dispatch) => {
        dispatch(onSignIn())
        auth.signInWithEmailAndPassword(email, password)
            .then(response => dispatch(signInSuccess(response)))
            .catch(() => {
                console.log('failed to sign in')
                return
            })
    }
}

export function onSignIn() {
    return {
        type: 'SIGN_IN',
    }
}

export function signInSuccess(user) {
    return {
        type: 'SIGN_IN_SUCCESS',
        item: user,
    }
}