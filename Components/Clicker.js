import React, {Component} from 'react'

export default class Clicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    changeAmount(e) {
        
    }

    render() {
        return (
            <p>{this.count}</p>
            <button
                onClick={this.changeAmount(e)}>Add</button>
            <button
                onClick={e => this.state -= 1}>Subtract</button>
        )
    }
}