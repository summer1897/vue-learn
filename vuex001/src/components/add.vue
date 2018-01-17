<template>
	<div id="add-component">
		<input type="button" class="add-btn" value="add" @click="increment"/>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'add-component',
		data () {
			return {

			}
		},
		methods: {
			increment: function() {
				this.$store.dispatch('increment');
			}
		}
	}
</script>
<style type="text/css">
	.add-btn {
		display: inline-block;
		width: 100px;
		height: 30px;
		background-color: #7cc699;
		color: white;
		font-size: 16px;
		cursor: pointer;
	}
	.add-btn:visited,.add-btn {
		outline: none;
	}
</style>