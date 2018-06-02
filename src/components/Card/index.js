import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.css'

class CardFront extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showCardFront: true
        };
    }

    goToObjective(event) {
        event.preventDefault()
        this.props.goToObjective()
    }

    render() {
        return (
            <a onClick={(event) => this.goToObjective(event) }>
                <div className="card__front card__clickable">
                    <div className={`card__status card__status--${this.props.data.status}`}></div>
                    <div className="date"></div>
                    <div className="card__title">{this.props.data.title}</div>
                    <div className="card__main-text">{this.props.data.description}</div>
                </div>
            </a>
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

        this.goToObjective = this.goToObjective.bind(this)
    }

    showCardFront() {
        this.setState({showCardFront: true})
    }

    showCardBack() {
        this.setState({showCardFront: false})
    }

    loadObjective(data) {
        this.props.loadObjective(data)
    }

    goToObjective() {
        this.props.set(this.props.data)
        this.props.history.push(`/objectives/${this.props.data.id}`)
    }

    render() {
        return (
            <div className="card mb-4">
                {this.state.showCardFront ? <CardFront handleCardView={this.showCardBack} data={this.props.data} goToObjective={this.goToObjective} /> : <CardBack handleCardView={this.showCardFront} />}
            </div>
        )
    }
}

export default withRouter(Card)