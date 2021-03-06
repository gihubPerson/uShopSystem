import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../components/pages/login')
    },
    {
      path: '/index',
      component: () => import('../components/pages/index'),
      children: [
        {
          path: '/home',
          component: () => import('../components/views/home')
        },
        {
          path: '/menu',
          component: () => import('../components/views/menu'),
          meta: {
            name: '菜单管理'
          }
        },
        {
          path: '/role',
          component: () => import('../components/views/role'),
          meta: {
            name: '角色管理'
          }
        },
        {
          path: '/user',
          component: () => import('../components/views/user'),
          meta: {
            name: '管理员管理'
          }
        },
        {
          path: '/cate',
          component: () => import('../components/views/cate'),
          meta: {
            name: '商品分类'
          }
        },
        {
          path: '/specs',
          component: () => import('../components/views/specs'),
          meta: {
            name: '商品规格'
          }
        },
        {
          path: '/goods',
          component: () => import('../components/views/goods'),
          meta: {
            name: '商品管理'
          }
        },
        {
          path: '/member',
          component: () => import('../components/views/member'),
          meta: {
            name: '会员管理'
          }
        },
        {
          path: '/banner',
          component: () => import('../components/views/banner'),
          meta: {
            name: '轮播图管理'
          }
        },
        {
          path: "/seck",
          component: () => import('../components/views/seck'),
          meta: {
            name: "活动列表"
          }
        },
        {
          path: '*',
          redirect: '/home'
        }
      ]
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
})

export default router
