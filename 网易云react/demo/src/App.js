import React from 'react'

import {Route,Switch,Redirect} from 'react-router-dom'
//路由
import Index from './components/pages/index'
import Play from './components/pages/play'
class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <Switch>
                <Route path="/index" component={Index}></Route>
                <Route path="/play" component={Play}></Route>
                <Redirect to="/index"></Redirect>
            </Switch>
        )
    }
}

export default App