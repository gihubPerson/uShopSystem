import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// //一级路由
// import Index from '../components/index/index'
// import Class from '../components/class/class'

// //二级路由
// import Home from '../components/index/home/home'
// import Cart from '../components/index/cart/cart'
// import Mine from '../components/index/mine/mine'
// import Confirm from '../components/confirm/confirm'
// import Detail from '../components/detail/detail'
// import List from '../components/list/list'

let r = new Router({
  // mode:'history',
  routes: [
    {
      path:'/index',
      component:()=>import('../components/index/index'),
      children:[
        {
          path:'/home',
          component:()=>import('../components/index/home/home'),
        },
        {
          path:'/cart',
          alias:'/shopping',
          component:()=>import('../components/index/cart/cart'),
          beforeEnter: (to, from, next) => {
            console.log(to)
            console.log(from)
            next()            
          }
        },
        {
          path:'/mine',
          component:()=>import('../components/index/mine/mine'),
        },
        {
          path:'/confirm',
          component:()=>import('../components/confirm/confirm'),
        },
        {
          path:'/detail',
          component:()=>import('../components/detail/detail'),
          name:"toDetail"
        },
        {
          path:'/list',
          component:()=>import('../components/list/list')
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'/class',
      component:()=>import('../components/class/class')
    },
    {
      path:'/login',
      component:()=>import('../components/login.vue')
    },
    {
      path:"*",
      redirect:'/index'
    }
  ]
})

r.beforeEach((to,from,next)=>{

  if(to.path == '/login'){
    next()
    return
  }
  if(!localStorage.getItem('user')){
    next('/login')
    return
  }
  next()
  
})

export default r