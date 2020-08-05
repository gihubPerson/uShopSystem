<template>
  <div class="product">
    <ul>
      <my-product
        @update="updat"
        @eachPrice="eachPrice"
        v-for="item in products"
        :key="item.id"
        :product="item"
      ></my-product>
    </ul>
  </div>
</template>

<script>
import { getCart } from "@/axios";
import myProduct from "./product";
export default {
  props: ["allChecked"],
  components: {
    myProduct,
  },
  data() {
    return {
      products: [],
      Prices: [],
      totlePrice: 0,
      productNum: 0,
      isChecked: [],
    };
  },
  mounted() {
    this.uid = JSON.parse(localStorage.getItem("user")).uid;
    this.getCartList();
  },
  methods: {
    updat() {
      this.getCartList();
    },
    getCartList() {
      console.log(111111);
      getCart(this.uid).then((res) => {
        if (res.data.code == 200) {
          this.products = res.data.list;
          this.products.map((item) => {
            this.productNum++;
            this.isChecked.push({
              goodsId: item.goodsid,
              checked: true,
            });
            this.Prices.push({
              goodsId: item.goodsid,
              price: item.price * item.num,
            });
            this.totlePrice = item.price * item.num + this.totlePrice;
          });
          this.$emit("productNum", this.productNum);
          this.$store.commit("changeIsCheked", this.isChecked);
        }
      });
    },
    eachPrice(price) {
      this.totlePrice = 0;
      this.Prices.map((item, idx) => {
        if (item.goodsId == price.goodsId) {
          this.Prices[idx] = price;
        }
      });
      this.Prices.map((item) => {
        this.totlePrice = item.price + this.totlePrice;
      });
    },
  },
  watch: {
    totlePrice(newV) {
      this.$emit("totlePrice", newV);
    },
  },
};
</script>

<style lang="" scoped>
</style>