import {getMenuList,getRoleList} from '../axios'

export default {
    changeMenuListY({ commit }) {            //调用此异步函数传参修改菜单列表
        getMenuList({
            istree:true
        }).then((res) => {
            commit('changeMenuList', res.data.list)
        })
    },

    changeRoleListY({ commit }) {            //调用此异步函数传参修改角色列表
        getRoleList().then((res) => {
            console.log(res);
            commit('changeRoleList', res.data.list)
        })
    },
}