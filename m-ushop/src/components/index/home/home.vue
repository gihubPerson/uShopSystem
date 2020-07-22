<template>
    <div class="home">
        <my-header></my-header>
        <my-navbar></my-navbar>
        <my-banner></my-banner>
        <my-function></my-function>
        <my-area></my-area>
        <my-banners></my-banners>
        <my-hot></my-hot>
    </div>
</template>
<script>
import myHeader from './components/header'
import myNavbar from './components/navbar'
import myBanner from './components/banner'
import myFunction from './components/function'
import myArea from './components/area'
import myBanners from './components/banner2'
import myHot from './components/hot'
export default {
    components:{
        myHeader,
        myNavbar,
        myBanner,
        myFunction,
        myArea,
        myBanners,
        myHot,
    }
}
</script>
<style lang="" scoped>
body {
  background-color: #f0f0f0;
}
.home{
  padding-bottom: 1rem;
}

</style>