import React from 'react'
import { Route } from "react-router-dom";
import Home from "../containers/Home";
import Objectives from "../containers/Objectives";
import Feedback from "../containers/Feedback";
import MyTeam from "../containers/MyTeam";

const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/objectives" component={Objectives} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/my-team" component={MyTeam} />
    </div>
)

export default Routes