
import React from 'react'

import './style.css'

const ObjectiveViewEditText = (props) =>
    <div className={ !props.showEditFields ? "d-none" : null }>
        <div className="row mb-4">
            <div className="col-sm-12">
                <input className="form-control" type="text" defaultValue={ props.data.title } onChange={ (e) => props.data.title = e.target.value } />
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-sm-12">
                <textarea className="form-control" defaultValue={ props.data.description } onChange={ (e) => props.data.description = e.target.value } />
            </div>
        </div>
    </div>

const ObjectViewSavedText = (props) =>
    <div className={ props.showEditFields ? "d-none" : null }>
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
                    { props.data.description }
                </p>
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-sm-12">
                <button onClick={ () => props.showEditFieldsHandle() }>edit.</button>
            </div>
        </div>
    </div>

class ObjectiveView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditFields: false
        };
    }

    showEditFieldsHandle() {
        this.setState({ showEditFields: true })
    }

    render() {
        return (
            <div className="objective-view">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="objective-view__inner">
                                <button className="objective-view__close" onClick={ () => this.props.close() }>close</button>
                                <div className="row mb-4">
                                    <div className="col-sm-12">
                                        <div>{ this.props.data.status }</div>
                                    </div>
                                </div>
                                <ObjectiveViewEditText data={ this.props.data } showEditFields={ this.state.showEditFields } />
                                <ObjectViewSavedText data={ this.props.data } showEditFields={ this.state.showEditFields } showEditFieldsHandle={ this.showEditFieldsHandle.bind(this) } />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <button onClick={ () => this.props.update(this.props.data) }>Save.</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ObjectiveView