import axios from './axios'



//获取轮播图
export function getBanner(data){
    return axios.get('/api/getbanner',data)
}

//会员注册
export function register(params){
    return axios.post('/api/register',params)
}

//会员登录
export function login(params){
    return axios.post('/api/login',params)
}

//获取分类
export function getClass(data){
    return axios.get('/api/getcate',data)
}