<template>
  <div class="product fl">
    <my-class v-for="item in allProducts" :allProducts="item" :key="item.id"></my-class>
  </div>
</template>

<script>
import myClass from "./class";
export default {
  components: {
    myClass
  },
  data() {
    return {
      allProducts: [
        {
          id: 9,
          title: "洗发类",
          products: [
            {
              id: 11,
              name: "护亮泽洗发水",
              imgSrc: require("../../../assets/images/shopClassify_2.jpg")
            },
            {
              id: 12,
              name: "滋养洗发水",
              imgSrc: require("../../../assets/images/shopClassify_2.jpg")
            },
            {
              id: 13,
              name: "柔顺泽洗发水",
              imgSrc: require("../../../assets/images/shopClassify_2.jpg")
            },
            {
              id: 14,
              name: "柔顺泽洗发水",
              imgSrc: require("../../../assets/images/shopClassify_2.jpg")
            },
            {
              id: 15,
              name: "去屑泽洗发水",
              imgSrc: require("../../../assets/images/shopClassify_2.jpg")
            },
            {
              id: 16,
              name: "焕彩泽洗发水",
              imgSrc: require("../../../assets/images/shopClassify_2.jpg")
            }
          ]
        },
        {
          id: 10,
          title: "护发类",
          products: [
            {
              id: 17,
              name: "护亮泽洗发水",
              imgSrc: require("../../../assets/images/shopClassify_2.jpg")
            },
            {
              id: 18,
              name: "滋养洗发水",
              imgSrc: require("../../../assets/images/shopClassify_2.jpg")
            },
            {
              id: 19,
              name: "柔顺泽洗发水",
              imgSrc: require("../../../assets/images/shopClassify_2.jpg")
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="" scoped>
.product {
  width: 5.86rem;
}
</style>


        