<template>
	<div class="components-container">
		<header>
			<app-header/>
		</header>
		<main>
			<!-- <app-player/> -->
			<app-main/>
		</main>
		<footer style="margin-top:90px;">
			<app-footer/>
		</footer>
	</div>
</template>
<script type="text/javascript">
	import AppHeader from './AppHeader'
	// import AppPlayer from './AppPlayer'
	import AppMain from './AppMain'
	import AppFooter from './AppFooter'
	export default {
		name: 'components-container',
		mounted: function() {
			$('#player').jPlayer({
				ready: function () {
					$(this).jPlayer('setMedia',{
						mp3: 'static/songs/yanyuan.mp3'
					});
				},
				supplied: 'mp3',
				wmode: 'window'
			});
		},
		data() {
			return {
				msg: '',
			}
		},
		methods: {
			
		},
		components: {
			'app-header': AppHeader,
			'app-main': AppMain,
			// 'app-player': AppPlayer,
			'app-footer': AppFooter
		}
	}
</script>
<style scoped lang="less">
	@import '../assets/less/common/layout.less';
</style>