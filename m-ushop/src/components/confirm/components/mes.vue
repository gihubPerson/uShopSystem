<template>
    <div class="mes clearfix">
            <div><span>收货人：<em>YouSu</em></span><b>100000000</b></div>
            <div class="adr">收货地址：</div><p>北京市海淀区隐泉路清林苑6号楼中公优就业总部3层</p>
            <span class="iconfont">&#xe65e;</span>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="" scoped>
    
 .mes {
  font: 0.24rem "微软雅黑";
  color: #5a5a5a;
  background-color: #fff;
  padding: 0 0.28rem 0.23rem;
  position: relative;
}
 .mes div span {
  line-height: 0.69rem;
}
 .mes div b {
  line-height: 0.69rem;
  float: right;
  padding-right: 0.97rem;
}
 .mes .adr {
  display: inline-block;
  vertical-align: top;
}
 .mes p {
  display: inline-block;
  width: 4.8rem;
}
 .mes > span {
  position: absolute;
  right: 0.28rem;
  top: 0.63rem;
  font-size: 0.24rem;
}
</style>