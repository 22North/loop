import './style.css'
import React from 'react'
import StarRating from '../../components/StarRating'

class Feedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: null,
            selectedRating: null
        };
    }

    onStarRatingClick(rating) {
        this.setState({...this.state, selectedRating: rating})
    }

    render() {
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
                                <form>
                                    Your feedback.
                                    <p>Let them know what they should stop/start/continue to do.</p>
                                    <textarea placeholder="Comments..."></textarea>
                                    <p>How likely are you to recommend them out of 5.</p>
                                    <StarRating onClick={this.onStarRatingClick.bind(this)} />
                                    <button className="btn">Send.</button>
                                </form>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback