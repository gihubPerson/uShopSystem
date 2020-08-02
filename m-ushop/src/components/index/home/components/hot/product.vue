<template>
  <div>
    <div class="product" v-for="item in pros[index].content" :key="item.id" @click="link(item.id)">
      <img :src="$img + item.img" alt="脸霜" />
      <div class="text">
        <h5>{{ item.goodsname }}</h5>
        <div class="price">￥{{item.price | toPrice(2)}}</div>
        <a href="detail.html">立即抢购</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['pros','index'],
    methods: {
      link(id){
        this.$router.push({
          name:'toDetail',
          query:{
            id
          }
        })
      }
    },
};
</script>

<style lang="" scoped>
 .product {
  display: -webkit-box;
  display: flex;
  padding: 0.3rem 0 0.23rem 0.35rem;
  box-shadow: 0 0 0.18rem 0 #f0f0f0;
  margin-bottom: 0.34rem;
}
 .product img {
  width: 2.16rem;
  padding-top: 0.22rem;
}
 .product .text {
  padding-left: 0.49rem;
}
 .product .text h5 {
  font: 0.3rem/0.6rem "微软雅黑";
}
 .product .text .price {
  font: 0.24rem/0.54rem "微软雅黑";
  color: #d2353e;
}
 .product .text .number {
  font: 0.23rem/0.54rem "微软雅黑";
  color: #9d9d9d;
}
 .product .text a {
  display: block;
  width: 1.64rem;
  font: 0.23rem/0.52rem "微软雅黑";
  color: #fff;
  background-color: #f26b11;
  text-align: center;
  border-radius: 0.04rem;
}
</style>