<template>
  <div>
    <el-button type="primary" class="add" @click="add">添加</el-button>
    <el-table :data="getRoleList" style="width: 100%" row-key="id" border>
      <el-table-column prop="id" label="角色编号"></el-table-column>
      <el-table-column prop="rolename" label="角色名称"></el-table-column>
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
    <el-dialog title="角色添加" :visible.sync="dialogFormVisible">
      <el-form :model="sessionForm" :rules="rules" ref="session">
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="rolename">
          <el-input v-model="sessionForm.rolename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="角色权限" :label-width="formLabelWidth">
          <el-tree
            ref="tree"
            :data="getMenuList"
            show-checkbox
            node-key="id"
            default-expand-all
            :default-checked-keys="defaultKey"
            :props="defaultProps"
          ></el-tree>
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
import {
  addRoleList,
  delRoleList,
  getRoleInfo,
  EditRoleList
} from "../../axios";
export default {
  data() {
    return {
      defaultKey: [],
      defaultProps: {
        children: "children",
        label: "title"
      },
      rules: {
        rolename: [{ required: true, message: "请输入内容", trigger: "blur" }]
      },
      isAdd: true,
      dialogFormVisible: false,
      status: true,
      sessionForm: {
        status: "",
        rolename: "",
        menus: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    //获取菜单列表getRoleList
    ...mapGetters(["getRoleList", "getMenuList"])
  },
  mounted() {
    //获取菜单数据渲染进getRoleList
    this.changeRoleListY();
    this.changeMenuListY();
  },
  methods: {
    ...mapActions(["changeRoleListY", "changeMenuListY"]),

    //点击添加按钮
    add() {
      this.isAdd = true;
      this.dialogFormVisible = true;
    },

    //添加菜单项
    push(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sessionForm.menus = this.$refs.tree.getCheckedKeys().join(",");
          this.sessionForm.status = this.status ? "1" : "2";
          console.log(this.sessionForm);
          addRoleList(this.sessionForm).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeRoleListY();
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
          delRoleList({ id }).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeRoleListY();
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
      getRoleInfo({ id }).then(res => {
        this.defaultKey = res.data.list.menus
          ? res.data.list.menus.split(",")
          : [];
        this.sessionForm = res.data.list;
        this.dialogFormVisible = true;
        this.sessionForm.id = id;
      });
    },

    //点击更新按钮  更新数据
    update(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sessionForm.menus = this.$refs.tree.getCheckedKeys().join(",");
            console.log(this.sessionForm);
          EditRoleList(this.sessionForm).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeRoleListY();
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
          status: "",
          rolename: "",
          menus: ""
        };
        this.$refs.tree.setCheckedKeys([]);
        //未填信息验证清除
        this.resetForm("session");
      }
    }
  }
};
</script>

<style  lang="stylus" scoped>
.add {
  margin: 10px 0 10px 0;
}
</style>
