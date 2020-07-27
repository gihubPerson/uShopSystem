<template>
  <div>
    <my-header :title="title"></my-header>
    <van-form @submit="onSubmit">
      <van-field
        v-model="nickname"
        name="nickname"
        label="昵称 :"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="phone"
        name="phone"
        label="手机号 :"
        placeholder="手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码 :"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="position:relative">
        <van-field
          v-model="code"
          type="code"
          name="code"
          label="验证码 :"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <a class="reSend" @click="start" href="javaScript:;">
          重新发送(
          <van-count-down
            class="time"
            ref="countDown"
            :time="60000"
            :auto-start="false"
            format="ss"
            @finish="finish"
          />)
        </a>
      </div>

      <div style="margin: 16px;">
        <van-button class="submit" round block type="info" native-type="submit">下一步</van-button>
      </div>
    </van-form>

    <van-field name="checkbox">
      <template #input>
        <van-checkbox v-model="checkbox" shape="square" />
        <span>我已阅读并同于使用条款和隐私政策</span>
      </template>
    </van-field>
  </div>
</template>

<script>
import myHeader from "../public/header";
import { register } from "@/axios";
export default {
  data() {
    return {
      title: "注册",
      nickname: "",
      password: "",
      phone: "",
      code: "",
      checkbox: false,
    };
  },
  components: {
    myHeader,
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      if (this.checkbox) {
        register(values).then((res) => {
          if (res.data.code == 200) {
            this.$router.push({
              path: "/login",
            });
          }
        });
      }
    },
    start() {
      this.$refs.countDown.start();
    },
    finish() {
      console.log("倒计时结束");
    },
  },
};
</script>

<style  lang="stylus" scoped>
@import '../../stylus';

.van-form {
  padding-top: 1.5rem;
}

.submit {
  border-radius: 0.1rem;
  background-color: $allBgc;
  border: $allBgc;
}

.reSend {
  position: absolute;
  right: 0.4rem;
  bottom: 0.2rem;
  color: #ccc;
  font-size: 0.3rem;
}

.time {
  display: inline-block;
  color: #ccc;
}
</style>
