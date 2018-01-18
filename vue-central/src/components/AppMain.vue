<template>
	<div id="component-main">
		<app-header/>
		<app-content/>
	</div>
</template>
<script type="text/javascript">
	import AppHeader from './AppHeader'
	import AppContent from './AppContent'
	export default {
		name: 'component-main',
		data () {
			return {

			}
		},
		components: {
			AppHeader,AppContent
		}
	}
</script>
<style scoped>
	
</style>