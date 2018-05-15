import React from 'react'
import './style.css'

class UserDetailsCard extends React.Component {

    render() {
        return (
            <div className="user-details-card">

                <div className="user-details-card__avatar">

                </div>

                <div className="user-details-card__rating">
                    *****
                </div>
                
                
                <div className="user-details-card__name">
                    Awais Muzaffar.
                </div>
                
                <div className="user-details-card__role">
                    3D Artist.
                </div>

                <div className="user-details-card__email">
                    <strong>Email:&nbsp;</strong>mail@awaismuzaffar.com
                </div>
                
                <div className="user-details-card__mobile">
                    <strong>Mobile:&nbsp;</strong>07708694427   
                </div>

                <div className="user-details-card__manager">
                    <strong>Manager:&nbsp;</strong>Gary Walker  
                </div>

                <div className="user-details-card__direct-reports-count">
                    <strong>Direct reports:&nbsp;</strong>0
                </div>

            </div>
        )
    }
}

export default UserDetailsCard