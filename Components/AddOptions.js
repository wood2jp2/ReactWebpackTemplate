import React, {Component} from 'react'

export default class AddOption extends Component {
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