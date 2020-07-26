<template>
  <div>
    <el-button type="primary" class="add" @click="add">添加</el-button>
    <el-table
      :data="getBannerList"
      style="width: 100%"
      row-key="id"
      border
      :tree-props="{children: 'children'}"
    >
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="title" label="轮播图标题"></el-table-column>

      <el-table-column label="图片">
        <template slot-scope="item">
          <img :src="'http://localhost:3000/' + item.row.img " />
        </template>
      </el-table-column>
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
    <el-dialog title="轮播图" :visible.sync="dialogFormVisible">
      <el-form :model="sessionForm" :rules="rules" ref="session">
        <el-form-item label="标题" :label-width="formLabelWidth" prop="title">
          <el-input v-model="sessionForm.title" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 图片 -->
        <el-form-item label="图片" :label-width="formLabelWidth"  prop="title">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :file-list="fileList"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-change="changeImg"
            :limit="1"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
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
  addBannerList,
  delBannerList,
  getBannerInfo,
  EditBannerList
} from "../../axios";
export default {
  data() {
    return {
      theUrl:'',
      fileList: [],
      imgUrl: "",
      dialogImageUrl: "",
      dialogVisible: false,
      rules: {
        title: [{ required: true, message: "请输入内容", trigger: "blur" }]
      },
      isAdd: true,
      dialogFormVisible: false,
      status: true,
      sessionForm: {
        title: "",
        img:"",
        status: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    //获取菜单列表getBannerList
    ...mapGetters(["getBannerList"])
  },
  mounted() {
    //获取菜单数据渲染进getBannerList
    this.changeBannerListY();
  },
  methods: {
    ...mapActions(["changeBannerListY"]),

    //删除图片
    handleRemove(file, fileList) {
      this.imgUrl = file.raw;
    },

    handlePictureCardPreview(file) {
      this.imgUrl = file.raw;
      this.dialogVisible = true;
    },
    //上传图片之后获取传上去的地址
    changeImg(file) {
      this.imgUrl = file.raw;
    },

    add() {
      this.isAdd = true;
      this.dialogFormVisible = true;
    },

    //添加菜单项
    push(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = this.sessionForm;
          data.status = this.status ? "1" : "2";
          let file = new FormData();
          for (let item in data) {
            file.append(item, data[item]);
          }
          file.append("img", this.imgUrl);
          addBannerList(file).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeBannerListY();
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
          delBannerList({ id }).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeBannerListY();
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
      getBannerInfo({ id }).then(res => {
        this.sessionForm = res.data.list;
        if (this.sessionForm.pid == 0) {
          this.sessionForm.pid = res.data.list.pid.toString();
        }
        this.fileList =[{ url: "http://localhost:3000/" + res.data.list.img }]
        if(res.data.list.img == ''){
          this.fileList = []
          this.imgUrl = ""
        }
        this.theUrl = res.data.list.img
        this.dialogFormVisible = true;
        this.sessionForm.id = id;
      });
    },

    //点击更新按钮  更新数据
    update(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = this.sessionForm;
          data.status = this.status ? "1" : "2";
          let file = new FormData();
          for (let item in data) {
            file.append(item, data[item]);
          }
          file.append("img", this.imgUrl == '' ? this.theUrl : this.imgUrl);
          console.log(file);
          EditBannerList(file).then(res => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeBannerListY();
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
           title: "",
        img:"",
        status: ""
        };
        this.status = true;
        this.fileList = [];
        this.imgUrl = "";
        this.theUrl = ''
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

.el-table {
  img {
    height: 80px;
  }
}
</style>
