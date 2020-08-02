<template>
  <div class="product fl">
    <my-class :allProducts="goods"></my-class>
  </div>
</template>

<script>
import myClass from "./class";
import {mapGetters,mapActions} from 'vuex'
export default {
  props:['goods'],
  components: {
    myClass
  },
  mounted() {
    
  },
  computed: {
     ...mapGetters(['getGoodsList'])
   },
  data() {
    return {
      goodsList:[]
    };
  },
  methods: {
    ...mapActions(['getList'])
  },
};
</script>

<style lang="" scoped>
.product {
  width: 5.86rem;
}
</style>


        