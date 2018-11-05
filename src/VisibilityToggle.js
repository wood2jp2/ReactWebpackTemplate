class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }
        this.handleChangeVisibility = this.handleChangeVisibility.bind(this)
    }

    handleChangeVisibility() {
        this.setState(prevState => ({
            visibility: !prevState.visibility
        }))
    }

    render() {
        return (
            <div>
                {this.state.visibility && 
                    <p>These are some details you can see</p>}
                <button onClick={this.handleChangeVisibility}>
                    {this.state.visibility ? 'Hide' : 'Show'} Details
                </button>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))