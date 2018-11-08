const app = document.getElementById('app')

class Indecision extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Indecision',
            subtitle: 'Place your life in the hands of a computer', 
            options: props.options
        }

        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
    }
    
    handleAddOption(option) {
        if (!option) {
            return 'Please provide an option to add'
        } else if (this.state.options.includes(option)) {
            return 'You already are tracking this option!'
        }
        
        this.setState(prevState => ({options: [...prevState.options, option]}))
    }

    handleDeleteOption(optionToRemove) {
        console.log(optionToRemove)
        this.setState(prevState => ({
            options: prevState.options.filter(opt => opt !== optionToRemove)
        }))
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }

    handlePick() {
        let randomOption = Math.floor(this.state.options.length * Math.random())
        alert(this.state.options[randomOption])
    }

    // Lifecycle methods only usable on class-based components

    // fires after component is rendered on page
    // fetch data here
    componentDidMount(prevProps, prevState) {
        try {
            const options = JSON.parse(localStorage.getItem('options'))

            if (options) {
                this.setState(() => ({options}))
            }
        }
        catch (e) {

        }
    }

    // fires before component is rendered on page
    componentWillMount() {
        console.log('will mount')
    }

    //
    // shouldComponentUpdate() {
    //     console.log('should component update')
    // }

    // fires before state or props values change.
    componentWillUpdate() {
        console.log('updated')
    }
    
    // fires after state or props values change. Arguments are as follows.
    // save data here
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options)
            console.log('saving data')
            localStorage.setItem('options', json)
        }
    }

    // fires when a component disappears
    componentWillUnmount() {
        console.log('component will unmount')
    }

    // fires as a component is about to receive props
    componentWillReceiveProps() {
        console.log('component will receive props')
    }
    
    render() {
        return (
            <div>
                <Header />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption 
                    handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

Indecision.defaultProps = {
    options: []
}

// Implicitly returned components can still use a return statement, and perform any desired calculations above that.
const Header = props => 
(
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
)

// these are similar to default args in functions, and take the place if the props are not defined at component mount.
Header.defaultProps = {
    title: 'Indecision'
}

const Option = props => (
    <div>
        {props.text}
        <button index={props.index} onClick={e => props.handleDeleteOption(props.text)}>remove</button>
    </div>
)
// all class-based components require a render() method.
const Action = props => (
    <div>
        <button 
            disabled={!props.hasOptions}
            onClick={props.handlePick}
        >What should I do?</button>
    </div>

)

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    clearOrPersistInput(e, option) {
        if (this.state.error === undefined) {
            e.target.addOptionForm.value = ''
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        let option = e.target.addOptionForm.value.trim()
        const error = this.props.handleAddOption(option)
        e.persist()
        this.setState(() => ({error}), () => {
            this.clearOrPersistInput(e)
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={e => this.handleAddOption(e)}>
                    <input name="addOptionForm"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const Options = props => (
    <div>
        {/* Key is a special reserved name value, inaccessible by props. */}
        {props.options.length > 0 ? props.options.map(
            (opt, i) => 
                <Option 
                    index={i} 
                    handleDeleteOption={props.handleDeleteOption} 
                    text={opt} 
                    key={i}/>
            ) 
            :
            <p>There are no options to display.</p>}
        <button 
            onClick={props.handleDeleteOptions}
            disabled={!props.options.length > 0}>
                Remove All
        </button>
    </div>
)

ReactDOM.render(<Indecision />, app)
