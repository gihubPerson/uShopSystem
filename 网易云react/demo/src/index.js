import React from 'react'

import ReactDOM from 'react-dom'

import App from './App'

//rem文件
import './assets/js/remScale'
//样式重置文件
import './assets/css/reset.css'
//antcss
import 'antd-mobile/dist/antd-mobile.css'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</BrowserRouter>, document.getElementById("root"))