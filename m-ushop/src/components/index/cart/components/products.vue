<template>
  <div class="product">
    <ul>
      <my-product v-for="item in products" :key="item.id" :product="item"></my-product>
    </ul>
  </div>
</template>

<script>
import myProduct from "./product";
export default {
  components: {
    myProduct
  },
  data() {
    return {
      products: [
        {
          id:21,
          name: "欧莱雅面霜",
          norms: 50,
          price: 123,
          num: 1,
          imgSrc: require("../../../../assets/images/shop_4.jpg")
        },
        {
          id:22,
          name: "雅诗兰黛护手霜",
          norms: 50,
          price: 26,
          num: 1,
          imgSrc: require("../../../../assets/images/shop_5_07.jpg")
        },
        {
          id:23,
          name: "雅诗兰黛素颜霜",
          norms: 50,
          price: 226,
          num: 1,
          imgSrc: require("../../../../assets/images/shopCart.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="" scoped>
</style>