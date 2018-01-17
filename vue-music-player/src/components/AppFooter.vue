<template>
	<nav id="component-footer" class="navbar navbar-default navbar-fixed-bottom bottom-bar">
		<div class="container-fuid">
			<div class="navbar-header">
				<a href="#" class="navbar-brand">
					Vue
				</a>
			</div>
		</div>
	</nav>
</template>
<script>
	export default {
		name: 'component-footer',
		data() {
			return {
				msg: ''
			}
		},
		methods: {

		}
	}
</script>
<style scoped lang="less">
	@import '../assets/less/base.less';
	.bottom-bar {
		margin-top: 90px;
		background-color: #232c32;
		// height: 80px;
		padding: 20px 0px;
		.clear-border;
		// line-height: 80px;
	}
</style>