<template>
  <div class="all clearfix">
    <form action="#" method="post">
      <input type="checkbox" @change="isAll" v-model="isChecked" />
      <span>全选</span>
    </form>
    <a href="javaScript:;" @click="buy">
      <div class="buy">
        去结算(
        <span>{{productNum}}</span>件)
      </div>
    </a>
    <div class="allPrice">
      <h5>
        总计：
        <span>{{allPrice | toPrice(2)}}</span>
      </h5>
      <p>不含运费，已优惠￥0.00</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["allPrice", "productNum"],
  data() {
    return {
      isChecked: false,
    };
  },
  computed: {
    ...mapGetters(["getChecked"]),
  },
  methods: {
    isAll() {
      this.getChecked.map((item,idx)=>{
          item.checked = this.isChecked
      })
      this.$store.commit("changeAllChecked", this.getChecked);
    },
    buy(){
      this.$router.push({
        path:'/confirm'
      })
    }
  },
  watch: {
    getChecked: {
      handler(newV) {
        let isAll = newV.every((item) => item.checked == true);
        this.isChecked = isAll;
      },
      deep: true,
    },
  },
};
</script>

<style lang="" scoped>
.all {
  width: 7.75rem;
  padding-left: 0.24rem;
  position: fixed;
  bottom: 1.17rem;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  background-color: #fff;
}
.all form {
  display: inline-block;
  margin-top: 0.46rem;
}
.all form input {
  width: 0.34rem;
  height: 0.34rem;
  vertical-align: middle;
}
.all form span {
  font: 0.24rem "微软雅黑";
  padding-left: 0.15rem;
  vertical-align: middle;
}
.all .allPrice {
  float: right;
  display: block;
  text-align: right;
  width: 2.25rem;
  padding: 0.16rem 0.36rem 0 0;
}
.all .allPrice h5 {
  font: 0.3rem/0.44rem "微软雅黑";
}
.all .allPrice h5 span {
  color: #f26b11;
}
.all .allPrice p {
  font: 0.2rem/0.38rem "微软雅黑";
  color: #a4a4a4;
}
.all .buy {
  display: block;
  float: right;
  width: 2.47rem;
  text-align: center;
  font: 0.3rem/1.14rem "微软雅黑";
  background-color: #f26b11;
  color: #fff;
}
</style>