import React from 'react'
import { getUser } from '../../data/user/actions'
import { connect } from 'react-redux';

import './style.css'

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        user: state.user[ownProps.actionId]
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUser: (userId) => dispatch(getUser(ownProps.actionId, userId))
    };
};

class UserChip extends React.Component {

    componentWillMount() {
        this.props.getUser(this.props.userId)
    }

    renderUserChip() {
        if (this.props.user) {
            return (
                <div className="user-chip">
                    <div className="user-chip__avatar"></div>
                    <div className="user-chip__details">
                        <span>{`${this.props.user.firstname} ${this.props.user.surname}`}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserChip)