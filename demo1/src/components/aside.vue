<template>
	<div class="aside-nav">
		<ul class="nav">
			<li><a href="">权限管理</a></li>
			<li><a href="">日志管理</a></li>
			<li><a href="">登录管理</a></li>
			<li><a href="">代码生成</a></li>
			<li><a href="">数据管理</a></li>
		</ul>
	</div>
</template>
<style scoped>
	.aside-nav {
		margin: 0px;
		padding: 10px;
		display: inline-block;
	}
	.aside-nav .nav {
		list-style: none;
		list-style-type: none;
		background-color: #42b983;
		margin: 0px;
		padding: 0px;
	}
	.aside-nav .nav>li {
		display: block;
		height: 40px;
	}
	.aside-nav .nav>li>a {
		text-decoration: none;
		display: block;
		padding: 10px 20px;
		text-align: center;
		color: white;
	}
</style>