<template>
	<nav id="components-header" class="navbar navbar-default clear-border-radius">
		<div class="container-fluid" style="padding-left:0px;">
			<div class="row">
				<div class="col-md-2">
					<div class="navbar-header logo">
				      <a class="navbar-brand" href="#">
				        <i class="fa fa-music fa-lg"></i>
				        {{ headerTitle }}
				      </a>
				    </div>
				</div>
				<div class="col-md-10">
					<div class="navbar-header navbar-right settings">
				    	<a class="navbar-brand" style="text-algin:center;">
				    		<img src="../assets/1.jpg" width="35" height="35" class="img-responsive img-circle center-block"/>
				    	</a>
				    </div>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
	export default {
		name: 'components-header',
		data() {
			return {
				headerTitle: 'Wolf Music Player'
			}
		},
		methods: {

		}
	}
</script>
<style scoped lang="less">
	@import '../assets/less/base.less';
	@import '../assets/less/common/header.less';
</style>