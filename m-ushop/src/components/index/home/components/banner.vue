<template>
  <div class="banner">
    <img :src="imgSrc" alt="广告" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: require("../../../../assets/images/banner.jpg")
    };
  }
};
</script>
<style lang="" scoped>
.banner img {
  width: 100%;
  height: auto;
}
</style>