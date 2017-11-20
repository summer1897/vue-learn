<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  @select="handleSelect" active-text-color="#42b983">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3" class="s-font">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <a href="#" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../styles/base";

  .s-font {
    color: $primary-color;
  }  
</style>