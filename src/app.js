const app = document.getElementById('app')

// Implicitly returned components can still use a return statement, and perform any desired calculations above that.
const Header = props => 
        (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        )

const Option = props => <p>{props.text}</p>

// all class-based components require a render() method.
class Action extends React.Component {

    HandlePick() {
        console.log("choosing random option")
    }
    
    render() {
        return (
            <div>
                <button onClick={this.ChooseOption}>What should I do?</button>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        let option = e.target.addOptionForm.value.trim()
        this.props.addOption(option)
        e.target.addOptionForm.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input name="addOptionForm"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor() {
        super()
        this.state = {
            options: []
        }
        this.RemoveAll = this.RemoveAll.bind(this)
    }

    RemoveAll() {
        this.setState({
            options: []
        })
    }
    
    RetrieveAddedOption(option) {
        this.setState({options: [...this.state.options, option]})
    }
    
    render() {
        return (
            <div>
                {/* Key is a special reserved name value, inaccessible by props. */}
                {this.state.options.length > 0 && this.state.options.map(
                    (opt, i) => 
                        <Option text={opt} key={i}/>
                    ) 
                    || 
                    <p>There are no options to display.</p>}
                <AddOption addOption={e => this.RetrieveAddedOption(e)}/>
                <button onClick={this.RemoveAll}>Remove All</button>
            </div>
        )
    }
}

class Indecision extends React.Component {
    render() {
        const 
            title = 'Indecision', 
            subtitle = 'Place your life in the hands of a computer', 
            options = ['Thing One', 'Thing Two', 'Thing Five'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options />
            </div>
        )
    }
}

ReactDOM.render(<Indecision />, app)
