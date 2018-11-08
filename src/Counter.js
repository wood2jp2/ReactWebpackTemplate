//set state example

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.handleReset = this.handleReset.bind(this)
        this.handleSubtractOne = this.handleSubtractOne.bind(this)
        this.handleAddOne = this.handleAddOne.bind(this)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
       const count = parseInt(localStorage.getItem('count'), 10)
       if (!isNaN(count)) {
           this.setState(() => ({ count })) 
       }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    handleAddOne() {
        this.setState(prevState => ({count: prevState.count+1}))
    }

    handleSubtractOne() {
        this.setState(prevState => ({count: prevState.count-1}))
    }

    handleReset() { 
        this.setState(() => ({count: 0}))
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubtractOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))