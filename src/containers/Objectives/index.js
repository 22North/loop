import React from 'react'
import { ObjectiveCards } from '../../components'
import { ObjectiveView } from '../../components'
import { connect } from 'react-redux';
import { createObjective, createTempObjective, getObjectives, saveObjective, clearObjective, addToSharedWith } from '../../data/objectives/actions'

import './style.css'

const mapStateToProps = (state) => {
    return {
        objectives: state.objectives,
        objective: state.objective.objective
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createObjective: (data) => dispatch(createObjective(data)),
        createTempObjective: ()=> dispatch(createTempObjective()),
        getObjectives: () => dispatch(getObjectives()),
        saveObjective: (data) => dispatch(saveObjective(data)),
        clearObjective: () => dispatch(clearObjective()),
        addToSharedWith: (userId) => dispatch(addToSharedWith(userId))
    };
};

class Objectives extends React.Component {
    
    componentDidMount() {
        this.props.getObjectives();
    }

    renderObjectiveView() {
        return this.props.objective !== null
            ? <ObjectiveView data={ this.props.objective } close={ this.props.clearObjective } save={ this.props.saveObjective } addToSharedWith={ this.props.addToSharedWith } />
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
                    <ObjectiveCards data={ this.props.objectives } create={ this.props.createTempObjective } />
                    { this.renderObjectiveView() }
                </div>
            </div> 
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Objectives)