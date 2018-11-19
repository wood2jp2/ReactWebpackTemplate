import Modal from 'react-modal'
import React from 'react'

const OptionModal = props => (
    <div>
        <Modal
            contentLabel="Selected Option"
            onRequestClose={props.clearSelectedOption}
            isOpen={!!props.selectedOption}>
            <h3>Selected Option: {props.selectedOption}</h3>
            <button
                onClick={props.clearSelectedOption}>Okay</button>
        </Modal>
    </div>
)

export default OptionModal