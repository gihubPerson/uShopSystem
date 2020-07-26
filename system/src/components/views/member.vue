<template>
  <div>
    <el-table
      :data="getMemberList"
      style="width: 100%"
      row-key="id"
      border
      :tree-props="{children: 'children'}"
    >
      <el-table-column prop="uid" label="用户编号"></el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>

      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <el-tag v-if="item.row.status == 1" type="success">启用</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="item">
          <el-button @click="edit(item.row.uid)" tsype="primary">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹出窗 -->
    <el-dialog title="会员编辑" :visible.sync="dialogFormVisible">
      <el-form :model="sessionForm" :rules="rules" ref="session">
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="sessionForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname">
          <el-input v-model="sessionForm.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="sessionForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch v-model="status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update('session')">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getMemberInfo, EditMemberList } from "../../axios";
export default {
  data() {
    return {
      rules: {
        phone: [{ required: true, message: "请输入内容", trigger: "blur" }],
        password: [{ required: true, message: "请输入内容", trigger: "blur" }],
      },
      dialogFormVisible: false,
      status: true,
      sessionForm: {
        nickname: "",
        uid: "",
        phone: "",
        status: "",
        password: "",
      },
      formLabelWidth: "120px",
    };
  },
  computed: {
    //获取菜单列表getMemberList
    ...mapGetters(["getMemberList"]),
  },
  mounted() {
    //获取菜单数据渲染进getMemberList
    this.changeMemberListY();
  },
  methods: {
    ...mapActions(["changeMemberListY"]),

    //未填信息验证清除
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //点击编辑按钮  获取当条信息 并赋值给弹框 并弹出
    edit(uid) {
      this.isAdd = false;
      getMemberInfo({ uid }).then((res) => {
        console.log(res);
        this.sessionForm = res.data.list;
        if ("" + res.data.list.icon == "undefined") {
          this.sessionForm.icon = "";
        }
        this.dialogFormVisible = true;
      });
    },

    //点击更新按钮  更新数据
    update(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.sessionForm.status = this.status ? "1" : "2";
          EditMemberList(this.sessionForm).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeMemberListY();
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
          nickname: "",
          uid: "",
          phone: "",
          status: "",
          password: "",
        };
        //未填信息验证清除
        this.resetForm("session");
      }
    },
  },
};
</script>

<style  lang="" scoped>
</style>
