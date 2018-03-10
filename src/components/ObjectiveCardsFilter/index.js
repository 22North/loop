import React from 'react'

const ObjectiveCardsFilter = (props) => 
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <ul className="nav nav-tabs float-right">
                    <li className="nav-item"><button onClick={ () => props.setType('draft') }>{"Drafts."}</button></li>
                    <li className="nav-item"><button onClick={ () => props.setType('inProgress') }>{"In Progress."}</button></li>
                    <li className="nav-item"><button onClick={ () => props.setType('complete') }>{"Complete."}</button></li>
                    <li className="nav-item"><button onClick={ () => props.setType(null) }>{"Show all."}</button></li>
                </ul>
            </div>
        </div>
        <div className="clearfix mb-4"></div>
    </div>
    

export default ObjectiveCardsFilter