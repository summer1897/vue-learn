<template>
  <div id="app">
    <h3>welcome to study vuex</h3>
    <add/>
    <reduce/>
    <h4>{{ $store.state.count }}</h4>
  </div>
</template>

<script>
import Add from './components/add'
import Reduce from './components/reduce'
export default {
  name: 'app',
  data() {

  },
  methods: {

  },
  components: {
    'add': Add,
    'reduce': Reduce
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
