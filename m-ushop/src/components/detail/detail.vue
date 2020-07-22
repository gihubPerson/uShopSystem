<template>
  <div>
    <h1>{{ $route.query.id }}</h1>
    <my-show></my-show>
    <my-choose></my-choose>
    <my-detail></my-detail>
    <my-speak></my-speak>
  </div>
</template>

<script>
import myShow from "./components/show";
import myChoose from "./components/choose";
import myDetail from "./components/detail";
import mySpeak from "./components/speak";
export default {
  components: {
    myShow,
    myChoose,
    myDetail,
    mySpeak
  }
};
</script>

<style lang="" scoped>
body {
  background-color: #efefef;
}
</style>