import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import HomePage from '../Components/HomePage';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFound'
import Indecision from '../Components/Indecision'

const StaticHeader = () => (
    <div>
    <p>Header with static route links</p>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
        <Link to='/indecision'>Indecision</Link>
    </div>
)

const Routes = () => (
    <BrowserRouter>
        <div>
            <StaticHeader />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route path='/Indecision' component={Indecision} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default Routes