<template>
	<el-container class="s-outer-container">
		<el-aside width="250px;" class="s-aside">
			<AppAside/>
		</el-aside>
		<el-container class="s-inner-container">
			<el-header>
				<AppHeader/>
			</el-header>
			<el-main>
				<router-view/>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
	import AppHeader from './AppHeader'
	import AppAside from './AppAside'
	import AppFooter from './AppFooter'

	export default {
		name: "app-conatiner",
		data () {
			return {
				msg: ''
			}
		},
		components: {AppHeader,AppAside,AppFooter}
	}
</script>
<style scoped lang="scss">
	.s-outer-container {
		position: absolute;
		display:flex;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.s-aside {
			position:relative;
			flex: 0 0 auto;
			z-index: 9999;
		}
		.s-inner-container {
			position:relative;
			flex: 1;
			z-index: 999;
		}
	}
</style>