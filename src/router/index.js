import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:()=>import('../components/pages/login')
    },
    {
      path:'/index',
      component:()=>import('../components/pages/index'),
      children:[
        {
          path:'/home',
          component:()=>import('../components/views/home')
        },
        {
          path:'/menu',
          component:()=>import('../components/views/menu'),
          meta:{
            name:'菜单管理'
          }
        },
        {
          path:'/role',
          component:()=>import('../components/views/role'),
          meta:{
            name:'角色管理'
          }
        },
        {
          path:'*',
          redirect:'/home'
        }
      ]
    },
    {
      path:"*",
      redirect:"/login"
    }
  ]
})
