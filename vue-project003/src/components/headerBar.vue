<template>
	<div class="header">
		<ul>
			<li>
				<a href="">首页</a>
			</li>
			<li>
				<a href="">关于我们</a>
			</li>
			<li>
				<a href="">招聘</a>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	html,body {
		margin: 0px;
		padding: 0px;
	}
	.header {
		padding: 0px;
		margin: 0px;
		background-color: #42b983;
	}

	.header>ul {
		list-style: none;
	}

	.header>ul>li {
		display: inline-block;
	}

	.header>ul>li>a {
		display: inline-block;
		text-decoration: none;
		color: white;
		padding: 5px 10px;
	}
</style>