<template>
  <div class="content" ref="mainContent">
    <layout>
      <h1 slot="header">header title</h1>
      <p>main content</p>
      <p slot="footer">footer title</p>
    </layout>
    <component :is="currentView"></component>
    <div>
      <button @click="changeView">切换</button>
    </div>
    <async-example></async-example>
  </div>
</template>
<script>
import Vue from 'vue'
import Home from './home'
import Posts from './posts'
import Archive from './archive'
  Vue.component('layout',{
    template: '<div class="container"><header><slot name="header"></slot></header><main><slot></slot></main><footer><slot name="footer"></slot></footer></div>',
  });
  Vue.component('async-example', () => import('./Posts'));
export default {
  name: 'content',
  data () {
    return {
      index: 0,
      views: ['Home','Posts','Archive'],
      currentView: 'Home',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeView: function () {
      // console.log("currentView",this.views[this.index]);
      this.index = ++this.index % 3;
      // console.log("views",this.views);
      this.currentView = this.views[this.index];
    }
  },
  components: {
    Home,Posts,Archive
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
