import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/index',
      component: () => import('../components/index/index'),
      children: [
        {
          path: '/home',
          component: () => import('../components/index/home/home'),
        },
        {
          path: '/cart',
          alias: '/shopping',
          component: () => import('../components/index/cart/cart'),
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem('user') != null) {
              next()
            }else{
              next('/login')
            }
          }
        },
        {
          path: '/mine',
          component: () => import('../components/index/mine/mine'),
        },
        {
          path: '/confirm',
          component: () => import('../components/confirm/confirm'),
        },

        {
          path: '/list',
          component: () => import('../components/list/list')
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/class',
      component: () => import('../components/class/class')
    },
    {
      path: '/login',
      component: () => import('../components/login/login')
    },
    {
      path: '/signup',
      component: () => import('../components/signUp/signup')
    },
    {
      path: '/detail',
      component: () => import('../components/detail/detail'),
      name: "toDetail"
    },
    {
      path: "*",
      redirect: '/index'
    }
  ]
})

export default router