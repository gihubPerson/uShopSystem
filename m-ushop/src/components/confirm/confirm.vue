<template>
    <div class="confirm">
        <my-header :title="title"></my-header>
        <my-mes></my-mes>
        <my-product></my-product>
        <my-cheap></my-cheap>
        <my-all></my-all>
    </div>
</template>

<script>
import myCheap from './components/cheap'
import myMes from './components/mes'
import myProduct from './components/product'
import myAll from './components/all'
export default {
    components:{
        myCheap,
        myMes,
        myProduct,
        myAll
    },
    data(){
        return {
            title:"我的订单",
        }
    }
}
</script>

<style lang="" scoped>
    body {
  background-color: #f1f1f1;
}
.confirm {
  overflow: hidden;
  position: relative;
  padding-bottom: 1.17rem;
}
</style>