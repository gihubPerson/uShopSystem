// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
// 引入rem
import './assets/js/remScale'
// 引入初始化样式
import './assets/css/reset.css'
// 引入公共样式
import './assets/css/public.css'
/* eslint-disable no-new */
//引入iconfont样式
import './assets/font/iconfont.css'

//全局组件
import com from './components/public'
for(let item in com){
  Vue.component(item,com[item])
}
//全局过滤器
import allFilter from "./filters"
for(let item in allFilter){
  Vue.filter(item,allFilter[item])
}

//引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
