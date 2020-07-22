<template>
      <li>
        <form action="#" method="post">
          <input type="checkbox" name="product" />
        </form>
        <img :src="product.imgSrc" alt="脸霜" />
        <div class="text">
          <h5>{{ product.name }}</h5>
          <div class="norms">规格：{{ product.norms }}g</div>
          <div class="price">￥{{ product.price | toPrice(2) }}</div>
        </div>
        <div class="number">
          <em>-</em>
          <b>{{ product.num }}</b>
          <em>+</em>
        </div>
        <div class="del">删除</div>
      </li>
</template>

<script>
export default {
  props:['product']
};
</script>

<style lang="" scoped>
li {
  width: 100.58%;
  display: flex;
  padding: 0 0.31rem 0 0.24rem;
  margin-top: 0.3rem;
  overflow: hidden;
  box-shadow: 0 0 0.18rem 0 #f0f0f0;
  position: relative;
}
li form {
  display: inline-block;
  margin-top: 0.68rem;
}
li form input {
  width: 0.34rem;
  height: 0.34rem;
}
li img {
  width: 1.02rem;
  padding: 0.38rem 0 0.29rem 0.43rem;
}
li .text {
  padding-left: 0.36rem;
}
li .text h5 {
  font: 0.26rem/0.69rem "微软雅黑";
}
li .text .norms {
  font: 0.23rem/0.39rem "微软雅黑";
  color: #656565;
}
li .text .price {
  font: 0.32rem/0.57rem Arial;
  color: #e43a3d;
}
li .number {
  display: inline-block;
  position: absolute;
  right: 0.89rem;
  border: 1px solid #000;
  border-radius: 0.04rem;
  margin-top: 0.89rem;
}
li .number em {
  display: inline-block;
  width: 0.62rem;
  height: 0.57rem;
  text-align: center;
  line-height: 0.57rem;
  cursor: pointer;
}
li .number b {
  display: inline-block;
  width: 0.79rem;
  height: 0.57rem;
  text-align: center;
  line-height: 0.57rem;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
li .del {
  width: 0.58rem;
  background-color: #e43a3d;
  font: 0.24rem/1.72rem "微软雅黑";
  color: white;
  position: absolute;
  right: 0;
  top: 0;
}
</style>