import './style.css'
import React from 'react'
import StarRating from '../../components/StarRating'

const mapStateToProps = (state) => {
    return {
        objectives: state.objectives,
        objective: state.objective.objective
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createObjective: (data) => dispatch(createObjective(data)),
        createTempObjective: ()=> dispatch(createTempObjective()),
        getObjectives: () => dispatch(getObjectives()),
        saveObjective: (data) => dispatch(saveObjective(data)),
        clearObjective: () => dispatch(clearObjective()),
        addToSharedWith: (userId) => dispatch(addToSharedWith(userId))
    };
};

class Feedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            comments: '',
            rating: null,
        };

        this.onStarRatingClick = this.onStarRatingClick.bind(this);
        this.onCommentsChange = this.onCommentsChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onStarRatingClick(rating) {
        this.setState({ ...this.state, rating: rating })
    }

    onCommentsChange(e) {
        console.log(e.target.value);
        this.setState({...this.state, comments: e.target.value})
    }

    onSubmit(e) {
        console.log(this.state.user);
        console.log(this.state.comments);
        console.log(this.state.rating);
        e.preventDefault();
    }


    renderFeedbackForm() {
        return (
            <div className="main-container main-container--feedback">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="main-heading">{"General Feedback."}</h2>
                        </div>
                    </div>   

                    <div className="row">
                        <div className="col-sm-12">

                            <div className="general-feedback-form">
                                <form onSubmit={this.onSubmit}>

                                    Your feedback.
                                
                                    <p>Let them know what they should stop/start/continue to do.</p>
                                    <textarea placeholder="Comments..." value={ this.state.comments } onChange={ this.onCommentsChange } />
                                    <p>How likely are you to recommend them out of 5.</p>
                                    
                                    <div className="mb-4">
                                        <StarRating onClick={ this.onStarRatingClick } />
                                    </div>

                                    <input className="btn" type="submit" value="Send" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderThankYou() {
        return (
            <div>
                <span>Thank you, your feedback has been sent to...</span>
                <span>{ this.state.user.firstname } { this.state.user.surname }</span>
                <span>{ this.state.user.role }></span>
                <button>More feedback.</button><button>Close.</button>
            </div>
        )
    } 

    render() {
        return (
            <div>
                { this.props.showFeedbackForm ? this.renderFeedbackForm : null }
                { this.props.showThankYou ? this.renderThankYou :  null }
            </div>
        )
    }
}

export default Feedback