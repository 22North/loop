import React from "react"
import { Redirect, Route } from "react-router-dom"

import SignIn from "../../containers/SignIn"

const fakeAuth = {
    isAuthenticated: false
}

const PrivateRoute = ({ component: Component, ...otherProps }) => (
    <Route {...otherProps} render={props => (
        fakeAuth.isAuthenticated ? ( <Component {...props} />) : (<SignIn />)
    )} />
)

export default PrivateRoute