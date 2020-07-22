<template>
    <div class="banner2">
            <a href="#"><img :src="imgSrc" alt="冰箱"></a>
        </div>
</template>
<script>
export default {
    data(){
        return {
            imgSrc:require('../../../../assets/images/bar.jpg')
        }
    }
}
</script>
<style lang="" scoped>
.banner2 img {
  width: 100%;
  margin-top: 0.3rem;
}
</style>