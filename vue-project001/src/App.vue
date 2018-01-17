<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addItem"/>
    <ul>
      <li v-for="item in items" v-bind:class="{finished : item.isFinished}" v-on:click="toggleStatus(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
        title : 'this is a todo list',
        items : [],
        newItem : ''
    };
  },
  methods : {
      toggleStatus : function(item) {
          item.isFinished = !item.isFinished
      },
      addItem : function() {
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
