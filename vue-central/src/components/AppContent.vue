<template>
	<div id="component-content">
		<transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
			<router-view/>
		</transition>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'component-content',
		data () {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
<style type="text/css">
	#component-content {
		padding: 10px 20px;
	}
</style>