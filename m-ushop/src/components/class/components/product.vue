<template>
    <a href="#">
      <div class="box">
        <img :src="product.imgSrc" alt="洗发水" />
        <h6>{{ product.name }}</h6>
      </div>
    </a>
</template>

<script>
export default {
  props: ["product"]
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