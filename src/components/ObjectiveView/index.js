
import React from 'react'
import SearchUsers from '../SearchUsers'
import UserChip from '../../components/UserChip'
import { changeObjectiveStatus } from '../../data/objectives/actions'
import { connect } from 'react-redux'

import './style.css'

const mapDispatchToProps = (dispatch) => {
    return {
        changeObjectiveStatus: (value) => dispatch(changeObjectiveStatus(value))
    };
};

const ObjectiveViewMyComments = (props) => {
    return (
        <div className="objective-view__my-comments">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="objective-view__heading">Objective complete.</h3>
                    <h4 className="objective-view__sub-heading">So how do you think you did?</h4>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-12">
                    <textarea className="form-control" defaultValue={ props.data.feedback } placeholder="Comments..." onChange={ (e) => props.data.feedback = e.target.value }></textarea>
                </div>
            </div>
        </div>
    )
}

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
        <button className="objective-view__toggle-button objective-view__toggle-button--edit" onClick={ () => props.showEditFieldsHandle() }>edit.</button>
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
                
            </div>
        </div>
    </div>

class ObjectiveView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditFields: false,
            showFeedbackForm: false
        };
    }

    addToSharedWith(user) {
        this.props.addToSharedWith(user.id)
    }

    changeStatus(value) {
        this.props.changeObjectiveStatus(value)

        if (value === 'complete') {
            this.setState({ ...this.state, showFeedbackForm: true })
        }
    }

    showEditFieldsHandle() {
        this.setState({ ...this.state, showEditFields: true })
    }

    renderStatusHeader() {
        return (
            <div className="row mb-4">
                <div className="col-sm-12">
                    
                    { this.props.data.isNewlyCreated ? <div><span className="objective-view__status-label">Create objective: </span><span>{ this.props.data.status }</span></div> : <div><span className="objective-view__status-label">Objective status: </span><span>{ this.props.data.status }</span></div> }
                    
                </div>
            </div>
        )
    }

    renderStatusDropdown() {
        return (
            <select className={`objective-view__status-select ${this.props.data.status}`} onChange={(e) => this.changeStatus(e.target.value)}>
                <option value="draft" selected={this.props.data.status === 'draft'}>Change status: Draft</option>
                <option value="inProgress" selected={this.props.data.status === 'inProgress'}>Change status: In progress</option>
                <option value="complete" selected={this.props.data.status === 'complete'}>Change status: Completed.</option>
            </select>
        )
    }

    renderTitleAndDescription() {
        return (
            <div className="objective-view__section">
                <ObjectiveViewEditText data={ this.props.data } showEditFields={ this.props.data.isNewlyCreated || this.state.showEditFields } />
                <ObjectViewSavedText data={ this.props.data } showEditFields={ this.props.data.isNewlyCreated || this.state.showEditFields } showEditFieldsHandle={ this.showEditFieldsHandle.bind(this) } />
            </div>
        )
    }

    renderCallToAction() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <button className="objective-view__btn objective-view__btn--save" onClick={ () => this.props.save(this.props.data) }>Save Objective.</button>
                </div>
            </div>
        )
    }

    renderAddedUsers() {
        return (
            <div className="objective-view__shared-with-list">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="objective-view__heading">Working on the objective with:</h3>
                    </div>
                </div>
                <div className="row">  
                    { this.props.data.sharedwith.map( (userId) => <div className="col-md-3" key={ userId }><UserChip actionId={ userId } userId={ userId } /></div> ) }
                </div>
            </div>
        )
    }

    renderSharedWith() {
        return (
            <div className="objective-view__section">
                <button className="objective-view__toggle-button objective-view__toggle-button--edit">edit.</button>
                { this.renderAddedUsers() }
                { this.renderAddUserToObjective() }
            </div>
        )
    }

    renderAddUserToObjective() {
        return (
            <div className="objective-view__users-to-add">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="objective-view__sub-heading">Select a user to share the objective with:</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <SearchUsers onUserClick={this.addToSharedWith.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }

    renderMainView() {
        return (
            <div className={ this.state.showFeedbackForm === false ? 'd-block'  : 'd-none' }>
                { this.renderStatusHeader() }
                { this.renderStatusDropdown() }
                <div className="objective-view__hr"></div>
                { this.renderTitleAndDescription() }
                <div className="objective-view__hr"></div>
                { this.renderSharedWith() }
                <div className="objective-view__hr"></div>
                
            </div>
        )
    }

    renderMyCommentsView() {
        return (
            <div className={ this.state.showFeedbackForm === true ? 'd-block' : 'd-none' }>
                <ObjectiveViewMyComments data={ this.props.data } />
            </div>
        )
    }
    
    render() {
        return (
            <div className="objective-view">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="objective-view__inner">
                                <button className="objective-view__close" onClick={ () => this.props.close() }>close</button>
                                { this.renderMainView() }
                                { this.renderMyCommentsView() }
                                { this.renderCallToAction() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ObjectiveView)