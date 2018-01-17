<template>
	<div class="component-aside clear-margin clear-padding">
		<div class="panel menu-item">
			<!-- <div class="panel-heading">
				<h3>group1</h3>
			</div> -->
			<div class="panel-body">
					Panel content1
			</div>
		</div>
		<div class="panel menu-item">
			<!-- <div class="panel-heading">
				<h3>group2</h3>
			</div> -->
			<div class="panel-body">Panel content2</div>
		</div>
		<div class="panel menu-item">
			<div class="panel-body">Panel content3</div>
			<!-- <div class="panel-heading">
				<h3>group3</h3>
			</div> -->
		</div>
		<div class="panel menu-item">
			<!-- <div class="panel-heading">
				<h3>group4</h3>
			</div> -->
			<div class="panel-body">Panel content4</div>
		</div>
		<div class="panel menu-item">
			<!-- <div class="panel-heading">
				<h3>group5</h3>
			</div> -->
			<div class="panel-body">Panel content5</div>
			<div class="panel menu-item">
				<div class="panel-body">
					sub panel content5
				</div>
				<div class="panel-body">
					sub panel content6
				</div>
				<div class="panel-body">
					sub panel content7
				</div>
			</div>
		</div>
		<div class="panel menu-item clearfix">
			<!-- <div class="panel-heading">
				<h3>group6</h3>
			</div> -->
			<div class="panel-body">Panel content6</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'component-aside',
		data () {
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
	.component-aside {
		// position: relative;
		// top: 0;
		// left: 0;
		// z-index: 999999;
		// width: 20%;
		// background-color: #627b8c;
		height: 100%;
		width:200px;
		.menu-item {
			background-color: @aside-menu-color;
			.clear-margin;
			.clear-padding;
			.clear-border-radius;
			color: @aside-menu-font-color;
			border-bottom: 1px solid @aside-menu-font-color;
			// height: 50px;
			&:hover {
				background-color: #2c3942;//#232c32;
				color: @white-color;
			}
		}
	}
</style>