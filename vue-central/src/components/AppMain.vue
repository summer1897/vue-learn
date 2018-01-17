<template>
	<div id="component-main">
		<app-header/>
		<app-content/>
		<transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
			<router-view/>
		</transition>
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