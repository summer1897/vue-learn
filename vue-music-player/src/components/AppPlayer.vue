<template>
	<div class="component-player">
		<div id="player"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-2">
					<div class="player-btn">
						<button type="button" :class="isPlay&&playProgress.playPercent!=100?'play-btn move':'play-btn'" @click="play">
							<i :class="[!isPlay||playProgress.playPercent==100?'fa-play-circle':'fa-music','fa','fa-3x']"></i>
						</button>
					</div>
				</div>
				<div class="col-md" style="padding: 30px 0px;">
					<app-progress v-bind="playProgress" v-on:progressChange="changeProgress"/>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import AppProgress from './AppProgress'
	import DateUtils from '../utils/DateUtils'
	export default {
		name: '',
		mounted: function () {
			$('#player').bind($.jPlayer.event.timeupdate,(e) => {
				this.duration = e.jPlayer.status.duration;
				//获取音频当前播放百分比
				this.playProgress.playPercent = e.jPlayer.status.currentPercentAbsolute;
				//获取音频当前播放时间
				this.playProgress.playTime = e.jPlayer.status.currentTime;
				//将当前播放时间进行格式化处理，为'*h:*m:*s'的形式
				this.playProgress.formatPlayTimeStr = DateUtils.formatTime(this.playProgress.playTime);
			});
		},
		data () {
			return {
				msg: '',
				isPlay: false,
				duration: 0, //音频总时长
				playProgress: {
					playTime: 0, //播放时间
					playPercent: 0, //播放时间百分比
					formatPlayTimeStr: '', //格式化播放时间字符串
					barColor: '#7cc699' //进度条颜色
				}
			}
		},
		beforeDestroy: function () {
			$('#player').unbind($.jPlayer.event.timeupdate);
		},
		methods: {
			play: function () {
				var _play = $('#player');
				if (this.isPlay) {
					_play.jPlayer('pause');
				} else {
					_play.jPlayer('play');
				}
				this.isPlay = !this.isPlay;
			},
			changeProgress: function (currentProgress) {
				console.log("get the current progress: ",currentProgress);
				if (this.isPlay) {
					//如果当前音频正在播放，则跳转到指定进度位置，并播放
					$('#player').jPlayer('play',this.duration * currentProgress);
				} else {
					//如果当前音频没有播放，则仅跳转到指定进度位置
					$('#player').jPlayer('pause',this.duration * currentProgress);
				}

			}
		},
		components: {
			'app-progress': AppProgress
		}
	}
</script>
<style scoped lang="less">
	@import '../assets/less/player.less';
</style>