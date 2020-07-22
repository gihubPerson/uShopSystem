<template>
    <div class="cheap">
            <div class="cop">
                <span>优惠券</span><span>无可用</span>
            </div>
            <div class="pot">
                <span>使用积分</span>
                <div class="number">
                    <form action="#" method="post"><input type="text" name="pot" placeholder="输入积分"> <input type="submit" value="使用"></form><span>可使用<b>50</b>积分</span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="" scoped>
    
 .cheap {
  background-color: #fff;
  margin-top: 0.11rem;
  font: 0.24rem "微软雅黑";
  color: #b2b2b2;
}
 .cheap .cop {
  display: flex;
  justify-content: space-between;
  padding: 0 0.28rem;
  border-bottom: 1px solid #f0f0f0;
}
 .cheap .cop span {
  line-height: 1.01rem;
}
 .cheap .pot {
  display: flex;
  justify-content: space-between;
  padding: 0 0.28rem;
}
 .cheap .pot span {
  line-height: 1.01rem;
}
 .cheap .pot .number {
  display: flex;
  justify-content: space-between;
}
 .cheap .pot .number form {
  display: flex;
  justify-content: space-between;
}
 .cheap .pot .number form input[type=text] {
  margin-top: 0.16rem;
  width: 1.48rem;
  height: 0.7rem;
  border: 0.02rem solid #d8d8d8;
  border-radius: 0.04rem;
  text-align: center;
  vertical-align: middle;
}
 .cheap .pot .number form input[type=text] ::-webkit-input-placeholder {
  color: #e9e9e9;
}
 .cheap .pot .number form input[type=submit] {
  margin-top: 0.16rem;
  width: 0.7rem;
  height: 0.7rem;
  border: 0.02rem solid #e5a439;
  border-radius: 0.04rem;
  text-align: center;
  vertical-align: middle;
  background-color: #f26b11;
  color: #fff;
  margin-left: 0.09rem;
}
 .cheap .pot .number span {
  padding-left: 0.2rem;
}
 .cheap .pot .number span b {
  color: #f26b11;
}
</style>