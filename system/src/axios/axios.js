import axios from 'axios'
import {Message} from 'element-ui'
import router from '../router'
let http = axios.create({
    baseURL: '/api'
})

// //请求拦截
http.interceptors.request.use(function (config) {
    let token = JSON.parse(localStorage.getItem("userInfo")).token
    config.headers.authorization = localStorage.getItem("userInfo") ? token : {}
    return config;
});


// http.interceptors.response.use(res => {
//     // 对响应数据做处理
//     // console.log("对响应数据做处理")
//     const code = res.data.code;
//     if (code === 403) {
//       Message.error(res.data.msg)
//       router.push('/login')
//       // 删除token以及user
//       localStorage.removeItem('userInfo')
//       return false;
//     }
// })

export default http