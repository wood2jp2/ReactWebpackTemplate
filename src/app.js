const app = document.getElementById('app')

class Indecision extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Indecision',
            subtitle: 'Place your life in the hands of a computer', 
            options: []
        }

        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
    }
    
    handleAddOption(option) {
        this.setState({options: [...this.state.options, option]})
    }

    handleDeleteOption(option) {
        console.log(option)
        this.setState(prevState => {
            options: prevState.options.filter((x, i) => {
                if (i !== option) {
                    return x
                }
            })
        })
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }

    handlePick() {
        let randomPick = Math.floor(this.state.options.length * Math.random())
        alert(this.state.options[randomPick])
    }
    
    render() {
        return (
            <div>
                <Header 
                    title={this.state.title} 
                    subtitle={this.state.subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={e => this.handleDeleteOption(e)} />
                <AddOption 
                    handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

// Implicitly returned components can still use a return statement, and perform any desired calculations above that.
const Header = props => 
        (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        )

const Option = props => (
    <div>
        <p>{props.text}</p>
        <button index={props.index} onClick={e=> props.handleDeleteOption(e)}>Delete</button>
    </div>
)
// all class-based components require a render() method.
class Action extends React.Component {    
    render() {
        return (
            <div>
                <button 
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}
                >What should I do?</button>
            </div>

        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.HandleAddOption = this.HandleAddOption.bind(this)
    }

    HandleAddOption(e) {
        e.preventDefault()
        let option = e.target.addOptionForm.value.trim()
        this.props.handleAddOption(option)
        e.target.addOptionForm.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.HandleAddOption(e)}>
                    <input name="addOptionForm"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                {/* Key is a special reserved name value, inaccessible by props. */}
                {this.props.options.length > 0 ? this.props.options.map(
                    (opt, i) => 
                        <Option index={i} handleDeleteOption={e => this.HandleDeleteOption(e)} text={opt} key={i}/>
                    ) 
                    :
                    <p>There are no options to display.</p>}
                <button 
                    onClick={this.props.handleDeleteOptions}
                    disabled={!this.props.options.length > 0}>
                        Remove All
                </button>
                    
            </div>
        )
    }
}


ReactDOM.render(<Indecision />, app)
