import axios from './axios'



//获取轮播图
export function getBanner(data) {
    return axios.get('/api/getbanner', data)
}

//会员注册
export function register(params) {
    return axios.post('/api/register', params)
}

//会员登录
export function login(params) {
    return axios.post('/api/login', params)
}

//获取分类
export function getClass(data) {
    return axios.get('/api/getcate', data)
}

//x显示秒杀
export function getSecl(data) {
    return axios.get('/api/getseckill', data)
}

//获取首页商品列表
export function getIndexGoods(data) {
    return axios.get('/api/getindexgoods', data)
}

//添加购物车
export function cartAdd(params) {
    return axios.post('/api/cartadd', params)
}

//添加购物车
export function getCart(uid) {
    return axios.get('/api/cartlist', {
        params: {
            uid
        }
    })
}

//获取分类树形
export function getCate(data) {
    return axios.get('/api/getcatetree', data)
}

//获取分类商品
export function getGoods(fid) {
    return axios.get('/api/getgoods', {
        params: {
            fid
        }
    })
}
//获取分类商品
export function getGoodsInfo(id) {
    return axios.get('/api/getgoodsinfo', {
        params: {
            id
        }
    })
}
//删除购物车
export function cartDel(id) {
    return axios.post('/api/cartdelete', {
       id
    })
}

