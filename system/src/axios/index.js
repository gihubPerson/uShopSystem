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
//添加角色列表
export function addRoleList(data){
    return axios.post('/api/roleadd',data)
}

//获取角色列表
export function getRoleList(params){
    return axios.get('/api/rolelist',{
        params
    })
}

//删除角色列表
export function delRoleList(data){
    return axios.post('/api/roledelete',data)
}


//获取特定条数据
export function getRoleInfo(params){
    return axios.get('/api/roleinfo',{
        params
    })
}

//修改角色列表
export function EditRoleList(data){
    return axios.post('/api/roleedit',data)
}



//     ==================   管理员接口
//添加管理员列表
export function addUserList(data){
    return axios.post('/api/useradd',data)
}

//获取管理员列表
export function getUserList(params){
    return axios.get('/api/userlist',{
        params
    })
}

//删除管理员列表
export function delUserList(data){
    return axios.post('/api/userdelete',data)
}


//获取特定条数据
export function getUserInfo(params){
    return axios.get('/api/userinfo',{
        params
    })
}

//修改管理员列表
export function EditUserList(data){
    return axios.post('/api/useredit',data)
}
//修改管理员列表
export function getUserCount(){
    return axios.get('/api/usercount')
}


// =============登录
export function userLogin(data){
    console.log(data);
    return axios.post('/api/userlogin',data)
}


//     ==================   商品分类
//添加商品分类列表
export function addCateList(data){
    return axios.post('/api/cateadd',data)
}

//获取商品分类列表
export function getCateList(params){
    return axios.get('/api/catelist',{
        params
    })
}

//删除商品分类列表
export function delCateList(data){
    return axios.post('/api/catedelete',data)
}


//获取特定条数据
export function getCateInfo(params){
    return axios.get('/api/cateinfo',{
        params
    })
}

//修改商品分类列表
export function EditCateList(data){
    return axios.post('/api/cateedit',data)
}



//     ==================   商品规格接口
//添加商品规格列表
export function addSpecsList(data){
    return axios.post('/api/specsadd',data)
}

//获取商品规格列表
export function getSpecsList(params){
    return axios.get('/api/specslist',{
        params
    })
}

//删除商品规格列表
export function delSpecsList(data){
    return axios.post('/api/specsdelete',data)
}


//获取特定条数据
export function getSpecsInfo(params){
    return axios.get('/api/specsinfo',{
        params
    })
}

//修改商品规格列表
export function EditSpecsList(data){
    return axios.post('/api/specsedit',data)
}
//获取数量列表
export function getSpecsCount(){
    return axios.get('/api/specscount')
}



//     ==================   商品管理接口
//添加商品管理列表
export function addGoodsList(data){
    return axios.post('/api/goodsadd',data)
}

//获取商品管理列表
export function getGoodsList(params){
    return axios.get('/api/goodslist',{
        params
    })
}

//删除商品管理列表
export function delGoodsList(data){
    return axios.post('/api/goodsdelete',data)
}


//获取特定条数据
export function getGoodsInfo(params){
    return axios.get('/api/goodsinfo',{
        params
    })
}

//修改商品管理列表
export function EditGoodsList(data){
    return axios.post('/api/goodsedit',data)
}
//获取数量列表
export function getGoodsCount(){
    return axios.get('/api/goodscount')
}