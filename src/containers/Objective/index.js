import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { addToSharedWith, getObjective, clearObjective, saveObjective, setObjectiveProp } from '../../data/objective/actions'
import ObjectiveView from '../../components/ObjectiveView'

const mapDispatchToProps = (dispatch) => {
    return {
        getObjective: (objectiveId) => dispatch(getObjective(objectiveId)),
        clearObjective: () => dispatch(clearObjective()),
        saveObjective: () => dispatch(saveObjective()),
        setObjectiveProp: (prop, value) => dispatch(setObjectiveProp(prop, value)),
        addToSharedWith: (user) => dispatch(addToSharedWith(user)),
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        objective: state.objective.data,
        usersSharedWith: state.objective.usersSharedWith,
    }
}

class Objective extends React.Component {
    
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    componentDidMount() {
        this.props.getObjective(this.props.match.params.objectiveId)
    }

    componentWillUnmount() {
        this.props.clearObjective()
    }

    goBack() {
        this.props.history.push('/objectives')
    }

    renderObjectiveView() {
        return this.props.objective !== null
            ? <ObjectiveView data={ this.props.objective } usersSharedWith={ this.props.usersSharedWith } close={ this.goBack } save={ this.props.saveObjective } addToSharedWith={ this.props.addToSharedWith } set={ this.props.setObjectiveProp } />
            : null
    }

    render() {
        return (
            <div className="main-container main-container--objectives">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="main-heading">{"Performance Review."}</h2>
                        </div>
                    </div>    
                </div>
                <div className="objectives-container">
                    { this.renderObjectiveView() }
                </div>
            </div> 
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Objective))