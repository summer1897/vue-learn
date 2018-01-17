<template>
	<div class="container-fluid clear-margin clear-padding"  id="component-main">
		<div class="row" style="margin:0px;padding:0px;">
			<div class="col-md-2" style="margin:0px;padding:0px;">
				<!-- <app-aside></app-aside> -->
				<app-menu/>
			</div>
			<div class="col-md-10" style="border:1px solid red;">
				sssssssssssss
				<!-- <app-player/> -->
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import AppMenu from './AppMenu'
	// import AppContent from './AppContent'
	import AppPlayer from './AppPlayer'
	export default {
		name: 'component-main',
		data () {
			return {
				msg: ''
			}
		},
		methods: {

		},
		components: {
			// 'apa-aside': AppAisde,
			'app-menu': AppMenu,
			'app-player': AppPlayer
		}
	}
</script>
<style scoped lang="less">
	@import '../assets/less/base.less';
	#component-main {
		// clear: both;
		// padding: 0px 20px;
	}
</style>