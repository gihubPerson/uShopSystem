<template>
  <li v-if="this.product">
    <form action="#" method="post">
      <input v-model="isChecked" type="checkbox" />
    </form>
    <img :src="$img + product.img" alt="脸霜" />
    <div class="text">
      <h5>{{ product.goodsname }}</h5>
      <div class="price">￥{{ product.price | toPrice(2) }}</div>
    </div>
    <div class="number">
      <em @click="addNum(false)">-</em>
      <b>{{ num }}</b>
      <em @click="addNum(true)">+</em>
    </div>
    <div class="del">删除</div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      totlePrice: "",
      num: "",
      isChecked: true,
    };
  },
  computed: {
    ...mapGetters(["getAllChecked", "getChecked"]),
  },
  mounted() {
    this.$emit("totlePrice", this.totlePrice);
    this.num = this.product.num;
  },
  props: ["product"],
  methods: {
    addNum(idAdd) {
      if (idAdd) {
        this.num++;
        this.totlePrice = this.num * this.product.price;
      } else {
        this.num = this.product.num > 1 ? this.product.num-- : 1;
        this.totlePrice = this.num * this.product.price;
      }
    },
  },
  watch: {
    totlePrice(newV) {
      this.$emit("eachPrice", {
        goodsId: this.product.goodsid,
        price: newV,
      });
    },
    isChecked(newV) {
      this.getChecked.map((item, idx) => {
        if (item.goodsId == this.product.goodsid) {
          item.checked = this.isChecked;
          this.getChecked[idx] = item;
        }
      });
      this.$store.commit("changeIsCheked", this.getChecked);
    },
    getAllChecked: {
      handler() {
        this.getChecked.map((item) => {
          if (item.goodsId == this.product.goodsid) {
            this.isChecked = item.checked;
          }
        });
      },
      deep: true,
    },
  },
};
</script>

<style lang="" scoped>
li {
  height: 1.6rem;
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