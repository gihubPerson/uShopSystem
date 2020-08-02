<template>
    <footer class="footer">
            <a href="javaScriot:;"><span class="iconfont">&#xe7a6;</span><em>购物车</em><b>2</b></a>
            <a @click="addCart" href="javaScriot:;">加入购物车</a>
            <a href="javaScriot:;">立即购买</a>
        </footer>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        addCart(){
            this.$emit('addCart')
        }
    },
};
</script>

<style  lang="" scoped>
.footer {
  border-top: 1px solid #f1f1f1;
  padding: 0;
}
.footer a:nth-child(1) {
  width: 1.72rem;
  padding-top: 0.25rem;
  position: relative;
}
.footer a:nth-child(1) b {
  display: inline-block;
  width: 0.24rem;
  height: 0.24rem;
  border-radius: 50%;
  text-align: center;
  font: 0.19rem/0.24rem Arial;
  background-color: #e43a3d;
  position: absolute;
  top: 0.16rem;
  right: 0.55rem;
  color: #fff;
}
.footer a:nth-child(2) {
  width: 2.89rem;
  background-color: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
}
.footer a:nth-child(3) {
  width: 2.89rem;
  background-color: #e43a3d;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
}

</style>
