<template>
    <div class="wrap">
        <my-header :title="title"></my-header>
        <my-list></my-list>
        <my-product></my-product>
    </div>
</template>

<script>
import myList from './components/list'
import myProduct from './components/products'
export default {
    components:{
        myList,
        myProduct
    },
    data(){
        return {
            title:'商品分类',
        }
    }
}
</script>

<style lang="" scoped>
.wrap {
  padding-bottom: 0;
}
</style>