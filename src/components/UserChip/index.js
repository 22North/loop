import React from 'react'
import { getUser } from '../../data/users/actions'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
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
            <div>
                <div className="avatar"></div>
                jghjjhghjgj
                <div className="Name">
                    <span>{this.props.user ? this.props.user.firstname : null}</span>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChip)