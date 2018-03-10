import React from 'react'
import './style.css'

class CardFront extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showCardFront: true
        };
    }

    render() {
        return (
            <div className="card__front">
                <div className="status"></div>
                <div className="date"></div>
                <div className="card__title">{this.props.data.title}</div>
                <div className="card__main-text">{this.props.data.description}</div>
                <button className="d-none">Show card back.</button>
            </div>
        )
    }
}

class CardBack extends React.Component {

    render() {
        return (
            <div className="card__back">
                <button>Show card front.</button>
            </div>
        )
    }
}

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCardFront: true
        };
    }

    showCardFront() {
        this.setState({showCardFront: true})
    }

    showCardBack() {
        this.setState({showCardFront: false})
    }

    render() {
        return (
            <div className="card">
                {this.state.showCardFront ? <CardFront handleCardView={this.showCardBack} data={this.props.data} /> : <CardBack handleCardView={this.showCardFront} />}
            </div>
        )
    }
}

export default Card