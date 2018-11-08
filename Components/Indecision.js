import React, {Component} from 'react'
import Header from '../Components/Header'
import Action from '../Components/Action'
import Options from '../Components/Options'
import AddOption from '../Components/AddOptions'

export default class Indecision extends Component {

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
                <Header 
                    title={this.state.title} 
                    subtitle={this.state.subtitle}/>
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