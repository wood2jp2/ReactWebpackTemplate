import React from 'react'
import Option from './Option'

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

export default Options