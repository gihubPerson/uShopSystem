import {getClass,getCate} from '@/axios'
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

}