<template>
<div>
	<el-row :gutter="2">
		<el-col :span="18">
			<el-row class="s-info-header" align="middle" justify="center">
				<el-col :span="4" v-for="info in infos" class="s-info">
					<span>{{ info.number }}</span>
					<span>{{ info.title }}</span>
				</el-col>
			</el-row>
		</el-col>
		<el-col :span="5" :offset="1">
			<el-row class="s-user s-info-header" align="middle" justify="center">
				<el-col :span="24" class="s-info">
					<span>4</span>
					<span>查看用户</span>
				</el-col>
			</el-row>
		</el-col>
	</el-row>
	<el-row class="s-description" :gutter="2">
		<el-col :span="24">
			<el-card class="s-box-card">
				<div class="s-clearfix">
					<i class="el-icon-info"></i>
					<span>自述</span>
				</div>
				<div class="s-content">
					<article>
		                <h1>Boom Management System</h1>
		                <p>基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案</p>
		                <h2>前言</h2>
		                <p>之前在公司用了Vue + Element组件库做了个后台管理系统，基本很多组件可以直接引用组件库的，但是也有一些需求无法满足。像图片裁剪上传、富文本编辑器、图表等这些在后台管理系统中很常见的功能，就需要引用其他的组件才能完成。从寻找组件，到使用组件的过程中，遇到了很多问题，也积累了宝贵的经验。所以我就把开发这个后台管理系统的经验，总结成这个后台管理系统解决方案。</p>
		                <p>该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。</p>
		                <h1>Boom Management System</h1>
		                <p>基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案</p>
		                <h2>前言</h2>
		                <p>之前在公司用了Vue + Element组件库做了个后台管理系统，基本很多组件可以直接引用组件库的，但是也有一些需求无法满足。像图片裁剪上传、富文本编辑器、图表等这些在后台管理系统中很常见的功能，就需要引用其他的组件才能完成。从寻找组件，到使用组件的过程中，遇到了很多问题，也积累了宝贵的经验。所以我就把开发这个后台管理系统的经验，总结成这个后台管理系统解决方案。</p>
		                <p>该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。</p>
		                <h2>功能</h2>
		                <el-checkbox disabled checked>Element UI</el-checkbox>
		                <br>
		                <el-checkbox disabled checked>登录/注销</el-checkbox>
		                <br>
		                <el-checkbox disabled checked>表格</el-checkbox>
		                <br>
		                <el-checkbox disabled checked>表单</el-checkbox>
		                <br>
		                <el-checkbox disabled checked>图表</el-checkbox>
		                <br>
		                <el-checkbox disabled checked>富文本编辑器</el-checkbox>
		                <br>
		                <el-checkbox disabled checked>markdown编辑器</el-checkbox>
		                <br>
		                <el-checkbox disabled checked>图片拖拽/裁剪上传</el-checkbox>
		                <br>
		                <el-checkbox disabled checked>支持切换主题色</el-checkbox>
		                <br>
		                <el-checkbox disabled checked>列表拖拽排序</el-checkbox>
		                <br>
		            </article>
				</div>
			</el-card>
		</el-col>
	</el-row>
</div>
</template>
<style scoped lang="scss">
	@import '../styles/base';
	.s-info-header {
		padding: 20px 0px;
		background-color: $primary-color;
		color: white;
		font-size: 20px;
		text-align: center;
		.s-info:not(:last-child) {
			border-right: 1px solid white;
		}
		.s-info {
			padding: 20px 0px;
			span:first-child {
				margin-bottom: 10px;
			}
			span {
				display: block;
			}
		}
	}
	.s-user {
		background-color: $general-color;
	}
	.s-description{
		margin: 20px 0px 20px 0px;
		.s-box-card {
			padding: 20px;
			.s-clearfix:before,.s-clearfix:after {
				display: table;
				content: "";
			}
			.s-clearfix {
				clear: both;
			}
			.s-content {
				
			}
		}
	}
</style>
<script type="text/javascript">
	export default {
		data () {
			return {
				infos: [
					{
						number: 24,
						title: "在线人数"
					},
					{
						number: 34,
						title: "总人数"
					},
					{
						number: 4,
						title: "可用服务器"
					},
					{
						number: 5,
						title: "总服务器数"
					},
					{
						number: 1,
						title: "正在进行项目"
					},
					{
						number: 30,
						title: "已完成项目数"
					}
				]
			}
		}
	}
</script>