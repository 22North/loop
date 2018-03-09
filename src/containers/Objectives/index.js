import React from 'react'
import { ObjectivesNav } from '../../components'

const Objectives = () => 
    <div className="main-container main-container--objectives">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>{"Performance Review."}</h2>
                </div>
            </div>   
            <div class="row">
                <ObjectivesNav />
            </div> 
        </div>
    </div>

export default Objectives