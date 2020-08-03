import React from 'react'

import '../../assets/css/index.css'

//二级路由组件
import Home from '../views/Home'
import Hot from '../views/Hot'
import Search from '../views/Search'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
class Index extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <div className="fixed">
                <div className="header">
                    <div>
                    <img src={require('../../assets/img/logo.png')} alt=""/>
                    </div>
                    <a href="jacaScript:;">下载APP</a>
                </div>
                <div className="nav">
                    <NavLink activeClassName="active" to="/index/home">推荐音乐</NavLink>
                    <NavLink activeClassName="active" to="/index/hot">热歌榜</NavLink>
                    <NavLink activeClassName="active" to="/index/search">搜索</NavLink>
                </div>
                </div>

                <div className='inner'>
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/hot" component={Hot}></Route>
                    <Route path="/index/search" component={Search}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
                </div>
            </div>
        )
    }
}

export default Index