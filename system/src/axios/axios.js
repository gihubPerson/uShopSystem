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


// http.interceptors.response.use(res => {
//     // 对响应数据做处理
//     // console.log("对响应数据做处理")
//     const code = res.data.code;
//     if (code === 401) {
//       // 判断res.data.res_code 是否是401 如果是则跳转到登录，如果不是则正常返回
//       ElementUI.Message({
//         message: '请登录',
//         type: 'warning'
//       });
//       router.push('/login')
//       // 删除token以及user
//       localStorage.removeItem('user')
//       localStorage.removeItem('token')
//       return false;
//     }
// })

export default http