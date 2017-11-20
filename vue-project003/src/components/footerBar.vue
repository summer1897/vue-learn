<template>
	<div class="footer" v-show="visible">
		<p>This is a footer</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'footer',
		data () {
			return {
				visible: true
			};
		}
	}
</script>
<style scoped>
	.footer {
		margin: 0px;
		padding: 5px;
		color: white;
		background-color: #42b983;
	}
	.footer>p {
		text-align: center;
	}
</style>