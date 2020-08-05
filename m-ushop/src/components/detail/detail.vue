<template>
  <div>
    <h1>{{ goodsInfo }}</h1>
    <my-show></my-show>
    <my-choose @num="addNum"></my-choose>
    <my-detail></my-detail>
    <my-speak></my-speak>
    <my-footer @addCart='addCart'></my-footer>
  </div>
</template>

<script>
import {cartAdd,getGoodsInfo} from '@/axios'

import myShow from "./components/show";
import myChoose from "./components/choose";
import myDetail from "./components/detail";
import mySpeak from "./components/speak";
import myFooter from "./components/footer";
export default {
  data(){
    return{
      cartInfo:{
        uid:null,
        goodsid:null,
        num:1,
        
      },
      goodsInfo:{}
    }
  },
  components: {
    myShow,
    myChoose,
    myDetail,
    mySpeak,
    myFooter
  },
  mounted() {
    this.cartInfo.uid = JSON.parse(localStorage.getItem('user')).uid
    this.cartInfo.goodsid = this.$route.query.id
    getGoodsInfo(this.$route.query.id).then(res=>{
      this.goodsInfo = res.data.list[0]
    })
  },
  methods: {
    addNum(num){
      this.cartInfo.num = num
    },
    addCart(){
      cartAdd(this.cartInfo).then((res)=>{
        this.$router.push('/cart')
      })
  }
  },
  
};
</script>

<style lang="" scoped>
body {
  background-color: #efefef;
}
</style>