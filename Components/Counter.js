// set state example

class Counter extends React.Component {
    constructor() {
        super()
        this.setState = {
            count: 0
        }
    }

    handleAddOne() {
        this.setState(prevState => ({
            count: prevState.count+1
        }))
    }

    handleSubtractOne() {
        this.setState(prevState => ({
            count: prevState.count-1
        }))
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.handleAddOne}>+1</button>
                <button>-1</button>
                <button>Reset</button>
            </div>
        )
    }
}