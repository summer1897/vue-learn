<template>
		<el-menu default-active="1-4-1" 
			class="el-menu-vertical-demo hidden-sm-and-down s-aside-menu" 
			@open="handleOpen" 
			@close="handleClose" 
			active-text-color="#42b983"
			:collapse="isCollapse"
			router
		>
		  <div class="log" @click="expand">
		  	<i style="font-weight:bolder;" class="el-icon-menu" v-show="!show"></i>
		  	<span class="log-title" v-show="show">VUEAmin</span>
		  </div>
		  <template v-for="menu in menus">
		  	<template v-if="menu.submenu">
		  		<el-submenu :index="menu.index">
		  			<template slot="title">
		  				<i :class="menu.icon"></i>
		  				<span slot="title">{{ menu.title }}</span>
		  			</template>
		  			<el-menu-item v-for="(sub,index) in menu.submenu" 
		  						:key="index" :index="sub.index">
		  				<i :class="sub.icon"></i>
		  				<span slot="title">
		  					{{ sub.title }}
		  				</span>
		  			</el-menu-item>
		  		</el-submenu>
		  	</template>
		  	<template v-else>
		  		<el-menu-item :index="menu.index">
		  			<i :class="menu.icon"></i>
		  			<span slot="title">
		  				{{ menu.title }}
		  			</span>
		  		</el-menu-item>
		  	</template>
		  </template>
		</el-menu>
</template>
<style scoped lang="scss">
	@import '../styles/base';
	a,a:visited {
		text-decoration: none;
		outline: none;
	}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 250px;
	    min-height: 400px;
	    /*z-index: 99999;*/
  }
  .el-submenu,.el-menu--collapse {
		z-index: 99999;
  }
  .s-aside-menu {
  		height: 100%;
  }
  .log {
		padding:15px;
		color: $primary-color;
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
        show: true,
        menus: [
        	{
        		icon: 'el-icon-setting',
        		index: '1',
        		title: '用户管理',
        		submenu: [
        			{
        				icon: 'el-icon-info',
        				index: '/user/list',
        				title: '用户信息'
        			}
        		]
        	},
        	{
        		icon: 'el-icon-info',
        		index: '2',
        		title: '信息管理',
        		submenu: [
        			{
        				icon: 'el-icon-news',
        				index: 'newsInfo',
        				title: '新闻信息'
        			},
        			{
        				icon: 'el-icon-picture',
        				index: 'newsPicture',
        				title: '新闻图片'
        			},
        			{
        				icon: 'el-icon-edit-outline',
        				index: 'addNews',
        				title: '发布新闻'
        			}
        		]
        	},
        	{
        		icon: 'el-icon-service',
        		index: '3',
        		title: '服务器管理',
        		submenu: [
        			{
        				icon: 'el-icon-goods',
        				index: 'serverInfo',
        				title: '服务器信息'
        			}
        		]
        	},
        	{
        		icon: 'el-icon-document',
        		index: '4',
        		title: '项目管理',
        		submenu: [
        			{
        				icon: 'el-icon-info',
        				index: 'projectsInfo',
        				title: '项目信息'
        			}
        		]
        	},
        	{
        		icon: 'el-icon-circle-close-outline',
        		index: 'logout',
        		title: '注销'
        	}
        ]
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