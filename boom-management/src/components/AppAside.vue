<template>
		<el-menu default-active="1-4-1" 
			class="el-menu-vertical-demo hidden-sm-and-down s-aside-menu" 
			@open="handleOpen" 
			@close="handleClose" 
			active-text-color="#42b983"
			:collapse="isCollapse"
		>
		  <div class="log" @click="expand">
		  	<i style="font-weight:bolder;" class="el-icon-d-arrow-right" v-show="!show"></i>
		  	<span class="log-title" v-show="show">VUEAmin</span>
		  </div>
		  <el-submenu index="2">
		    <template slot="title">
		      <i class="el-icon-location"></i>
		      <span slot="title">导航一</span>
		    </template>
		    <el-menu-item-group>
		      <span slot="title">分组一</span>
		      <el-menu-item index="2-1">选项1</el-menu-item>
		      <el-menu-item index="2-2">选项2</el-menu-item>
		    </el-menu-item-group>
		    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
		  </el-submenu>
		  <el-menu-item index="3">
		    <i class="el-icon-menu"></i>
		    <span slot="title">导航二</span>
		  </el-menu-item>
		  <el-menu-item index="4">
		    <i class="el-icon-setting"></i>
		    <span slot="title">导航三</span>
		  </el-menu-item>
		  <el-menu-item index="5">
		    <i class="el-icon-setting"></i>
		    <span slot="title">导航四</span>
		  </el-menu-item>
		  <el-menu-item index="6">
		    <i class="el-icon-setting"></i>
		    <span slot="title">导航五</span>
		  </el-menu-item>
		  <el-menu-item index="7">
		    <i class="el-icon-setting"></i>
		    <span slot="title">导航六</span>
		  </el-menu-item>
		</el-menu>
		<!---->
</template>
<style>
	a,a:visited {
		text-decoration: none;
		outline: none;
	}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    /*z-index: 99999;*/
  }
  .s-aside-menu {
  	height: 100%;
  }
  .log {
	padding:15px;
	color:#42b983;
	cursor: pointer;
	text-align:center;
	font-weight:bolder;
	font-size: 24px;
  }
/*默认滚动条样式*/
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar-track {
    border: 1px #d3d3d3 solid;
    box-shadow: 0px 0px 3px #dfdfdf inset;
    border-radius: 10px;
    background: #eee;
}
::-webkit-scrollbar-thumb {
    border: 1px #808080 solid;
    border-radius: 10px;
    background: #999;
}
::-webkit-scrollbar-thumb:hover {
    background: #7d7d7d;
}
</style>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        show: true
      };
    },
    methods: {
      expand: function () {
      	this.isCollapse = !this.isCollapse;
      	this.show = !this.show;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>