<template>
	<div class="component-aside">
		<el-menu style="height:100%;"
		default-active="2"
		class="el-menu-vertical-demo"
		@open="handleOpen"
		@close="handleClose"
		>
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-menu"></i>
				<span>全部文件</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="1-1">图片</el-menu-item>
				<el-menu-item index="1-2">文档</el-menu-item>
				<el-menu-item index="1-2">视频</el-menu-item>
				<el-menu-item index="1-2">种子</el-menu-item>
				<el-menu-item index="1-2">音乐</el-menu-item>
				<el-menu-item index="1-2">其他</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-menu-item index="2">
			<i class="el-icon-share"></i>
			<span slot="title">我的分享</span>
		</el-menu-item>
		<el-menu-item index="3">
			<i class="el-icon-delete"></i>
			<span slot="title">回收站</span>
		</el-menu-item>
	</el-menu>
</div>
</template>
<script>
	export default {
		name: 'component-aside',
		data () {
			return {

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
<style type="text/css">
	.component-aside {
		height: 100%;
	}
</style>