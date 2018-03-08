import React from 'react'
import './style.css'

class CardFront extends React.Component {

    render() {
        return (
            <div class="card__front">
                <div class="status"></div>
                <div class="date"></div>
                <div class="card__title">{"placeholder title"}</div>
                <div class="card__main-text">{"placeholder main text"}</div>
                <button>Show card back.</button>
            </div>
        )
    }
}

class CardBack extends React.Component {

    render() {
        return (
            <div class="card__back">
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
            <div class="card">
                {this.state.showCardFront ? <CardFront handleCardView={this.showCardBack} /> : <CardBack handleCardView={this.showCardFront} />}
            </div>
        )
    }
}

export default Card