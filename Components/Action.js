import React from 'react'

// all class-based components require a render() method.
const Action = props => (
    <div>
        <button 
            disabled={!props.hasOptions}
            onClick={props.handlePick}
        >What should I do?</button>
    </div>

)

export default Action