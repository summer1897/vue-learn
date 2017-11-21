<template>
	<el-container class="s-outer-container">
		<el-aside>
			<AppAside/>
		</el-aside>
		<el-container class="s-inner-container">
			<el-header>
				<AppHeader/>
			</el-header>
			<el-main>
				<AppMain/>
			</el-main>
		</el-container>
	</el-container>
	<!--<el-row class="s-container">
		<el-col class="s-aside-menu" :span="3">
			<AppAside/>
		</el-col>
		<el-col class="s-main-content" :span="21">
			<AppMain/>
		</el-col>
	</el-row>-->
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
<style scoped lang="scss">
	// .s-container {
	// 	position: absolute;
	// 	display: flex;
	// 	top: 0px;
	// 	bottom: 0px;
	// 	width: 100%;
	// 	.s-aside-menu {
	// 		flex: 0 0 200px;
	// 		width: 200px;

	// 	}
	// 	.s-main-content {
	// 		flex: 1;
	// 		overflow-y: scroll; 
	// 	}
	// }
	.s-outer-container {
		/*z-index: 99999;*/
		height: 100%;
	}
	.s-inner-container {
		/*z-index: 9999;*/
		margin: 0px;
	}
</style>