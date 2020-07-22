<template>
    <div class="tate">
            <a href="#"><span class="iconfont">&#xe67f;</span><em>全部订单</em></a>
            <a href="#"><span class="iconfont">&#xe603;</span><em>待付款</em></a>
            <a href="#"><span class="iconfont">&#xe605;</span><em>待付货</em></a>
        </div>
</template>



<script>
export default {
    
}
</script>



<style lang="" scoped>

 .tate {
  padding: 0.35rem 0.52rem 0.15rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
}
 .tate a {
  color: #888888;
  font: 0.24rem/0.57rem "微软雅黑";
  display: flex;
  flex-direction: column;
  align-items: center;
}
 .tate a span {
  font-size: 0.4rem;
  line-height: 0.4rem;
}
</style>