import React from 'react'
import { ObjectiveCards } from '../../components'
import { connect } from 'react-redux';
import { getObjectives } from '../../data/objectives/actions';

const mapStateToProps = (state) => {
    return {
        objectives: state.objectives
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getObjectives: () => dispatch(getObjectives())
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
                <ObjectiveCards data={this.props.objectives} />
            </div>      
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Objectives)