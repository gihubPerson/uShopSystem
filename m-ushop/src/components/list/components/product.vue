<template>
  <li>
    <a href="">
      <img :src="product.imgSrc" alt />
      <div class="box">
        <h5>{{ product.name }}</h5>
        <div class="price">￥{{ product.price | tofixed(2) }}</div>
        <div class="speak">
          <span>{{ product.speak }}</span>条评论
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
    props:['product']
};
</script>

<style lang="" scoped>
 .list li a {
  display: flex;
  padding: 0.36rem 0 0.26rem 0;
  border-bottom: 1px solid #d1d1d1;
}
 .list li a img {
  display: block;
  width: 1.55rem;
}
 .list li a .box {
  padding-left: 0.36rem;
  position: relative;
}
 .list li a .box h5 {
  font: 0.26rem/0.32rem "微软雅黑";
  color: black;
}
 .list li a .box .price {
  font: 0.28rem/0.61rem Arial;
  color: #ea8082;
}
 .list li a .box .speak {
  position: relative;
  left: 0;
  bottom: 0;
  font: 0.24rem "微软雅黑";
  color: #999;
}
 .list li a .box .speak span {
  font: 0.24rem Arial;
}
</style>