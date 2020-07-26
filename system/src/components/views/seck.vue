<template>
  <div>
    <h1>{{sessionForm.begintime}}</h1>
    <el-button type="primary" class="add" @click="add">添加</el-button>
    <el-table
      :data="getSeckList"
      style="width: 100%"
      row-key="id"
      border
      :tree-props="{children: 'children'}"
    >
      <el-table-column prop="title" label="活动名称"></el-table-column>

      <el-table-column label="状态">
        <template slot-scope="item">
          <el-tag v-if="item.row.status == 1" type="success">启用</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="item">
          <el-button @click="edit(item.row.id)" tsype="primary">编辑</el-button>
          <el-button @click="del(item.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹出窗 -->
    <el-dialog title="商品添加" :visible.sync="dialogFormVisible">
      <el-form :model="sessionForm" :rules="rules" ref="session">
        <el-form-item label="活动名称" :label-width="formLabelWidth" prop="title">
          <el-input v-model="sessionForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 时间 -->
        <el-form-item label="活动名称" :label-width="formLabelWidth" prop="title">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </el-form-item>

        <!-- 分类 -->
        <el-form-item label="一级分类" :label-width="formLabelWidth">
          <el-select v-model="sessionForm.first_cateid" placeholder="请选择">
            <el-option
              v-for="item in getCateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" :label-width="formLabelWidth">
          <el-select v-model="sessionForm.second_cateid" placeholder="请选择">
            <el-option
              v-for="item in secondArr"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品" :label-width="formLabelWidth">
          <el-select v-model="sessionForm.goodsid" placeholder="请选择">
            <el-option
              v-for="item in goodsArr"
              :key="item.id"
              :label="item.goodsname"
              :value="item.goodsid"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch v-model="status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="isAdd" type="primary" @click="push('session')">添 加</el-button>
        <el-button v-else type="primary" @click="update('session')">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import E from "wangeditor";

import { mapGetters, mapActions } from "vuex";
import {
  addSeckList,
  delSeckList,
  getSeckInfo,
  EditSeckList,
} from "../../axios";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      rules: {
        title: [{ required: true, message: "请输入内容", trigger: "blur" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
      },

      isAdd: true,
      dialogFormVisible: false,
      status: true,
      //二级菜单列表
      secondArr: [],
      //筛选出的商品数组
      goodsArr: [],
      //时间数组
      time: [],
      sessionForm: {
        title: "",
        first_cateid: "",
        second_cateid: "",
        goodsid: "",
        begintime: "",
        endtime: "",
        status: "",
      },
      formLabelWidth: "120px",
    };
  },
  computed: {
    //获取菜单列表getSeckList
    ...mapGetters([
      "getSeckList",
      "getCateList",
      "getSpecsList",
      "getGoodsList",
    ]),
  },
  mounted() {
    //获取菜单数据渲染进getSeckList
    this.changeSeckListY();
    this.changeCateListY();
    this.changeSpecsListY();
    this.changeGoodsListY();
  },
  methods: {
    ...mapActions([
      "changeSeckListY",
      "changeCateListY",
      "changeSpecsListY",
      "changeGoodsListY",
    ]),
    add() {
      this.isAdd = true;
      this.dialogFormVisible = true;
    },

    //添加菜单项
    push(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = this.sessionForm;
          data.status = this.status ? "1" : "2";
          console.log(data);
          addSeckList(data).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeSeckListY();
              this.dialogFormVisible = false;
            } else if (res.data.code == 500) {
              this.$message.warning(res.data.msg);
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //未填信息验证清除
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //删除菜单项
    del(id) {
      this.$confirm("此操作将删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delSeckList({ id }).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeSeckListY();
            } else {
              this.$message.error(res.data.msg);
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    //点击编辑按钮  获取当条信息 并赋值给弹框 并弹出
    edit(id) {
      this.isAdd = false;
      getSeckInfo({ id }).then((res) => {
        console.log(res);
        this.sessionForm = res.data.list;
        this.dialogFormVisible = true;
        this.sessionForm.id = id;
        this.time[0] = new Date(res.data.list.begintime).toLocaleString()
        this.time[1]=  new Date(res.data.list.endtime).toLocaleString()
        console.log(this.time);
      });
    },

    //点击更新按钮  更新数据
    update(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = this.sessionForm;
          data.status = this.status ? "1" : "2";
          EditSeckList(data).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeSeckListY();
              this.dialogFormVisible = false;
            } else if (res.data.code == 500) {
              this.$message.warning(res.data.msg);
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  watch: {
    time(newT) {
      if (newT != "") {
        this.sessionForm.begintime = newT[0].getTime();
        this.sessionForm.endtime = newT[1].getTime();
      }
    },
    "sessionForm.status": {
      handler(newV) {
        this.status = newV == "1" ? true : false;
      },
      deep: true,
    },
    dialogFormVisible(newV) {
      if (!newV) {
        this.sessionForm = {
          title: "",
          first_cateid: "",
          second_cateid: "",
          goodsid: "",
          begintime: "",
          endtime: "",
          status: "",
        };
        this.status = true;
        this.secondArr = [];
        this.goodsArr = [];
        this.time = [];
        //未填信息验证清除
        this.resetForm("session");
      }
    },
    //一级分类选择之后,请求二级分类
    "sessionForm.first_cateid": {
      handler(id) {
        this.goodsArr = [];
        this.getCateList.map((item) => {
          if (item.id == id) {
            this.secondArr = item.children;
          }
        });
      },
      deep: true,
    },
    // 选择玩分类之后  筛选出合适的商品
    "sessionForm.second_cateid": {
      handler(secondCateId) {
        this.getGoodsList.map((item) => {
          if (
            item.first_cateid == this.sessionForm.first_cateid &&
            item.second_cateid == this.sessionForm.second_cateid
          ) {
            this.goodsArr.push({
              goodsid: item.id,
              goodsname: item.goodsname,
            });
          }
        });
      },
      deep: true,
    },
  },
};
</script>

<style  lang="stylus" scoped>
.add {
  margin: 10px 0 10px 0;
}
</style>
