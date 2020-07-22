<template>
  <div class="login">
    <el-form
      :model="userInfo"
      :rules="rules"
      ref="userInfo"
      label-width="100px"
      class="demo-userInfo"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input v-model="userInfo.passWord" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userInfo')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {userLogin} from '../../axios'
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        let passWordTest = /(?!^\d+$)^.{6,18}$/;
        if (!passWordTest.test(this.userInfo.passWord)) {
          callback(new Error("至少6-18个数字字母组合"));
        }
      }
      callback();
    };
    return {
      userInfo: {
        username: "",
        passWord: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        passWord: { validator: validatePass, trigger: "blur" }
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          userLogin(this.userInfo).then((res)=>{
            console.log(res);
          })
          // if (
          //   this.userInfo.name == "admin" &&
          //   this.userInfo.passWord == "123456abc"
          // ) {
          //   this.$router.push("/home");
          // } else {
          //   this.$message.error("密码错误 请重试");
          // }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style  lang="stylus" scoped>
@import '../../stylus/index.styl';

.login {
  background-color: $loginBgcColor;
  width: 100vw;
  height: 100vh;

  .demo-userInfo {
    padding: 20px;
    background-color: $bgColorDefault;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .el-input {
      width: 300px;
    }
  }
}
</style>