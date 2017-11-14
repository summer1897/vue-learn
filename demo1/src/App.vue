<template>
  <div id="app">
      <Header></Header>
      <Aside></Aside>
      <MainContent></MainContent>
      <Footer></Footer>
  </div>
</template>

<script>
// import Vue from 'vue'
import Header from './components/header'
import Aside from './components/aside'
import MainContent from './components/content'
import Footer from './components/footer'

export default {
  name: 'app',
  data () {
  	return {
  		msg: 'hello,vuejs!'
  	};
  },
  components: {Header,Aside,MainContent,Footer}
}
</script>

<style>
	html,body {
		margin: 0px;
		padding: 0px;
	}
</style>
