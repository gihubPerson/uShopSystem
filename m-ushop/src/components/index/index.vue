<template>
  <div id="index">
    <router-view></router-view>
    <div class="footer">
      <router-link to="/home" activeClass="active"><span class="iconfont">&#xe604;</span>首页</router-link>
      <router-link to="/cart" activeClass="active"><span class="iconfont">&#xe7a6;</span>购物车</router-link>
      <router-link to="/mine" activeClass="active"><span class="iconfont">&#xe602;</span>我的</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="" scoped>

</style>