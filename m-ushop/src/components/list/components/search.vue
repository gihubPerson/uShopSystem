<template>
  <div class="search">
    <form action="#" method="post">
      <input type="search" name="search" placeholder="搜索商品" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="" scoped>
 .search {
  padding: 0.22rem 0 0.16rem 0;
}
 .search form {
  width: 6.25rem;
  margin: 0 auto;
  height: 0.75rem;
  background-color: #f26b11;
  text-align: center;
  padding-left: 2.36rem;
  box-sizing: border-box;
  border-radius: 0.35rem;
}
 .search form input {
  font: 0.26rem/0.75rem "微软雅黑";
  padding-left: 0.5rem;
  background: url(../../../assets/images/search.jpg) no-repeat left center / 0.26rem 0.27rem;
}
 .search form input::-webkit-input-placeholder {
  color: #fff;
}

</style>