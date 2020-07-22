<template>
  <header class="header">
    <a class="iconfont" @clcik="$router.go(-1)">&#xe63b;</a>
    <div class="title"><img :src="src" alt=""></div>
    <div class="mun">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
      src:require("../../../assets/images/logo.jpg")
    }
  }
};
</script>

<style lang="" scoped>

 .header {
  height: 0.62rem;
  background-color: #f26b11;
  color: #fff;
  border: none;
}
 .header a {
  font: 0.4rem/0.4rem "微软雅黑";
  padding-top: 0.24rem;
  color: #fff;
}
 .header .title {
  font: 0.35rem/0.35rem "微软雅黑";
  width: auto;
  flex-shrink: 0;
  padding-top: 0.24rem;
}
 .header .mun {
  padding-top: 0.36rem;
}
 .header .mun span {
  background-color: #fff;
}
img{
  width: 2rem;
}
</style>