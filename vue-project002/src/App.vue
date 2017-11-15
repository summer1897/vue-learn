<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <ol>
      <!-- <li>{{fruits}}</li> -->
      <to-list v-for="(fruit,index) of fruits" v-bind:name="fruit"></to-list>
    </ol>
    <div id="pros">
      <ul>
        <li v-for="(province,capital,index) in provinces">
          {{index}}. {{province}}--{{capital}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Vue from 'vue'

Vue.component('to-list',{
  props: ['name'],
  template: '<li>{{ name.index }}-{{ name.text }}</li>'
});

export default {
  name: 'app',
  data() {
    return {
      fruits: [
        {text: 'apple'},
        {text: 'banana'},
        {text: 'pear'},
        {text: 'watermelon'},
        {text: 'orange'}
      ],
      provinces: {
        '贵州': '贵阳',
        '云南': '昆明',
        '四川': '成都',
        '湖北': '武汉',
        '浙江': '杭州'
      }
    }
  },
  components: {
    Hello
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
