<template>
  <div class="wrap">
    <my-header :title="title"></my-header>
    <my-list @changeList="getId"></my-list>
    <my-product :goods="goodsList"></my-product>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { getCate } from "@/axios";
import myList from "./components/list";
import myProduct from "./components/products";
export default {
  components: {
    myList,
    myProduct,
  },
  data() {
    return {
      title: "商品分类",
      checkedId: "",
      goodsList: [],
    };
  },
  mounted() {
    this.getList();
  },
    computed: {
        ...mapGetters(['getGoodsList'])
    },
  methods: {
    ...mapActions(["getList"]),
    getId(id) {
      console.log(id);
      this.checkedId = id;
      this.getGoodsList.map((item) => {
        if (item.id == id) {
          console.log(1);
          this.goodsList = item;
          console.log(this.goodsList);
        }
      });
    },
  },
};
</script>

<style lang="" scoped>
.wrap {
  padding-bottom: 0;
}
</style>