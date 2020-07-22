<template>
  <div>
    <el-button type="primary" class="add" @click="add">添加</el-button>
    <el-table :data="getSpecsList" style="width: 100%" row-key="id" border>
      <el-table-column prop="id" label="规格编号"></el-table-column>
      <el-table-column prop="specsname" label="规格名称"></el-table-column>
      <el-table-column label="规格属性">
        <template slot-scope="item">
          <el-tag v-for="theItem in item.row.attrs" :key="theItem">{{ theItem }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
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
    <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible">
      <el-form :model="sessionForm" :rules="rules" ref="session">
        <el-form-item label="规格名称" :label-width="formLabelWidth" prop="specsname">
          <el-input v-model="sessionForm.specsname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="规格属性" :label-width="formLabelWidth">
          <el-input v-model="attrArr[0]" style="width:50%" autocomplete="off"></el-input>
          <el-button type="primary" @click="addAttr">新增规格属性</el-button>
        </el-form-item>
        <!-- 新增的属性循环 -->
        <template>
          <el-form-item
            v-for="(item,idx) in attrArr"
            v-if="idx != 0"
            :key="idx"
            label="规格属性"
            :label-width="formLabelWidth"
          >
            <el-input v-model="attrArr[idx]" style="width:50%" autocomplete="off"></el-input>
            <el-button type="danger" @click="delAttr(idx)">删除</el-button>
          </el-form-item>
        </template>

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

    <el-pagination
      background
      :page-size="pageInfo.size"
      layout="prev, pager, next"
      @current-change="page"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  addSpecsList,
  delSpecsList,
  getSpecsInfo,
  EditSpecsList,
  getSpecsCount
} from "../../axios";
export default {
  data() {
    return {
      pageInfo: {
        page: 1,
        size: 2
      },

      total: null,
      rules: {
        specsname: [{ required: true, message: "请输入内容", trigger: "blur" }],
        attrs: [{ required: true, message: "请输入内容", trigger: "blur" }]
      },
      isAdd: true,
      dialogFormVisible: false,
      status: true,
      attrArr: [""],
      sessionForm: {
        specsname: "",
        attrs: "",
        status: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    //获取菜单列表getSpecsList
    ...mapGetters(["getSpecsList"]),
  },
  mounted() {
    //获取菜单数据渲染进getSpecsList
    this.changeRoleListY();
    //获取列表条数
    this.getCount();
    //载入时  渲染默认首页列表
    this.$store.dispatch("changeSpecsListY", this.pageInfo);
  },

  methods: {
    //添加属性输入框
    addAttr() {
      if (this.attrArr.length <= 5) {
        this.attrArr.push("");
      }
    },
    //删除属性
    delAttr(idx) {
      this.attrArr.splice(idx, 1);
    },
    //把属性数组变成字符串
    arrToStr(){
      this.sessionForm.attrs = this.attrArr.join(',')
    },
    //获取列表条数
    getCount() {
      getSpecsCount().then(res => {
        if (res.data.code == 200) {
          this.total = res.data.list[0].total;
        }
      });
    },
    ...mapActions(["changeRoleListY"]),
    //点击页码按钮
    page(page) {
      this.pageInfo.page = page;
      this.$store.dispatch("changeSpecsListY", this.pageInfo);
    },

    add() {
      this.isAdd = true;
      this.dialogFormVisible = true;
    },

    //添加菜单项
    push(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sessionForm.status = this.status ? "1" : "2";
          this.arrToStr()
          console.log(this.sessionForm);
          addSpecsList(this.sessionForm).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.$store.dispatch("changeSpecsListY", this.pageInfo);
              //获取列表条数
              this.getCount();
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
        type: "warning"
      })
        .then(() => {
          delSpecsList({ id }).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              //判断是否降低一个页码数来获取最新的列表
              if ((this.total - 1) % this.pageInfo.size == 0) {
                this.pageInfo.page--;
              }
              this.$store.dispatch("changeSpecsListY", this.pageInfo);
              //获取列表条数
              this.getCount();
            } else {
              this.$message.error(res.data.msg);
            }
          });
          if(this.total == 1){
            this.$store.dispatch("changeSpecsListY", this.pageInfo);
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //点击编辑按钮  获取当条信息 并赋值给弹框 并弹出
    edit(id) {
      this.isAdd = false;
      getSpecsInfo({ id }).then(res => {
        this.sessionForm = res.data.list[0];
        this.attrArr = res.data.list[0].attrs
        this.dialogFormVisible = true;
      });
    },

    //点击更新按钮  更新数据
    update(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sessionForm.status = this.status ? "1" : "2";
          this.arrToStr()
          EditSpecsList(this.sessionForm).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.$store.dispatch("changeSpecsListY", this.pageInfo);
              //获取列表条数
              this.getCount();
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
    }
  },
  watch: {
    dialogFormVisible(newV) {
      if (!newV) {
        this.sessionForm = {
          specsname: "",
          attrs: "",
          status: ""
        };
        this.attrArr = [];
        //未填信息验证清除
        this.resetForm("session");
      }
    }
  }
};
</script>

<style  lang="" scoped>
.add {
  margin: 10px 0 10px 0;
}
.el-pagination {
  text-align: right;
}
</style>
