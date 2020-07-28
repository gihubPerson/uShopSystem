<template>
    <div class="list fl">
            <ul>
                <li @click="list(idx)" 
                :class="activeClass == idx? 'active' : ''" 
                v-for="(item,idx) in getClass" 
                :key="item.id"
                >
                {{item.catename}}</li>
            </ul>
        </div>
</template>

<script>
import {getClass} from '@/axios'
import {mapActions,mapGetters} from 'vuex'
export default {
   data(){
     return{
       activeClass:0
     }
   },
   computed: {
     ...mapGetters(['getClass'])
   },
   mounted() {
     this.getClassList()
   },
   methods: {
    ...mapActions(['getClassList']),
    list(idx){
      this.activeClass = idx
    }
   },
}
</script>

<style lang="" scoped>

 .list {
  width: 1.63rem;
  height: 12.63rem;
}
 .list ul {
  border-right: 1px solid #d9d9d9;
  width: 1.63rem;
  padding-top: 0.38rem;
  height: 100%;
}
 .list ul li {
  width: 1.55rem;
  font: 0.26rem/2 "微软雅黑";
  box-sizing: border-box;
  padding-left: 0.38rem;
  border-left: 0.08rem solid transparent;
  margin-bottom: 0.62rem;
  color: #666;
}
 .list ul .active {
  border-color: #f26b11;
  color: #f26b11;
}
</style>