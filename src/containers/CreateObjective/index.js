import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addToSharedWith, createObjective, getEmptyObjective, setObjectiveProp } from '../../data/objective/actions'
import ObjectiveView from '../../components/ObjectiveView'

const mapDispatchToProps = (dispatch) => {
    return {
        addToSharedWith: (user) => dispatch(addToSharedWith(user)),
        createObjective: () => dispatch(createObjective()),
        getEmptyObjective: (objectiveId) => dispatch(getEmptyObjective()),
        setObjectiveProp: (prop, value) => dispatch(setObjectiveProp(prop, value)),
    }
}

const mapStateToProps = (state) => {
    return {
        objective: state.objective.data,
        usersSharedWith: state.objective.usersSharedWith,
    }
}

class CreateObjective extends React.Component {
    
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
        this.saveObjective = this.saveObjective.bind(this)
    }

    componentDidMount() {
        this.props.getEmptyObjective()
    }

    goBack() {
        this.props.history.push('/objectives')
    }

    saveObjective() {
        this.props.createObjective().then(() => this.goBack())
    }

    renderObjectiveView() {
        return this.props.objective !== null
            ? <ObjectiveView 
                data={ this.props.objective } 
                close={ this.goBack } 
                save={ this.saveObjective }
                set={ this.props.setObjectiveProp }
                addToSharedWith={ this.props.addToSharedWith } 
                usersSharedWith={ this.props.usersSharedWith } />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateObjective))