import {getMenuList,getRoleList,getUserList,getCateList,getSpecsList} from '../axios'

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
            commit('changeRoleList', res.data.list)
        })
    },

    changeUserListY({ commit },userInfo) {            //调用此异步函数传参修改管理员列表
        getUserList(userInfo).then((res) => {
            commit('changeUserList', res.data.list)
        })
    },

    changeCateListY({ commit }) {            //调用此异步函数传参修改商品分类列表
        getCateList({
            istree:true
        }).then((res) => {
            commit('changeCateList', res.data.list)
        })
    },

    changeSpecsListY({ commit },userInfo) {            //调用此异步函数传参修改商品规格列表
        getSpecsList(userInfo).then((res) => {
            commit('changeSpecsList', res.data.list)
        })
    },
}