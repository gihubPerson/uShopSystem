<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    props:['title'],
  data() {
    return {
    };
  }
};
</script>

<style  lang="" scoped>
</style>
