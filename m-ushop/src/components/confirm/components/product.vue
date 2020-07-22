<template>
    <div class="product clearfix">
            <img :src="imgSrc" alt="">
            <div class="text"><h5>{{ name }}</h5><p>规格：{{ norg }}g</p></div>
            <span>￥{{ price | toPrice(2) }}</span>
            <div class="number clearfix">
                <span>购买数量：</span>
                <div><em>-</em><b>{{ num }}</b><em>+</em></div>
            </div>
            <div class="mail">
                <span>配送方式</span><span>{{ delivery }}</span>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return {
            imgSrc:require('../../../assets/images/shop_4.jpg'),
            name:"雅诗兰黛护肤霜",
            norg:50,
            price:120,
            num:1,
            delivery:"百世快递"
        }
    }
    
}
</script>

<style lang="" scoped>
    .product {
  background-color: #fff;
  padding: 0.22rem 0.28rem 0;
  margin-top: 0.11rem;
  font: 0.24rem "微软雅黑";
  color: #b2b2b2;
}
 .product img {
  width: 1.02rem;
}
 .product .text {
  display: inline-block;
  padding-left: 0.29rem;
}
 .product .text h5 {
  font: 0.24rem/0.59rem "微软雅黑";
}
 .product .text p {
  font: 0.24rem/0.36rem "微软雅黑";
  color: #b2b2b2;
}
 .product > span {
  display: block;
  float: right;
  font: 0.28rem/0.68rem Arial;
  color: #c8353c;
}
 .product .number {
  border-bottom: 1px solid #f0f0f0;
}
 .product .number > span {
  font: 0.24rem/1.26rem "微软雅黑";
}
 .product .number div {
  display: block;
  float: right;
  margin-top: 0.32rem;
}
 .product .number div em {
  display: inline-block;
  width: 0.73rem;
  height: 0.63rem;
  text-align: center;
  font: 0.4rem/0.63rem "微软雅黑";
  border: 1px solid #000;
  vertical-align: middle;
  margin-left: 0.12rem;
  border-radius: 0.04rem;
  cursor: pointer;
  color: #000;
}
 .product .number div b {
  display: inline-block;
  width: 1.17rem;
  height: 0.63rem;
  text-align: center;
  font: 0.23rem/0.63rem Arial;
  border: 1px solid #000;
  vertical-align: middle;
  margin-left: 0.12rem;
  border-radius: 0.04rem;
  cursor: pointer;
  color: #000;
  font: 0.38rem / 0.65rem Arial;
}
 .product .mail {
  display: flex;
  justify-content: space-between;
}
 .product .mail span {
  line-height: 0.96rem;
}
</style>