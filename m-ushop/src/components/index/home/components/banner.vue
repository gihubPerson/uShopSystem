<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in imgArr" :key="item.id"><img :src="$img + item.img"></van-swipe-item>
  </van-swipe>
</template>
<script>
import {getBanner} from '@/axios'
export default {
  data() {
    return {
      imgArr:[]
    };
  },
  mounted() {
    getBanner().then((res)=>{
      this.imgArr = res.data.list
    })
  },
  methods: {
    
  },
};
</script>
<style lang="stylus" scoped>
.my-swipe .van-swipe-item img{
  width 100vw
}
</style>