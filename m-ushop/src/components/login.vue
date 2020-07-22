<template>
    <div>
        <div>用户名:<input type="text" v-model.trim="userInfo.name"></div>
        <div>密码:<input type="text" v-model.trim="userInfo.passWord"></div>
        <button @click="home">登录</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo:{
                name:'',
                passWord:''
            }
        };
    },
    methods: {
        home(){
            if(this.userInfo.name == '' || this.userInfo.passWord == '' ){
                alert("请输入账号密码")
            }else{
                localStorage.setItem('user',JSON.stringify(this.userInfo))
                this.$router.push('/home')
            }
        }
    },
};
</script>

<style  lang="" scoped>

</style>
