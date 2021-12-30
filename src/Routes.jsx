import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './pages/Home/index'
import Config from './pages/Config/index'
import Recovery from './pages/Recovery/index'
import Login from './Login/index'

export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/config">
                <Config/>
            </Route>

            <Route exact path="/sobre">
                <Login/>
            </Route>

            <Route exact path="/recovery">
                <Recovery/>
            </Route>

        </Switch>

    );

}