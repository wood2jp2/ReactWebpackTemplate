import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOptions'
import Counter from './Counter'

export default class Indecision extends Component {

    static defaultProps = {
        options: []
    }
    
    state = {
        options: this.props.options
    }

    handleAddOption = option => {
        if (!option) {
            return 'Please provide an option to add'
        } else if (this.state.options.includes(option)) {
            return 'You already are tracking this option!'
        }
        this.setState(prevState => ({options: [...prevState.options, option]}))
    }

    handleDeleteOption = optionToRemove => {
        this.setState(prevState => ({
            options: prevState.options.filter(opt => opt !== optionToRemove)
        }))
    }

    handleDeleteOptions = () => this.setState(() => ({options: []}))

    handlePick = () => {
        let randomOption = Math.floor(this.state.options.length * Math.random())
        alert(this.state.options[randomOption])
    }

    // Lifecycle methods only usable on class-based components

    // fires after component is rendered on page
    // fetch data here
    componentDidMount = (prevProps, prevState) => {
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
    componentWillMount = () => console.log('will mount')

    //
    // shouldComponentUpdate() {
    //     console.log('should component update')
    // }

    // fires before state or props values change.
    componentWillUpdate = () => console.log('updated')
    
    // fires after state or props values change. Arguments are as follows.
    // save data here
    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options)
            console.log('saving data')
            localStorage.setItem('options', json)
        }
    }

    // fires when a component disappears
    componentWillUnmount = () => console.log('component will unmount')
        
    // fires as a component is about to receive props
    componentWillReceiveProps = () => console.log('component will receive props')
    
    render = () => (
                        <div>
                            <Header 
                                // because these are null, Header's defaultProps will kick in
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
                            <Counter />
                        </div>
                    )
}