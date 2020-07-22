<template>
  <div>
    <el-button type="primary" class="add" @click="add">添加</el-button>
    <el-table :data="getUserList" style="width: 100%" row-key="id" border>
      <el-table-column prop="uid" label="用户编号"></el-table-column>
      <el-table-column prop="username" label="用户名称"></el-table-column>
      <el-table-column prop="rolename" label="所属角色"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <el-tag v-if="item.row.status == 1" type="success">启用</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="item">
          <el-button @click="edit(item.row.uid)" tsype="primary">编辑</el-button>
          <el-button @click="del(item.row.uid)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹出窗 -->
    <el-dialog title="添加管理员" :visible.sync="dialogFormVisible">
      <el-form :model="sessionForm" :rules="rules" ref="session">
        <el-form-item label="所属角色" :label-width="formLabelWidth">
          <el-select v-model="sessionForm.roleid" placeholder="请选择">
            <el-option
              v-for="item in getRoleList"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名称" :label-width="formLabelWidth" prop="username">
          <el-input v-model="sessionForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="sessionForm.password" autocomplete="off"></el-input>
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
  addUserList,
  delUserList,
  getUserInfo,
  EditUserList,
  getUserCount
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
        username: [{ required: true, message: "请输入内容", trigger: "blur" }],
        password: [{ required: true, message: "请输入内容", trigger: "blur" }]
      },
      isAdd: true,
      dialogFormVisible: false,
      status: true,
      sessionForm: {
        roleid: "",
        username: "",
        password: "",
        status: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    //获取菜单列表getUserList
    ...mapGetters(["getUserList", "getRoleList"])
  },
  mounted() {
    //获取菜单数据渲染进getUserList
    this.changeRoleListY();
    //获取列表条数
    this.getCount();
    //载入时  渲染默认首页列表
    this.$store.dispatch("changeUserListY", this.pageInfo);
  },

  methods: {
    //获取列表条数
    getCount() {
      getUserCount().then(res => {
        if (res.data.code == 200) {
          this.total = res.data.list[0].total;
        }
      });
    },
    ...mapActions(["changeRoleListY"]),
    //点击页码按钮
    page(page) {
      this.pageInfo.page = page;
      this.$store.dispatch("changeUserListY", this.pageInfo);
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
          console.log(this.sessionForm);

          addUserList(this.sessionForm).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.$store.dispatch("changeUserListY", this.pageInfo);
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
    del(uid) {
      this.$confirm("此操作将删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delUserList({ uid }).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              //判断是否降低一个页码数来获取最新的列表
              if ((this.total - 1) % this.pageInfo.size == 0) {
                this.pageInfo.page--;
              }
              this.$store.dispatch("changeUserListY", this.pageInfo);
              //获取列表条数
              this.getCount();
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
    edit(uid) {
      this.isAdd = false;
      getUserInfo({ uid }).then(res => {
        this.sessionForm = res.data.list;
        this.dialogFormVisible = true;
        this.sessionForm.uid = uid;
      });
    },

    //点击更新按钮  更新数据
    update(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sessionForm.status = this.status ? "1" : "2";
          EditUserList(this.sessionForm).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.$store.dispatch("changeUserListY", this.pageInfo);
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
          roleid: "",
          username: "",
          password: "",
          status: ""
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
