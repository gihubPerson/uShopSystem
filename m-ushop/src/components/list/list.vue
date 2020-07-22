<template>
    <div>
        <my-header></my-header>
        <my-search></my-search>
        <my-list></my-list>
    </div>
</template>

<script>
import myHeader from './components/header'
import mySearch from './components/search'
import myList from './components/list'
export default {
    components:{
        mySearch,
        myList,
        myHeader
    }
    
}
</script>

<style lang="" scoped>

</style>