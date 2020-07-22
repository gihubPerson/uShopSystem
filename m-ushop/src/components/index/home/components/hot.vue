<template>
  <div class="hot">
    <hot-nav @getActive="change" :til="products"></hot-nav>
    <hot-product :pros="products" :index='activeIdx'></hot-product>
  </div>
</template>
<script>
import hotProduct from "./hot/product";
import hotNav from "./hot/nav";
export default {
  data() {
    return {
        activeIdx:0,
      products: [
        {
          title: "热门推荐",
          product: [
            {
              id: 1,
              imSrc: require("@/assets/images/shop_4.jpg"),
              title: "雅诗兰黛染发膏60ml--热门推荐",
              price: 123.0,
              num: 800
            },
            {
              id: 2,
              imSrc: require("@/assets/images/shop_5_03.jpg"),
              title: "雅诗兰黛染发膏60ml--热门推荐",
              price: 123.0,
              num: 800
            },
            {
              id: 3,
              imSrc: require("@/assets/images/shop_5_07.jpg"),
              title: "雅诗兰黛染发膏60ml--热门推荐",
              price: 123.0,
              num: 800
            }
          ]
        },
        {
          title: "发现好货",
          product: [
            {
              id: 1,
              imSrc: require("@/assets/images/shop_4.jpg"),
              title: "雅诗兰黛染发膏60ml--发现好货",
              price: 123.0,
              num: 800
            },
            {
              id: 2,
              imSrc: require("@/assets/images/shop_5_03.jpg"),
              title: "雅诗兰黛染发膏60ml--发现好货",
              price: 123.0,
              num: 800
            },
            {
              id: 3,
              imSrc: require("@/assets/images/shop_5_07.jpg"),
              title: "雅诗兰黛染发膏60ml--发现好货",
              price: 123.0,
              num: 800
            }
          ]
        },
        {
          title: "只看专场",
          product: [
            {
              id: 1,
              imSrc: require("@/assets/images/shop_4.jpg"),
              title: "雅诗兰黛染发膏60ml--只看专场",
              price: 123.0,
              num: 800
            },
            {
              id: 2,
              imSrc: require("@/assets/images/shop_5_03.jpg"),
              title: "雅诗兰黛染发膏60ml--只看专场",
              price: 123.0,
              num: 800
            },
            {
              id: 3,
              imSrc: require("@/assets/images/shop_5_07.jpg"),
              title: "雅诗兰黛染发膏60ml--只看专场",
              price: 123.0,
              num: 800
            }
          ]
        },
        {
          title: "只看商品",
          product: [
            {
              id: 1,
              imSrc: require("@/assets/images/shop_4.jpg"),
              title: "雅诗兰黛染发膏60ml--只看商品",
              price: 123.0,
              num: 800
            },
            {
              id: 2,
              imSrc: require("@/assets/images/shop_5_03.jpg"),
              title: "雅诗兰黛染发膏60ml--只看商品",
              price: 123.0,
              num: 800
            },
            {
              id: 3,
              imSrc: require("@/assets/images/shop_5_07.jpg"),
              title: "雅诗兰黛染发膏60ml--只看商品",
              price: 123.0,
              num: 800
            }
          ]
        },
      ]
    };
  },
  components: {
    hotProduct,
    hotNav
  },
  methods: {
      change(idx){
          this.activeIdx = idx;
      }
  },
};
</script>
<style lang="" scoped>
  .hot {
  padding: 0.21rem 0.2rem 0rem 0.2rem;
  margin-top: 0.3rem;
  background-color: #fff;
  overflow: hidden;
}

</style>