<template>
  <a href="#">
    <div class="box">
      <div v-for="item in goodsList" :key="item.id">
        <img :src="$img + item.img" alt="洗发水" />
        <h6>{{ item.goodsname }}</h6>
      </div>
    </div>
  </a>
</template>

<script>
import { getGoods } from "@/axios";
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  props: ["cateId"],
  mounted() {
    getGoods(this.cateId).then((res) => {
      this.goodsList = res.data.list;
    });
  },
};
</script>

<style lang="" scoped>
.box {
  text-align: center;
  padding: 0 0.2rem 0.16rem 0.2rem;
}
.box img {
  width: 1.54rem;
}
.box h6 {
  font: 0.24rem/0.6rem "微软雅黑";
  color: #888;
}
</style>