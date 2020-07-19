//接口列表

import axios from './axios'

//添加菜单列表
export function addMenuList(data){
    return axios.post('/api/menuadd',data)
}

//获取菜单列表
export function getMenuList(params){
    return axios.get('/api/menulist',{
        params
    })
}

//删除菜单列表
export function delMenuList(data){
    return axios.post('/api/menudelete',data)
}


//获取特定条数据
export function getInfo(params){
    console.log(params);
    return axios.get('/api/menuinfo',{
        params
    })
}

//修改菜单列表
export function EditMenuList(data){
    console.log(data);
    return axios.post('/api/menuedit',data)
}
