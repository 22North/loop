import React from 'react'

const ObjectiveCardsFilter = (props) => 
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <ul>
                    <li><button>{"Drafts."}</button></li>
                    <li><button>{"In Progress."}</button></li>
                    <li><button>{"Complete."}</button></li>
                    <li><button>{"Show all."}</button></li>
                </ul>
            </div>
        </div>
    </div>

export default ObjectiveCardsFilter