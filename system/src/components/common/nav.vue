<template>
  <el-aside width="200px">
    <el-col>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu :index="item.id.toString()" v-for="item in navMenuList" :key="item.id">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="theItem.url"
              v-for="theItem in item.children"
              :key="theItem.id"
            >{{ theItem.title }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "/home",
      navMenuList: {}
    };
  },
  computed: {},
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      this.navMenuList = JSON.parse(localStorage.getItem("userInfo")).menus
    }
  }
};
</script>

<style  lang="stylus" scoped>
@import '../../stylus/index.styl';

.el-aside {
  background-color: $bgColorAside;
  min-height: 600px;
}
</style>
