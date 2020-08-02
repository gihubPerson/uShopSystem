<template>
  <nav class="navbar">
    <ul>
        <li :class="activeClass == idx ? 'active' : ''" @click='activeList(idx)' v-for="(item,idx) in getClass" :key="item.id">
        <a href="javaScript:;">{{item.catename}}</a><span></span>
      </li>
      
    </ul>
    <div class="arr">
      <img :src="selectIco" alt="下拉" />
    </div>
  </nav>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
      selectIco: require("../../../../assets/images/arrow.jpg"),
      activeClass:0
    };
  },
  computed: {
     ...mapGetters(['getClass'])
   },
   mounted() {
     this.getClassList()
   },
   methods: {
    ...mapActions(['getClassList']),
    activeList(idx){
      this.activeClass = idx
   }
   },
   
};
</script>
<style lang="" scoped>
.navbar {
  padding-left: 0.12rem;
  overflow: hidden;
  background-color: #fff;
  position: relative;
}
.navbar ul {
  display: -webkit-box;
  display: flex;
}
.navbar ul li {
  height: .3rem;
  flex-shrink: 0;
  padding: 0.21rem 0 0.15rem 0;
  margin-left: 0.2rem;
  border-bottom: 4px solid transparent;
}
.navbar ul li a {
  display: block;
  font: 0.28rem "微软雅黑";
  color: black;
}
.navbar ul span {
  display: inline-block;
  width: 0.2rem;
  height: 0.34rem;
  flex-shrink: 0;
  position: relative;
  top: 0.23rem;
}

.navbar ul span:nth-of-type(1) {
  border-right: 1px solid #f0f0f0;
}
.navbar ul .active {
  border-color: #db003d;
}
.navbar ul .active a {
  color: #a50047;
}
.navbar .arr {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  background-color: white;
  vertical-align: middle;
}
.navbar .arr img {
  width: 0.41rem;
  padding: 0.28rem 0 0 0.17rem;
}

</style>