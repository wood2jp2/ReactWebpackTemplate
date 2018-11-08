// Implicitly returned components can still use a return statement, and perform any desired calculations above that.
import React from 'react'

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

export default Header