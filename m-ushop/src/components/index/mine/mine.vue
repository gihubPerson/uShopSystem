<template>
    <div class="mine">
        <my-header :title="title"></my-header>

        <my-mes></my-mes>
        <my-tate></my-tate>

        <my-manage></my-manage>
    </div>
</template>



<script>
import myManage from './components/manage'
import myMes from './components/mes'
import myTate from './components/tate'
export default {
    components:{
        myManage,
        myMes,
        myTate
    },
    data(){
        return {
            title:'我的订单'
        }
    },
    beforeRouteEnter (to, from, next) {
    console.log(to)
    console.log(from)
    next()
  }
}
</script>



<style lang="" scoped>
body {
  background-color: #f0f0f0;
}
</style>