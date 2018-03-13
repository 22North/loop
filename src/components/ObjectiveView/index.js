
import React from 'react'

import './style.css'

const ObjectiveView = (props) => 
    <div className="objective-view">
        
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="objective-view__inner">
                        <button className="objective-view__close" onClick={() => props.close()}>close</button>
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="objective-view__title">
                                    {props.data.title}
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="objective-view__description">
                                    {props.data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default ObjectiveView