import axios from 'axios'
import {Message} from 'element-ui'
import router from '../router'
let http = axios.create({
    baseURL: '/api'  //可写可不写  用来给所有的请求地址前加上 /api 在跨域的时候被重写了
})

// 请求拦截
http.interceptors.request.use(function (config) {
    config.headers.authorization = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).token : {}
    return config;
});

//响应拦截
http.interceptors.response.use(res => {
    // 对响应数据做处理
    // console.log("对响应数据做处理")
    const code = res.data.code;
    if (code === 403) {
      Message.error(res.data.msg)
      router.push('/login')
      // 删除token以及user
      localStorage.removeItem('userInfo')
    }else{
      return res;
    }
})

export default http