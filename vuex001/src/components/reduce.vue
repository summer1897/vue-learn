<template>
	<div id="reduce-component">
		<input type="button" class="reduce-btn" @click="reduce" value="reduce" />
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'reduce-component',
		data () {
			return {

			}
		},
		methods: {
			reduce: function() {
				this.$store.dispatch('reduce');
			}
		}
	}
</script>
<style type="text/css">
	.reduce-btn {
		display: inline-block;
		width: 100px;
		height: 30px;
		background-color: #7cc699;
		color: white;
		font-size: 16px;
		cursor: pointer;
	}
	.reduce-btn:visited,.reduce-btn {
		outline: none;
	}
</style>