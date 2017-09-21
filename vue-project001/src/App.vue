<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addItem"/>
    <ul>
      <li v-for="item in items" v-bind:class="{finished : item.isFinished}" v-on:click="toggleStatus(item)">
        {{item.label}}
      </li>
    </ul>
    <ul>
      <li v-for="firstRes in resources">
        {{firstRes.name}}
        <ul>
          <li v-for="secondRes in firstRes.subResources">
            {{secondRes.name}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

import Store from './Store'
// import ResourceDao from './dao/ResourceDao'
import Axios from 'axios'

export default {
  data () {
    return {
        title : 'this is a todo list',
        items : Store.fetch(),
        resources : '',
        newItem : ''
    };
  },
  created () {
    // console.log('create vue object...');
    console.log('resources',this.resources);
    // ResourceDao.fetch('http://localhost:9000/boom/authority/resourceList.html',this);
    Axios.get('http://localhost:9000/boom/authority/resourceList.html')
        .then(function (response) {
          console.log(response.data);
          // _data = response.data;
          this.resources = response.data;
          // return JSON.stringify(response);
        }.bind(this)).catch(function (error){
          console.log('error');
          console.log(error);
        });
  },
  watch : {
    items : {
      handler : function (datas) {
        Store.save(datas)
      },
      deep : true
    }
  },
  methods : {
      toggleStatus : function(item) {
          item.isFinished = !item.isFinished
      },
      addItem : function() {
        //console.log('itens: '+this.items);
        //console.log('resources: '+this.resources);
        this.items.push({
          label : this.newItem,
          isFinished : false
        })
        this.newItem = ''
      }
  }
}
</script>

<style>
.finished {
  color: green;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
