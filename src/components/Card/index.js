import React from 'react'
import { connect } from 'react-redux'
import { getObjective } from '../../data/objectives/actions'

import './style.css'

const mapDispatchToProps = (dispatch) => {
    return {
        getObjective: (id) => dispatch(getObjective(id))
    };
};

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
                <button onClick={() => this.props.getObjective(this.props.data.id)}>Get objective.</button>
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

    getObjective(id) {
        this.props.getObjective(id)
    }

    render() {
        return (
            <div className="card">
                {this.state.showCardFront ? <CardFront handleCardView={this.showCardBack} data={this.props.data} getObjective={this.getObjective.bind(this)} /> : <CardBack handleCardView={this.showCardFront} />}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Card)