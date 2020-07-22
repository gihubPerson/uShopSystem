<template>
  <div class="all">
    <ul>
      <li>
        <span>商品金额</span>
        <em>￥68.00</em>
      </li>
      <li>
        <span>运费</span>
        <em>+￥0.00</em>
      </li>
      <li>
        <span>优惠券</span>
        <em>-￥0.00</em>
      </li>
      <li>
        <span>会员优惠</span>
        <em>-￥0.00</em>
      </li>
      <li>
        <span>积分抵扣</span>
        <em>-￥0.00</em>
      </li>
    </ul>
    <div class="add">
      实付金额：
      <span>￥68.00</span>
    </div>
    <form action="#" method="post">
      <input type="submit" name="submit" value="提交订单" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="" scoped>

 .all {
  padding: 0.25rem 0.28rem 0.14rem;
  background-color: #fff;
  margin-top: 0.11rem;
}
 .all ul {
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #f0f0f0;
}
 .all ul li {
  display: flex;
  justify-content: space-between;
}
 .all ul li span {
  font: 0.24rem/0.44rem "微软雅黑";
  color: #b2b2b2;
}
 .all ul li em {
  font: 0.24rem/0.44rem Arial;
  color: #c8353c;
}
 .all .add {
  text-align: right;
  font: 0.36rem/1.25rem "微软雅黑";
  margin-top: 0.07rem;
}
 .all .add span {
  color: #c8353c;
  font-family: Arial;
}
 .all form {
  width: 3.55rem;
  margin: 0 auto;
}
 .all form input {
  width: 3.55rem;
  height: 1.12rem;
  background-color: #f26b11;
  text-align: center;
  font: 0.3rem/1.12rem "微软雅黑";
  border-radius: 0.04rem;
  color: #fff;
}
</style>