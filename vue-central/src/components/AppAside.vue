<template>
	<div id="component-aside" class="all-height">
		<el-menu 
			default-active="1-4-1" 
			class="el-menu-vertical-demo all-height" 
			@open="handleOpen" 
			@close="handleClose" 
			:collapse="isCollapse"
			:router="true"
			>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">权限管理</span>
				</template>
				<el-menu-item index="/user/list.vhtml" route="/user/list.vhtml">用户管理</el-menu-item>
				<el-menu-item index="1-2" route="/role/list.vhtml">角色管理</el-menu-item>
				<el-menu-item index="1-3" route="/permission/list.vhtml">权限管理</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span slot="title">代码管理</span>
				</template>
				<el-menu-item index="2-1">代码生成</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-loading"></i>
					<span slot="title">测试管理</span>
				</template>
				<el-menu-item index="3-1">系统测试</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-document"></i>
					<span slot="title">日志管理</span>
				</template>
				<el-menu-item index="4-1">系统日志</el-menu-item>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span slot="title">设置</span>
				</template>
				<el-menu-item index="5-1">用户信息</el-menu-item>
				<el-menu-item index="5-2">密码修改</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'component-aside',
		data () {
			return {
				isCollapse: false
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<style scoped>
</style>