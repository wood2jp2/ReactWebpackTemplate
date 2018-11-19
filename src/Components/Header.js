// Implicitly returned components can still use a return statement, and perform any desired calculations above that.
import React, {Component} from 'react'

export default class Header extends Component {
    
    static defaultProps = {
        title: 'Indecision',
        subtitle: 'Place your life in the hands of a computer'
    }

    render = () => (
        <div className="header">
            <h1 className="header__title">{this.props.title}</h1>
            {this.props.subtitle && <h2 className="header__subtitle">{this.props.subtitle}</h2>}
        </div>
    )
}
