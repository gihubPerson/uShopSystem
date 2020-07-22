<template>
    <div class="cart">
        <my-header :title="title"></my-header>
        <my-product></my-product>
        <my-all></my-all>
    </div>
</template>

<script>
import myProduct from './components/products'
import myAll from './components/all'
export default {
    components:{
        myProduct,
        myAll
    },
    data(){
      return {
        title:'购物车',
      }
    }
}
</script>

<style lang="" scoped>
body {
  background-color: #fff;
}
.cart {
  overflow: hidden;
  position: relative;
  padding-bottom: 2.26rem;
}
</style>