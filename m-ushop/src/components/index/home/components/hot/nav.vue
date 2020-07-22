<template>
  <div>
    <div class="hotNav">
      <ul>
        <li :class="[idx == activeIdx ? 'active' : '']" v-for="(item,idx) in til" :key='item.product.id' @click='change(idx)'>
          <a href="javaScript:;">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['til'],
  data(){
    return {
    activeIdx:0
    }
  },
  methods: {
    change(idx){
      this.activeIdx = idx
      this.$emit('getActive',this.activeIdx)
    }
  },
};
</script>

<style lang="" scoped>

.hotNav ul {
  display: -webkit-box;
  display: flex;
  margin-bottom: 0.2rem;
}
.hotNav ul li {
  -webkit-box-flex: 1;
  flex-grow: 1;
  border: 1px solid #f0f0f0;
  border-left: none;
}
.hotNav ul li a {
  display: block;
  font: 0.28rem/0.68rem "微软雅黑";
  text-align: center;
  color: black;
}
.hotNav ul li:nth-child(1) {
  border-left: 1px solid #f0f0f0;
}
.hotNav ul .active {
  background-color: #f26b11;
  outline: 0.02rem solid #f26b11;
  outline-offset: -0.02rem;
}
.hotNav ul .active a {
  color: #fff;
}
</style>