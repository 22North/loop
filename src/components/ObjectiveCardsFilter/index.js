import React from 'react'

import './style.css' 

const ObjectiveCardsFilter = (props) => 

    <div className="objectives-filter">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="objectives-filter__inner">
                        <ul className="nav nav-tabs float-right">
                            <li className="nav-item"><button onClick={ () => props.setType('draft') }>{"Drafts."}</button></li>
                            <li className="nav-item"><button onClick={ () => props.setType('inProgress') }>{"In Progress."}</button></li>
                            <li className="nav-item"><button onClick={ () => props.setType('complete') }>{"Complete."}</button></li>
                            <li className="nav-item"><button onClick={ () => props.setType(null) }>{"Show all."}</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="clearfix mb-4"></div>
    </div>

    
    

export default ObjectiveCardsFilter