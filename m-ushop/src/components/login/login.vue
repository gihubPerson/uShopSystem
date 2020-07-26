<template>
  <div>
    <my-header :title="title"></my-header>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名 :"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码 :"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="forgetBox">
          <a class="forgetPassWord" href="javaScript:;">忘记密码</a>
      </div>
      <div style="margin: 16px;">
        <van-button class="submit" round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import myHeader from "../public/header";
export default {
  data() {
    return {
      title: "登录",
      username: "",
      password: "",
    };
  },
  components: {
    myHeader,
  },
  methods: {
    onSubmit(values) {
        localStorage.setItem("user",JSON.stringify(values))
    },
  },
};
</script>

<style  lang="stylus" scoped>
@import "../../stylus";
.van-form
    padding-top 1.5rem
.submit
    border-radius .1rem
    background-color $allBgc
    border $allBgc
.forgetPassWord
    display block
    text-align right 
    padding .1rem 1rem 0 0
    color #ccc
</style>
