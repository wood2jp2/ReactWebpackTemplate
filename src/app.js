const app = document.getElementById('app')



class Header extends React.Component {
    // MUST define a render() method for all React components.
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Place your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    ChooseOption() {
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



class Option extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            text: props.text
        }
    }

    render() {
        return (
            <p>{this.state.text}</p>
        )
    }
}

class AddOption extends React.Component {

    constructor(props) {
        super(props)
    }

    AddOptionToList(e) {
        e.preventDefault()
        let option = e.target.addOptionForm.value
        this.props.addOption(option)
        e.target.addOptionForm.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.AddOptionToList(e)}>
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
    }

    RetrieveAddedOption(option) {
        this.setState(state => {
            console.log(state)
        })
    }
    
    render() {
        return (
            <div>
            
                {this.state.options.length > 0 && this.state.options.map(opt => 
                    <Option text={opt} />
                ) || <p>There are no options to display.</p>}
                <AddOption addOption={e => this.RetrieveAddedOption(e)}/>
            </div>
        )
    }
}

class Indecision extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
            </div>
        )
    }
}

ReactDOM.render(<Indecision />, app)
