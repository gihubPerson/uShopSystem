<template>
    <div class="area">
            <a href="#"><div class="time">
                <h4><img :src="icoSrc" alt="">限时秒杀</h4>
                <h5>每天零点场 好货秒不停</h5>
                <div><span>02</span>:<span>16</span>:<span>45</span><em>秒杀</em></div>
                <img :src="productSrc[0]" alt="大衣">
                <div class="price">￥14.8</div>
            </div></a>
            <div class="right">
                <a href="#"><div class="rightTop">
                    <div>
                        <h4>品牌上衣</h4>
                        <h5>每日9点 抢大牌</h5><img :src="logoSrc" alt="品牌">
                    </div>
                    <img :src="productSrc[1]" alt="大衣">
                </div></a>
                <div class="rightBottom">
                    <a href="#"><div class="bottomLeft">
                        <h4>每日十件</h4>
                        <h5>只为你选好货</h5>
                        <img :src="productSrc[2]" alt="大衣">
                    </div></a>
                   <a href="#"> <div class="bottomRight">
                    <h4>拼啊</h4>
                    <h5>超级好价拼团</h5>
                    <img :src="productSrc[3]" alt="大衣">
                </div></a>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return {
            productSrc:[
                require('../../../../assets/images/shop_5.jpg'),
                require('../../../../assets/images/shop_1.jpg'),
                require('../../../../assets/images/shop_2.jpg'),
                require('../../../../assets/images/shop_3.jpg'),
            ],
            logoSrc:require('../../../../assets/images/brand.jpg'),
            icoSrc:require('../../../../assets/images/timer.jpg')
        }
    }
}
</script>
<style lang="" scoped>

 .area {
  display: -webkit-box;
  display: flex;
  background-color: #fff;
  margin-top: 0.3rem;
}
 .area h4 {
  color: #c94d83;
  font: 0.29rem/0.36rem "微软雅黑";
}
 .area h5 {
  color: #7f7f7f;
  font: 0.21rem/0.29rem "微软雅黑";
}
 .area .time {
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 0.15rem 0 0 0.18rem;
  border-right: 1px solid #f0f0f0;
  position: relative;
}
 .area .time h4 img {
  vertical-align: middle;
  width: 0.33rem;
  padding: 0 0.13rem 0 0 !important;
}
 .area .time .price {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background-color: #dc3576;
  font: 0.23rem/0.85rem "微软雅黑";
  text-align: center;
  color: #fff;
  position: absolute;
  right: 0.29rem;
  bottom: 0.29rem;
}
 .area .time div span {
  width: 0.43rem;
  display: inline-block;
  font: 0.18rem/0.43rem "微软雅黑";
  color: #fff;
  text-align: center;
  background-color: black;
  border-radius: 0.06rem;
}
 .area .time em {
  display: inline-block;
  width: 0.96rem;
  background: url(../../../../assets/images/bg.jpg) no-repeat left center / 0.96rem 0.4rem;
  font: 0.25rem/0.4rem "微软雅黑";
  margin-left: 0.25rem;
  text-align: center;
  vertical-align: middle;
}
 .area .time img {
  width: 2.36rem;
  padding: 0.31rem 0.5rem 0.19rem 0.41rem;
}
 .area .right {
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
 .area .right .rightTop {
  padding: 0.15rem 0.18rem 0.05rem 0.18rem;
  flex-wrap: 1;
  border-bottom: 1px solid #f0f0f0;
}
 .area .right .rightTop div {
  display: inline-block;
}
 .area .right .rightTop div img {
  width: 0.93rem;
  padding-top: 0.23rem;
}
 .area .right .rightTop img {
  width: 1.28rem;
  padding-left: 0.32rem;
}
 .area .right .rightBottom {
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: flex;
}
 .area .right .rightBottom div {
  padding: 0.15rem 0.33rem 0.03rem 0.18rem;
}
 .area .right .rightBottom .bottomLeft {
  -webkit-box-flex: 1;
  flex-shrink: 0;
  border-right: 1px solid #f0f0f0;
}
 .area .right .rightBottom .bottomLeft img {
  padding: 0.05rem 0 0.15rem 0.39rem;
  width: 0.64rem;
}
 .area .right .rightBottom .bottomRight {
  -webkit-box-flex: 1;
  flex-shrink: 0;
}
 .area .right .rightBottom .bottomRight img {
  padding-top: 0.13rem;
  width: 1.04rem;
}
</style>