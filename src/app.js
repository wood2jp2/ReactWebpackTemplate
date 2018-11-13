import React from 'react'
import ReactDOM from 'react-dom'
import Indecision from '../Components/Indecision'

const app = document.getElementById('app')

ReactDOM.render(<Indecision options={['hey props']} />, app)