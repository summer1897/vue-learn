<template>
	<!-- <div class="container s-container s-all-height">
		<div class="row s-all-height">
			<div class="col-md-2 s-no-padding">
				<el-container>
					<el-aside width="200px">
						<Aside/>
					</el-aside>
				</el-container>
			</div>
			<div class="col-md-10">
				<Header/>
				<Main/>
			</div>
		</div>
	</div> -->
	<el-container class="container">
		<div class="row" style="padding:0px;">
			<el-aside class="col-md-2">
				<Aside/>
			</el-aside>
			<el-container class="col-md-10">
				<el-header>
					<Header/>
				</el-header>
				<el-main>
					<Main/>
				</el-main>
			</el-container>
		</div>
	</el-container>
</template>
<script type="text/javascript">
	import Aside from './aside'
	import Header from './header'
	import Main from './main'
	export default {
		name: 'container',
		data () {
			return {msg: ''}
		},
		components: {Aside,Header,Main}
	}
</script>
<style type="text/css">
	html,body{
		height: 100%;
	}
	.s-container {
		width: 100%;
	}
	.s-no-padding {
		padding: 0px;
	}
	.s-all-height {
		height: 100%;
		overflow: auto;
	}
</style>