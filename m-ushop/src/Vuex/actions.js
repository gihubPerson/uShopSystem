import {getClass,getCate,getCart} from '@/axios'
export default {
    getClassList({commit}){
        getClass().then((res)=>{
            commit('pushClassList',res.data.list)
        })
    },
    getList({commit}){
        getCate().then((res)=>{
            commit('changeGoodsList',res.data.list)
        })
    },
    getCartList({commit},uid){
        getCart(uid).then((res)=>{
            commit('changeCartList',res.data.list)
        })
    },

}