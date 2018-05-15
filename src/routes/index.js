import React from 'react'
import { Home, Objectives, Feedback, MyTeam, MyTeamDetail  } from "../containers"
import { Route } from "react-router-dom"

const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/objectives" component={Objectives} />

        <Route exact path="/feedback" component={Feedback} />

        <Route exact path="/my-team" component={MyTeam} />
        <Route path="/my-team/:userId" component={MyTeamDetail}/>
        
    </div>
)

export default Routes