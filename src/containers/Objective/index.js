import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { getObjective } from '../../data/objective/actions'
import ObjectiveView from '../../components/ObjectiveView'

const mapDispatchToProps = (dispatch) => {
    return {
        getObjective: (objectiveId) => dispatch(getObjective(objectiveId)),
        clearObjective: () => {},
        saveObjective: () => {},
        addToSharedWith: () => {},
    }
}

const mapStateToProps = (state) => {
    return {
        objective: state.objective.data,
    }
}

class Objective extends React.Component {
    
    componentDidMount() {
        
        const { match, location, history } = this.props

        this.props.getObjective(match.params.objectiveId)
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
                    { this.renderObjectiveView() }
                </div>
            </div> 
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Objective))