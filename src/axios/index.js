//接口列表

import axios from './axios'


//     ==================   菜单接口
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
export function getMenuInfo(params){
    return axios.get('/api/menuinfo',{
        params
    })
}

//修改菜单列表
export function EditMenuList(data){
    return axios.post('/api/menuedit',data)
}



//     ==================   角色接口
//添加菜单列表
export function addRoleList(data){
    return axios.post('/api/roleadd',data)
}

//获取菜单列表
export function getRoleList(params){
    return axios.get('/api/rolelist',{
        params
    })
}

//删除菜单列表
export function delRoleList(data){
    return axios.post('/api/roledelete',data)
}


//获取特定条数据
export function getRoleInfo(params){
    return axios.get('/api/roleinfo',{
        params
    })
}

//修改菜单列表
export function EditRoleList(data){
    return axios.post('/api/roleedit',data)
}
