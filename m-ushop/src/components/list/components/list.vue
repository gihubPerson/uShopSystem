<template>
  <div class="list">
    <ul>
      <my-product v-for="item in products" :key="item.id" :product="item"></my-product>
    </ul>
  </div>
</template>

<script>
import myProduct from './product'
export default {
  components:{
    myProduct
  },
  data(){
    return {
      products:[
        {
          id:31,
          name:"阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2 旗舰店正品换新升级款",
          price:123,
          speak:3625,
          imgSrc:require('../../../assets/images/shop-8_03.jpg')
        },
        {
          id:32,
          name:"滋源修护滋养洗发香乳 520ml*2瓶",
          price:123,
          speak:3625,
          imgSrc:require('../../../assets/images/shop-9_03.jpg')
        },
        {
          id:33,
          name:"施华蔻修护滋养洗发香乳 洗发水 持久留香 520ml*2 旗舰店正品换新升级款",
          price:123,
          speak:3625,
          imgSrc:require('../../../assets/images/shop-10_03.jpg')
        },
        {
          id:34,
          name:"资生堂修护滋养洗发香乳",
          price:123,
          speak:3625,
          imgSrc:require('../../../assets/images/shop-11_03.jpg')
        },
      ]
    }
  }
};
</script>

<style lang="" scoped>
 .list {
  padding: 0 0.32rem 0 0.32rem;
}
</style>