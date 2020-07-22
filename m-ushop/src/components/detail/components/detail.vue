<template>
  <div class="detail">
    <span>商品详情</span>
    <img v-for="(item,idx) in imgs" :key="idx" :src="item" alt="1" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgs:[
        require('../../../assets/images/picDetail_3.jpg'),
        require('../../../assets/images/picDetail_4 .jpg'),
        require('../../../assets/images/picDetail_5.jpg'),
        require('../../../assets/images/picDetail_6.jpg'),
        require('../../../assets/images/picDetail_7.jpg'),
      ]
    }
  }
};
</script>

<style lang="" scoped>
 .detail {
  background-color: #fff;
  margin-top: 0.21rem;
}
 .detail span {
  font: 0.26rem/1rem "微软雅黑";
  padding: 0 0.23rem;
}
 .detail img {
  width: 100%;
}

 
</style>