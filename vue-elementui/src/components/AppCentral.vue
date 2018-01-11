<template>
	<div class="component-central">
		<app-header/>
		<app-main/>
	</div>
</template>
<script>
	import AppHeader from './AppHeader'
	import AppMain from './AppMain'
	export default {
		name: 'component-central',
		data () {
			return {

			}
		},
		methods: {
			
		},
		components: {
			AppHeader,AppMain
		}
	}
</script>