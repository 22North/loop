import React from 'react'
import './style.css'

class StarRating extends React.Component {

    onClick(rating) {
        this.props.onClick(rating)
    }

    render() {
        return (
            <div>
                <span onClick={() => this.onClick(1)}>star 1 </span>
                <span onClick={() => this.onClick(2)}>star 2 </span>
                <span onClick={() => this.onClick(3)}>star 3 </span>
                <span onClick={() => this.onClick(4)}>star 4 </span>
                <span onClick={() => this.onClick(5)}>star 5 </span>
            </div>
        )
    }
}

export default StarRating