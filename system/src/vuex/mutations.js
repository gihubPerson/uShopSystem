export default{
    changeMenuList(state,n){  //更新菜单列表
        state.menuList = n
    },
    changeRoleList(state,n){  //更新角色列表
        state.roleList = n
    },
    changeUserList(state,n){  //更新管理员列表
        state.userList = n
    },
    changeCateList(state,n){  //更新商品分类列表
        state.cateList = n
    },
    changeSpecsList(state,n){  //更新商品规格列表
        state.specsList = n
    },

}