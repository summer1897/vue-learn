<template>
  <div id="app">
    <img src="./assets/logo.png" @click="layerTips()">
    <!-- <hello></hello> -->
    <div id="app">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">custom header</h3>
      </modal>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import modal from './components/dialog'
import './assets/dialog-style.css'

export default {
  name: 'app',
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    layerTips: function () {
      layui.layer.msg("Hello,this is a vue project combining layui");
    }
  },
  components: {
    modal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
