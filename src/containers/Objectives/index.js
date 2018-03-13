import React from 'react'
import { ObjectiveCards } from '../../components'
import { ObjectiveView } from '../../components'
import { connect } from 'react-redux';
import { getObjectives } from '../../data/objectives/actions'
import { clearObjective } from '../../data/objectives/actions'

import './style.css'

const mapStateToProps = (state) => {
    return {
        objectives: state.objectives,
        objective: state.objective.objective
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getObjectives: () => dispatch(getObjectives()),
        clearObjective: () => dispatch(clearObjective())
    };
};

class Objectives extends React.Component {
    
    componentDidMount() {
        this.props.getObjectives();
    }

    render() {
        return (
            
            <div className="main-container main-container--objectives">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>{"Performance Review."}</h2>
                        </div>
                    </div>    
                </div>

                <div className="objectives-container">
                    <ObjectiveCards data={this.props.objectives} />
                    { this.props.objective !== null ? <ObjectiveView data={this.props.objective} close={this.props.clearObjective} />: null }
                </div>

            </div>      
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Objectives)