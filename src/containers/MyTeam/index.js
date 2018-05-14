import React from 'react'
import UserDetailsCard from '../../components/UserDetailsCard'
import UserReviewCard from '../../components/UserReviewCard'

const MyTeam = () => 
    <div className="main-container main-container--my-team">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="main-heading">{"My Team."}</h2>
                    
                    

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

export default MyTeam