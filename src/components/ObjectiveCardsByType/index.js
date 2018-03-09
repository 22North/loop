import React from 'react'

import './style.css'

const ObjectiveCardsByDraft = (props) => 
    <div className={"objective-cards-by-type objective-cards-by-type--draft mb-4"}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="objective-cards-by-type__title">Drafts.</h3>
                </div>
            </div>
            <div class="row">
                <div className="col-sm-4"></div>  
            </div>
        </div>
    </div>
    
const ObjectiveCardsByInProgress = (props) => 
    <div className={"objective-cards-by-type objective-cards-by-type--inProgress mb-4"}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="objective-cards-by-type__title">In Progress.</h3>
                </div>
            </div>
            <div class="row">
                <div className="col-sm-4"></div>  
            </div>
        </div>
    </div>

const ObjectiveCardsByComplete = (props) => 
    <div className={"objective-cards-by-type objective-cards-by-type--complete"}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="objective-cards-by-type__title">Complete.</h3>
                </div>
            </div>
            <div class="row">
                <div className="col-sm-4"></div>  
            </div>
        </div>
    </div>

export {
    ObjectiveCardsByDraft,
    ObjectiveCardsByInProgress,
    ObjectiveCardsByComplete,
}