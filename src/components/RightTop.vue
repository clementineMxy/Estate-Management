<template>
  <div>
      <!-- <CaretRight>和<CaretLeft>是控制导航栏隐藏弹出的图标 -->
      <el-icon @click="ck"><CaretRight v-if="$store.state.HomeModule.navBool"/><CaretLeft v-else/></el-icon>
  </div>
</template>

<script setup>
import {CaretRight,CaretLeft} from '@element-plus/icons-vue'
import {useStore} from "vuex"
let store=useStore()
// import {ref} from "vue"
// let bool=ref(true)

let ck=()=>{
   store.commit("SET_NAV_BOOL")
}
</script>

<style lang="scss">
    .el-header{
        line-height: 70px;
        .el-icon{
            // 设置图标大小
            font-size:20px;
        }
    }
</style>