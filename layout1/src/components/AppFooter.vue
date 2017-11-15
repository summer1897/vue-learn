<template>
	<!-- <el-footer>
		<slot name="footer">footer</slot>
	</el-footer> -->
	<div class="s-footer">
		<slot name="s-footer">footer</slot>
	</div>
</template>
<style scoped>
	.s-footer {
		height: 30px;
		line-height: 30px;
		background-color: #42b983;
		color: white;
		text-align: center;
	}
</style>