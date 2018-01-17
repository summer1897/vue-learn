<template>
	<div class="component-progress" @click="changeProgress" ref="progressBar">
		<div class="progress" :style="{'width':currentProgress,'backgroundColor':barColor}">
			{{ formatPlayTimeStr }}
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ['playPercent','playTime','formatPlayTimeStr','barColor'],
		computed: {
			currentProgress: function () {
				return this.playPercent + '%';
			}
		},
		data () {
			return {
				msg: '' 
			}
		},
		methods: {
			changeProgress: function(e) {
				console.log('from parent component props: ',this.playPercent);
				let _progressBar = this.$refs.progressBar;
				let _progress = (e.clientX - _progressBar.getBoundingClientRect().left) / _progressBar.clientWidth;
				// console.log("progress bar",_progress);
				// this.$parent.$data.time = _progress;
				this.$emit('progressChange',_progress);
			}
		}
	}
</script>
<style scoped lang="less">
	@import '../assets/less/progress.less';
</style>