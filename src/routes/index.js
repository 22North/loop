import React from 'react'
import { Home, Objectives, Feedback, MyTeam  } from "../containers"
import { Route } from "react-router-dom"

const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/objectives" component={Objectives} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/my-team" component={MyTeam} />
    </div>
)

export default Routes