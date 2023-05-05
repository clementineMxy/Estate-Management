<template>


  <el-dialog v-model="$store.state.HomeModule.dialogFormVisible" title="请输入修改信息">
    <el-form :model="form" :label-width="formLabelWidth">
      <el-form-item label="楼盘名称" :label-width="formLabelWidth" >
        <el-input v-model="form.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="房源类型" :label-width="formLabelWidth" >
        <el-input v-model="form.type" autocomplete="off" />
      </el-form-item>
      <el-form-item label="门牌号" :label-width="formLabelWidth" >
        <el-input v-model="form.num" autocomplete="off" />
      </el-form-item>
      <el-form-item label="房源户型" :label-width="formLabelWidth" >
        <el-input v-model="form.hometype" autocomplete="off" />
      </el-form-item>
      <el-form-item label="户主" :label-width="formLabelWidth" >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
    
   
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog(0)">取消</el-button>
        <el-button type="primary" @click="closeDialog(1)"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import {useStore} from "vuex"
import link from "../api/Link.js"
import url from "../api/url.js"
let store=useStore()

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  title:"",
  type:"",
  num:"",
  hometype:""
})

// num用于判断点击的是取消还是确定
let closeDialog=(num:number)=>{
   store.commit("DIALOG")
  if(num==1){
    console.log(store.state.HomeModule.uplistData)//要修改的内容
 
    // 新内容
    let data={
      name:form.name,title:form.title,type:form.type,num:form.num,hometype:form.hometype
    }

    // 这里仅修改后端数据，没有更新仓库里state，也就没有更新页面
    link(url.userlist+"/"+store.state.HomeModule.uplistData.id,"PUT",data).then((ok:any)=>{
      console.log(ok)
    })
  }
}

</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
/* .el-input {
  width: 300px;
} */
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>