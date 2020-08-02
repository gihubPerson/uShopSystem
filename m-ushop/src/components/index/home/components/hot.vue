<template>
  <div class="hot">
    <hot-nav @getActive="change" :til="products"></hot-nav>
    <hot-product :pros="products" :index='activeIdx'></hot-product>
  </div>
</template>
<script>
import {getIndexGoods} from '@/axios'
import hotProduct from "./hot/product";
import hotNav from "./hot/nav";
export default {
  data() {
    return {
        activeIdx:0,
      products: []
    };
  },
  mounted() {
    getIndexGoods().then((res)=>{
      if(res.data.code == 200){
        this.products = res.data.list
        console.log(this.products);
      }
    })
  },
  components: {
    hotProduct,
    hotNav
  },
  methods: {
      change(idx){
          this.activeIdx = idx;
      }
  },
};
</script>
<style lang="" scoped>
  .hot {
  padding: 0.21rem 0.2rem 0rem 0.2rem;
  margin-top: 0.3rem;
  background-color: #fff;
  overflow: hidden;
}

</style>