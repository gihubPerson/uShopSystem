import axios from './axios'

//推荐歌单
export function getPersonAlized(num){
    return axios.get(`/personalized?limit=${num}`)
}

//推荐xinge
export function getNewSong(){
    return axios.get(`/personalized/newsong`)
}

//热歌
export function getHotList(){
    return axios.get(`/playlist/detail?id=3778678`)
}

//热搜
export function getHotSearch(){
    return axios.get(`/search/hot`)
}

//banner
export function getBanner(type){
    return axios.get(`/banner`,{
        params:{
            type
        }
    })
}

//
export function getSearchResult(keywords){
    return axios.get(`/search`,{
        params:{
            keywords
        }
    })
}

//搜索建议
export function getSearchSuggest(keywords){
    return axios.get(`/search/suggest`,{
        params:{
            keywords
        }
    })
}