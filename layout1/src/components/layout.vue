<template>
	<el-container class="s-outer-container">
		<!-- <AppAside></AppAside>
		<el-container>
			<AppHeader></AppHeader>
			<AppMain>App Main Content</AppMain>
			<AppFooter>App Footer</AppFooter>
		</el-container> -->
		<el-header>
				<AppHeader></AppHeader>
		</el-header>
		
		<el-container class="s-inner-container">
			<el-aside>
				<AppAside></AppAside>
			</el-aside>
			<!-- <el-main>
				<AppMain></AppMain>
			</el-main> -->
		</el-container>
		<slot name="container"></slot>
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
	}
</style>