import React from 'react'
import UserDetailsCard from '../../components/UserDetailsCard'
import UserReviewCard from '../../components/UserReviewCard'

import './style.css'

class MyTeamDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="main-container main-container--user-detail user-detail-view">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="main-heading d-none">{"My Team."}</h2>        
                        </div>
                        <div className="col-sm-6">
                            <a className="btn btn--black float-sm-right" href="/my-team/">Back to team.</a>       
                        </div>
                    </div>    
                    <div class="row">
                        <div className="col-sm-6">
                            <UserDetailsCard />
                        </div>
                        <div className="col-sm-6">
                            <UserReviewCard />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyTeamDetail