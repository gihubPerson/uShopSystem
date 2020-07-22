import axios from 'axios'

let http = axios.create({
    baseURL: '/api'
})

//请求拦截
http.interceptors.request.use(function (config) {
    let token = JSON.parse(localStorage.getItem("userInfo")).token
    config.headers.authorization = token ? token : {}
    return config;
});


export default http