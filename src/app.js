import ReactDOM from 'react-dom'
import React from 'react'
import './Styles/styles.scss'
import 'normalize.css/normalize.css'
import Routes from './Router/Router'

const app = document.getElementById('app')

ReactDOM.render(<Routes />, app)