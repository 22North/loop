
import React from 'react'
import ObjectiveCardsFilter from '../ObjectiveCardsFilter'
import { ObjectiveCardsByDraft, ObjectiveCardsByInProgress, ObjectiveCardsByComplete } from '../ObjectiveCardsByType'

class ObjectiveCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objectiveType: 'all'
        };
    }
    
    render() {
        return (    
            <div>
                <ObjectiveCardsFilter />
                <ObjectiveCardsByDraft data={this.props.data} />
                <ObjectiveCardsByInProgress />
                <ObjectiveCardsByComplete />
            </div>
        )
    }
}

export default ObjectiveCards