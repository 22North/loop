import React from 'react'
import { getUser } from '../../data/user/actions'
import { connect } from 'react-redux';

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

    render() {
        return (
            <div className="user-chip">
                <div className="avatar"></div>
                <div className="Name">
                    {this.props.user ? <span>{`${this.props.user.firstname} ${this.props.user.surname}`}</span> : null}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChip)