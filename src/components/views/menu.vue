<template>
  <div>
    <el-button type="primary" class="add" @click="add">添加</el-button>
    <el-table
      :data="getMenuList"
      style="width: 100%"
      row-key="id"
      border
      :tree-props="{children: 'children'}"
    >
      <el-table-column prop="id" label="菜单编号"></el-table-column>
      <el-table-column prop="title" label="菜单名称"></el-table-column>
      <el-table-column prop="pid" label="上级菜单"></el-table-column>
      <el-table-column prop="icon" label="菜单图标">
        <template slot-scope="item">
          <i :class="item.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column prop="url" label="菜单地址"></el-table-column>
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
    <el-dialog title="菜单添加" :visible.sync="dialogFormVisible">
      <el-form :model="sessionForm" :rules="rules" ref="session">
        <el-form-item label="菜单名称" :label-width="formLabelWidth" prop="title">
          <el-input v-model="sessionForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" :label-width="formLabelWidth">
          <el-select v-model="sessionForm.pid" placeholder="请选择上级菜单">
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option
              v-for="item in getMenuList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单类型" :label-width="formLabelWidth" prop="type">
          <template>
            <el-radio-group v-model="sessionForm.type">
              <el-radio :label="1">目录</el-radio>
              <el-radio :label="2">菜单</el-radio>
            </el-radio-group>
          </template>
        </el-form-item>
        <el-form-item
          v-if="sessionForm.type == 2"
          label="菜单地址"
          :label-width="formLabelWidth"
          prop="url"
        >
          <el-input v-model="sessionForm.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-else label="菜单图标" :label-width="formLabelWidth">
          <el-input v-model="sessionForm.icon" autocomplete="off"></el-input>
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
import { mapGetters, mapActions } from "vuex";
import { addMenuList, delMenuList, getMenuInfo, EditMenuList } from "../../axios";
export default {
  data() {
    return {
      rules: {
        title: [{ required: true, message: "请输入内容", trigger: "blur" }],
        type: [{ required: true, message: "请输入内容", trigger: "blur" }],
        url: [{ required: true, message: "请输入内容", trigger: "blur" }]
      },
      isAdd: true,
      dialogFormVisible: false,
      status: true,
      sessionForm: {
        title: "",
        pid: "",
        type: 1,
        status: "",
        url: "",
        icon: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    //获取菜单列表getMenuList
    ...mapGetters(["getMenuList"])
  },
  mounted() {
    //获取菜单数据渲染进getMenuList
    this.changeMenuListY();
  },
  methods: {
    ...mapActions(["changeMenuListY"]),

    add() {
      this.isAdd = true;
      this.dialogFormVisible = true;
    },

    //添加菜单项
    push(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sessionForm.status = this.status ? "1" : "2";
          addMenuList(this.sessionForm).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeMenuListY();
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
          delMenuList({ id }).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeMenuListY();
            } else {
              this.$message.error(res.data.msg);
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
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
      getMenuInfo({ id }).then(res => {
        this.sessionForm = res.data.list;
        this.dialogFormVisible = true;
        this.sessionForm.id = id;
      });
    },
  
    //点击更新按钮  更新数据
    update(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          EditMenuList(this.sessionForm).then(res => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.changeMenuListY();
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
    dialogFormVisible(newV) {
      if (!newV) {
        this.sessionForm = {
          title: "",
          pid: "",
          type: 1,
          radio: "",
          status: "",
          url: ""
        };
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
</style>
