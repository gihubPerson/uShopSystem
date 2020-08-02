<template>
  <div class="choose">
    <div class="sale">
      <span>促销 ：</span>
      <b>满减</b>
      <strong>满2件9折 ；3件8折</strong>
      <em class="iconfont">&#xe608;</em>
    </div>
    <div class="number">
      <span>购买数量</span>
      <div>
        <em @click="addNum(false)">-</em>
        <b>{{num}}</b>
        <em @click="addNum(true)">+</em>
      </div>
    </div>
    <div class="attr">
      <span>商品属性</span>
      <div>
        <span>规格</span>
        <b>30g</b>
        <b>5g</b>
      </div>
      <em class="iconfont">&#xe608;</em>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:1
    }
  },
  methods: {
    addNum(isAdd){
      if(isAdd){
        this.num = this.num<99 ? this.num + 1 : 99
      }else{
        this.num = this.num>1 ? this.num - 1 : 1
      }
  }
  },
  watch: {
    num(newV){
      this.$emit('num',newV)
    }
  },
};
</script>

<style lang="" scoped>
 .choose {
  margin-top: 0.17rem;
  background-color: #fff;
}
 .choose > div {
  border-bottom: 1px solid #cdcdcd;
}
 .choose .sale {
  vertical-align: middle;
  font: 0.26rem/0.98rem "微软雅黑";
  position: relative;
  padding: 0 0.25rem 0;
}
 .choose .sale b {
  width: 0.65rem;
  box-sizing: border-box;
  padding-left: 0.04rem;
  display: inline-block;
  letter-spacing: 0.06rem;
  font: 0.2rem/0.35rem "微软雅黑";
  text-align: center;
  border: 1px solid #b02717;
  color: #b02717;
  border-radius: 0.04rem;
  margin-right: 0.15rem;
}
 .choose .sale em {
  line-height: 0.26rem;
  display: block;
  position: absolute;
  top: 0.42rem;
  right: 0.21rem;
}
 .choose .number {
  vertical-align: middle;
  position: relative;
  font: 0.26rem "微软雅黑";
  padding: 0 0.25rem 0;
}
 .choose .number span {
  line-height: 1.06rem;
}
 .choose .number div {
  display: inline-block;
  position: absolute;
  right: 0.25rem;
  border: 1px solid #000;
  border-radius: 0.04rem;
  margin-top: 0.25rem;
}
 .choose .number div em {
  display: inline-block;
  width: 0.62rem;
  height: 0.57rem;
  text-align: center;
  line-height: 0.57rem;
}
 .choose .number div b {
  display: inline-block;
  width: 0.79rem;
  height: 0.57rem;
  text-align: center;
  line-height: 0.57rem;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
 .choose .attr {
  padding: 0.13rem 0.25rem 0.38rem;
  position: relative;
}
 .choose .attr > span {
  font: 0.26rem/0.8rem "微软雅黑";
}
 .choose .attr div {
  display: flex;
}
 .choose .attr div span {
  font: 0.24rem/0.59rem "微软雅黑";
  color: #cdcdcd;
  padding-right: 0.7rem;
}
 .choose .attr div b:nth-of-type(1) {
  display: block;
  width: 1.5rem;
  height: 0.59rem;
  text-align: center;
  font: 0.28rem/0.59rem "微软雅黑";
  background-color: #e43a3d;
  color: #fff;
  border-radius: 0.04rem;
  margin-right: 0.15rem;
}
 .choose .attr div b:nth-of-type(2) {
  display: block;
  width: 1.17rem;
  height: 0.59rem;
  text-align: center;
  font: 0.28rem/0.59rem "微软雅黑";
  background-color: #cdcdcd;
  color: #fff;
  border-radius: 0.04rem;
}
 .choose .attr em {
  display: block;
  position: absolute;
  top: 0.42rem;
  right: 0.21rem;
}

</style>