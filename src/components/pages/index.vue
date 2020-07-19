<template>
  <el-container>
    <el-header>Ushop后台管理系统</el-header>
    <el-container>
        <my-nav></my-nav>
      <el-main>
          <my-breach :title="$route.meta.name"></my-breach>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myBreach from '../common/breach'
import myNav from '../common/nav'
export default {
  data() {
    return {

    };
  },
  components:{
      myNav,
      myBreach
  }
};
</script>

<style  lang="stylus" scoped>
@import '../../stylus/index.styl'
.el-header
    background $bgColorSecond
    font-weight bold
    font-size 20px
    line-height 60px
</style>
