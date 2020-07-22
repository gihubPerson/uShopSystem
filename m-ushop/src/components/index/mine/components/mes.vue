<template>
    <div class="mes">
    <div class="left">
      <img src="../../../../assets/images/mine.png" alt="头像" />
      <div>
        <h4>优溯</h4>
        <i>v1</i>
      </div>
    </div>
    <div class="right">每日签到</div>
  </div>
</template>



<script>
export default {
    
}
</script>



<style lang="" scoped>

 .mes {
  padding: 0.27rem 0.38rem 0.27rem 0.33rem;
  display: flex;
  justify-content: space-between;
  background-color: #f26b11;
  margin-top: -0.01rem;
}
 .mes .left {
  display: flex;
}
 .mes .left img {
  width: 1.53rem;
  height: 1.53rem;
  background-color: #7e2c06;
  border: 4px solid #fff;
  border-radius: 50rem;
}
 .mes .left div {
  padding-left: 0.25rem;
}
 .mes .left div h4 {
  font: 0.3rem/0.51rem "微软雅黑";
  color: #fff;
  margin-top: 0.34rem;
}
 .mes .left div i {
  display: block;
  font: 0.28rem/0.44rem "微软雅黑";
}
 .mes .right {
  width: 1.6rem;
  height: 0.7rem;
  font: 0.26rem/0.7rem "微软雅黑";
  color: #f26b11;
  text-align: center;
  background-color: #fff;
  border-radius: 0.04rem;
  margin-top: 0.47rem;
  cursor: pointer;
}
</style>