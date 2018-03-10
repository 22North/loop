
import React from 'react'
import ObjectiveCardsFilter from '../ObjectiveCardsFilter'
import { ObjectiveCardsByDraft, ObjectiveCardsByInProgress, ObjectiveCardsByComplete } from '../ObjectiveCardsByType'

class ObjectiveCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objectiveType: null
        };
    }

    setObjectiveType(type) {
        this.setState({objectiveType: type})
    }

    isVisible(type) {
        return (this.state.objectiveType === type || this.state.objectiveType === null ? true : false)
    }
    
    render() {
        return (    
            <div>
                <ObjectiveCardsFilter setType={ this.setObjectiveType.bind(this) } />
                <ObjectiveCardsByDraft data={ this.props.data.objectives.filter(item => item.type === 'draft') } isVisible={ this.isVisible('draft') } />
                <ObjectiveCardsByInProgress data={ this.props.data.objectives.filter(item => item.type === 'inProgress') } isVisible={ this.isVisible('inProgress') } />
                <ObjectiveCardsByComplete data={ this.props.data.objectives.filter(item => item.type === 'complete') } isVisible={ this.isVisible('complete') } />
            </div>
        )
    }
}

export default ObjectiveCards