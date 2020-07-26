<template>
  <div>
    <el-button type="primary" class="add" @click="add">添加</el-button>
    <el-table
      :data="getGoodsList"
      style="width: 100%"
      row-key="id"
      border
      :tree-props="{children: 'children'}"
    >
      <el-table-column prop="id" label="商品编号"></el-table-column>
      <el-table-column prop="goodsname" label="商品名称"></el-table-column>
      <el-table-column prop="price" label="商品价格"></el-table-column>
      <el-table-column prop="market_price" label="市场价格"></el-table-column>

      <el-table-column label="图片">
        <template slot-scope="item">
          <img :src="'http://localhost:3000/' + item.row.img " />
        </template>
      </el-table-column>
      <el-table-column label="是否新品">
        <template slot-scope="item">
          <el-tag v-if="item.row.isnew == 1" type="success">启用</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="是否热卖">
        <template slot-scope="item">
          <el-tag v-if="item.row.ishot == 1" type="success">启用</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
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
    <el-dialog title="商品添加" :visible.sync="dialogFormVisible">
      <el-form :model="sessionForm" :rules="rules" ref="session">
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
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="sessionForm.goodsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input v-model="sessionForm.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="市场价格" :label-width="formLabelWidth">
          <el-input v-model="sessionForm.market_price" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 图片 -->
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :file-list="fileList"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-change="changeImg"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>

        <el-form-item label="商品规格" :label-width="formLabelWidth">
          <el-select v-model="sessionForm.specsid" placeholder="请选择">
            <el-option
              v-for="item in getSpecsList"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="规格属性" :label-width="formLabelWidth">
          <el-select multiple v-model="sessionForm.specsattr" placeholder="请选择">
            <el-option v-for="item in attrArr" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否新品" :label-width="formLabelWidth">
          <el-switch v-model="isnew" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
        <el-form-item label="是否热卖" :label-width="formLabelWidth">
          <el-switch v-model="ishot" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch v-model="status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <div ref="desc" id="desc"></div>
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
  addGoodsList,
  delGoodsList,
  getGoodsInfo,
  EditGoodsList,
} from "../../axios";
export default {
  data() {
    return {
      //富文本内容
      editor: "",
      theUrl: "",
      fileList: [],
      imgUrl: "",
      dialogImageUrl: "",
      dialogVisible: false,
      rules: {
        catename: [{ required: true, message: "请输入内容", trigger: "blur" }],
      },
      isAdd: true,
      dialogFormVisible: false,
      status: true,
      isnew: true,
      ishot: true,
      //二级菜单列表
      secondArr: [],
      //属性列表
      attrArr: [],
      sessionForm: {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        description: "",
        specsid: "",
        specsattr: [],
        isnew: "",
        ishot: "",
        status: "",
      },
      formLabelWidth: "120px",
    };
  },
  computed: {
    //获取菜单列表getGoodsList
    ...mapGetters(["getGoodsList", "getCateList", "getSpecsList"]),
  },
  mounted() {
    //获取菜单数据渲染进getGoodsList
    this.changeGoodsListY();
    this.changeCateListY();
    this.changeSpecsListY();
  },
  methods: {
    ...mapActions(["changeGoodsListY", "changeCateListY", "changeSpecsListY"]),

    //打开弹窗
    openEditor() {
      setTimeout(() => {
        this.editor = new E("#desc");
        this.editor.create();
      }, 5);
    },

    //删除图片
    handleRemove(file, fileList) {
      this.imgUrl = file.raw;
      console.log(file, fileList);
    },

    handlePictureCardPreview(file) {
      this.imgUrl = file.raw;
      this.dialogVisible = true;
    },
    //上传图片之后获取传上去的地址
    changeImg(file) {
      console.log(file);
      this.imgUrl = file.raw;
    },

    add() {
      this.openEditor();
      this.isAdd = true;
      this.dialogFormVisible = true;
    },

    //添加菜单项
    push(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = this.sessionForm;
          console.log(this.$refs.desc.innerHTML);
          data.description = this.editor.txt.html();
          data.status = this.status ? "1" : "2";
          data.ishot = this.ishot ? "1" : "2";
          data.isnew = this.isnew ? "1" : "2";
          let file = new FormData();
          for (let item in data) {
            file.append(item, data[item]);
          }
          file.append("img", this.imgUrl);
          addGoodsList(file).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeGoodsListY();
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
          delGoodsList({ id }).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeGoodsListY();
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
      this.openEditor();
      getGoodsInfo({ id }).then((res) => {
        console.log(res);
        this.editor.txt.html(res.data.list.description);
        this.sessionForm = res.data.list;
        this.sessionForm.specsattr =
          res.data.list.specsattr != ""
            ? res.data.list.specsattr.split(",")
            : [];

        this.fileList = [{ url: "http://localhost:3000/" + res.data.list.img }];
        this.theUrl = res.data.list.img;
        this.dialogFormVisible = true;
        this.sessionForm.id = id;
      });
    },

    //点击更新按钮  更新数据
    update(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = this.sessionForm;
          console.log(this.editor.txt.html());
          data.description = this.editor.txt.html();
          data.status = this.status ? "1" : "2";
          data.ishot = this.ishot ? "1" : "2";
          data.isnew = this.isnew ? "1" : "2";
          let file = new FormData();
          for (let item in data) {
            file.append(item, data[item]);
          }
          file.append("img", this.imgUrl == "" ? this.theUrl : this.imgUrl);
          console.log(file);
          EditGoodsList(file).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeGoodsListY();
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
    "sessionForm.status": {
      handler(newV) {
        this.status = newV == "1" ? true : false;
      },
      deep: true,
    },
    "sessionForm.ishot": {
      handler(newV) {
        this.ishot = newV == "1" ? true : false;
      },
      deep: true,
    },
    "sessionForm.isnew": {
      handler(newV) {
        this.isnew = newV == "1" ? true : false;
      },
      deep: true,
    },

    dialogFormVisible(newV) {
      if (!newV) {
        this.sessionForm = {
          first_cateid: "",
          second_cateid: "",
          goodsname: "",
          price: "",
          market_price: "",
          description: "",
          specsid: "",
          specsattr: [],
          isnew: "",
          ishot: "",
          status: "",
        };
        this.status = true;
        this.fileList = [];
        this.imgUrl = "";
        this.theUrl = "";
        this.secondArr = [];
        this.attrArr = [];
        this.$refs.desc.innerHTML = ''
        this.editor.txt.html();
        //未填信息验证清除
        this.resetForm("session");
      }
    },
    //一级分类选择之后,请求二级分类
    "sessionForm.first_cateid": {
      handler(id) {
        this.getCateList.map((item) => {
          if (item.id == id) {
            this.secondArr = item.children;
          }
        });
      },
      deep: true,
    },
    //选择规格之后获取属性
    "sessionForm.specsid": {
      handler(id) {
        this.getSpecsList.map((item) => {
          if (item.id == id) {
            this.attrArr = item.attrs;
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

.el-table {
  img {
    height: 80px;
  }
}
</style>
