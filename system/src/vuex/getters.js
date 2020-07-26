export default {
    getMenuList(state){          //获取菜单列表计算属性
        return state.menuList
    },
    getRoleList(state){          //获取角色列表计算属性
        return state.roleList
    },
    getUserList(state){          //获取管理员列表计算属性
        
        return state.userList
    },
    getCateList(state){          //获取商品分类列表计算属性
        
        return state.cateList
    },
    getSpecsList(state){          //获取商品分类列表计算属性
        
        return state.specsList
    },
    getGoodsList(state){          //获取商品管理列表计算属性
        
        return state.goodsList
    },
    getMemberList(state){          //获取会员管理列表计算属性
        
        return state.memberList
    },
    getBannerList(state){          //获取轮播图计算属性
        
        return state.bannerList
    },
    getSeckList(state){          //获取秒杀计算属性
        
        return state.seckList
    },
}