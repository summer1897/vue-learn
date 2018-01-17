<template>
  <div id="component-layout" class="all-height">
    <el-row class="all-height">
    	<el-col :span="4" class="all-height">
    		<app-aside/>
    	</el-col>
    	<el-col :span="20">
    		<app-main/>
    	</el-col>
    </el-row>
  </div>
</template>

<script>
import AppAside from './AppAside'
import AppMain from './AppMain'
export default {
  name: 'component-layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  	AppAside,AppMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-col {
    /*width:100%;*/
  }
</style>
