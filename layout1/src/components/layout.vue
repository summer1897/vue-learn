<template>
	<el-container class="s-outer-container">
		<el-aside width="200px">
			<AppAside></AppAside>
		</el-aside>
		<el-container class="s-inner-container">
			<el-header>
				<AppHeader></AppHeader>
			</el-header>
			<el-main>
				<AppMain></AppMain>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
	import AppHeader from './AppHeader'
	import AppAside from './AppAside'
	import AppMain from './AppMain'
	import AppFooter from './AppFooter'

	export default {
		name: "app-conatiner",
		data () {
			return {
				msg: ''
			}
		},
		components: {AppHeader,AppAside,AppMain,AppFooter}
	}
</script>
<style type="text/css">
	.s-outer-container {
		z-index: 99999;
		height: 100%;
	}
	.s-inner-container {
		z-index: 9999;
		margin: 0px;
	}
</style>