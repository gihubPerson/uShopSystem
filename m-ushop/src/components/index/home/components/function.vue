<template>
    <div class="function">
            <ul>
                <li v-for="item in items" :key="item.id"><a href="javaScript:;" @click="$router.push(item.linkTo)"><img :src="item.icoSrc" alt="item.name"><span>{{ item.name }}</span></a></li>
            </ul>
        </div>
</template>
<script>
console.log(this)
export default {
    data(){
        return {
            items:[
                {
                    id:1,
                    icoSrc:require('../../../../assets/images/icon_1.jpg'),
                    name:'限时抢购',
                    linkTo:''
                },
                {
                    id:2,
                    icoSrc:require('../../../../assets/images/icon_2.jpg'),
                    name:'积分商城',
                    linkTo:''
                },
                {
                    id:3,
                    icoSrc:require('../../../../assets/images/icon_3.jpg'),
                    name:'联系我们',
                    linkTo:''
                },
                {
                    id:4,
                    icoSrc:require('../../../../assets/images/icon_4.jpg'),
                    name:'商品分类',
                    linkTo:'/class'
                },
            ]
        }
    },
}
</script>
<style lang="" scoped>
.function {
  background-color: #fff;
}
.function ul {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.function ul li a {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.21rem 0.38rem 0.39rem 0.38rem;
}
.function ul li a img {
  width: 0.64rem;
}
.function ul li a span {
  display: block;
  padding-top: 0.19rem;
  font: 0.26rem "微软雅黑";
  color: black;
}
</style>