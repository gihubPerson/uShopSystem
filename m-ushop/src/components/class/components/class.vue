<template>
  <div class="productTop">
    <div class="title">
      <div class="class">{{ allProducts.title }}</div>
      <a href="#">
        更多
        <span class="iconfont">&#xe65e;</span>
      </a>
    </div>
    <div class="all">
      <my-product v-for="item in allProducts.products" :key="item.id" :product="item"></my-product>
    </div>
  </div>
</template>

<script>
import myProduct from './product'
export default {
    props:['allProducts'],
    components:{
        myProduct
    }
}
</script>

<style lang="" scoped>
.productTop {
  width: 5.85rem;
  margin-bottom: 0.24rem;
}
.productTop .title {
  padding: 0.54rem 0.44rem 0.49rem 0.54rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.productTop .title .class {
  color: #888;
  font: 0.26rem "微软雅黑";
}
.productTop .title a {
  font: 0.24rem "微软雅黑";
  color: #888;
}
.productTop .title a span {
  font-size: 0.15rem;
}
.productTop .all {
  display: flex;
  flex-wrap: wrap;
}
</style>


