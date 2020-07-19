import {getMenuList} from '../axios'

export default {
    changeMenuListY({ commit }) {
        getMenuList({
            istree:true
        }).then((res) => {
            commit('changeMenuList', res.data.list)
        })
    }
}