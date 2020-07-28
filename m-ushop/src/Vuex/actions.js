import {getClass} from '@/axios'
export default {
    getClassList({commit}){
        getClass().then((res)=>{
            commit('pushClassList',res.data.list)
        })
    }
}