import React from 'react'
import { 
    Home, 
    CreateObjective, 
    Objectives, 
    Objective, 
    Feedback, 
    MyTeam, 
    MyTeamDetail, 
    SignIn  
} from "../containers"

import { 
    Route, 
    Switch 
} from "react-router-dom"

import PrivateRoute from "../components/PrivateRoute"

const Routes = () => (
    <div className="main-content">
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/objectives" component={Objectives} />
            <PrivateRoute exact path="/objectives/create" component={CreateObjective} />
            <PrivateRoute path="/objectives/:objectiveId" component={Objective} />
            <PrivateRoute exact path="/feedback" component={Feedback} />
            <PrivateRoute exact path="/my-team" component={MyTeam} />
            <PrivateRoute path="/my-team/:userId" component={MyTeamDetail}/>
            <Route path="/signin/" component={SignIn}/>
        </Switch>
    </div>
)

export default Routes