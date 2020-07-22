<template>
    <header class="header">
            <a href=""><img :src="logoSrc"></a>
            <form action="#" method="post"><input type="serch" name="serch" autocomplete placeholder="寻找商品"></form>
            <div class="mun">
                <span></span>
                <span></span>
                <span></span>
            </div>
    </header>
</template>
<script>
export default {
    data(){
        return {
            logoSrc:require('../../../../assets/images/logo.jpg')
        } 
    }
}
</script>
<style lang="" scoped>
    
</style>