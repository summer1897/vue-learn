<template>
	<div class="component-layout">
		<el-row>
			<el-col :span="5">
				<app-aside/>
			</el-col>
			<el-col :span="19">
				<app-central/>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	import AppHeader from './AppHeader'
	import AppAside from './AppAside'
	import AppCentral from './AppCentral'
	export default {
		name: 'component-layout',
		data () {
			return {

			}
		},
		components: {
			AppHeader,AppAside,AppCentral
		}
	}
</script>
<style type="text/css">
	.component-layout {
		height: 100%;
	}
	.el-row {
		height: 100%;
	}
	.el-col {
		height: 100%;
		border-radius: 4px;
	}

	.bg-purple {
		background: #d3dce6;
	}
	.grid-content {
		border-radius: 0px;
		height: 36px;
	}	
</style>