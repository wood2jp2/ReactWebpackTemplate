// set state example
import React, {Component} from 'react'

export default class Counter extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count: 0
    //     }

        // All manual binds are unnecessary due to transform-class-properties babel plugin.
        // this.handleSubtractOne = this.handleSubtractOne.bind(this)
        // this.handleReset = this.handleReset.bind(this)
        // this.handleAddOne = this.handleAddOne.bind(this)
    // }

    // declare state like so (no need for 'this')
    state = {
        count: 0
    }

    // Arrow functions automatically bind this to the method, without the need to do so in a constructor.

    handleAddOne = () => 
        this.setState(prevState => ({
            count: prevState.count+1
        }))
    

    handleSubtractOne = () => this.setState(prevState => ({ count: prevState.count-1 }))
    

    handleReset = () => this.setState(() => ({count: 0}))
    
    render = () => (
                    <div>
                        <h3>Count: {this.state.count}</h3>
                        <button onClick={this.handleAddOne}>+1</button>
                        <button onClick={this.handleSubtractOne}>-1</button>
                        <button onClick={this.handleReset}>Reset</button>
                    </div>
                    )
}