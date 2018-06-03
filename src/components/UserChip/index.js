import React from 'react'
import './style.css'

class UserChip extends React.Component {

    renderUserChip() {
        if (this.props.user) {
            return (
                <div className="user-chip">
                    <div className="user-chip__avatar"></div>
                    <div className="user-chip__details">
                        <span className="user-chip__name">{`${this.props.user.firstname} ${this.props.user.surname}`}</span>
                        <span className="user-chip__role">{ this.props.user.jobTitle }.</span>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                { this.renderUserChip() }
            </div>
        )
    }
}

export default UserChip