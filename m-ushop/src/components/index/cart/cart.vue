<template>
  <div class="cart">
    <my-header :title="title"></my-header>
    <my-product @productNum="productNum" @totlePrice="totlePrice"></my-product>
    <my-all :productNum='proNum' :allPrice="allPrice"></my-all>
  </div>
</template>

<script>
import myProduct from "./components/products";
import myAll from "./components/all";
export default {
  components: {
    myProduct,
    myAll,
    proNum:0
  },
  data() {
    return {
      title: "购物车",
      uid: "",
      allPrice: 0,
      checkedAll:true
    };
  },
  methods: {
    totlePrice(newV) {
      this.allPrice = newV;
    },
    productNum(newV){
      this.proNum = newV
    }
  }
};
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