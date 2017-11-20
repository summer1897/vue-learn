<template>
  <div id="app">
      <header-bar></header-bar>
      <aside-bar></aside-bar>
      <MainContent></MainContent>
      <footer-bar></footer-bar>
  </div>
</template>

<script>
// import Vue from 'vue'
import HeaderBar from './components/headerBar'
import AsideBar from './components/asideBar'
import MainContent from './components/content'
import FooterBar from './components/footerBar'

export default {
  name: 'app',
  data () {
  	return {
  		msg: 'hello,vuejs!'
  	};
  },
  components: {HeaderBar,AsideBar,MainContent,FooterBar}
}
</script>

<style>
	html,body {
		margin: 0px;
		padding: 0px;
	}
</style>
