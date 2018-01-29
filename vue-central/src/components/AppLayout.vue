<template>
  <div id="component-layout" class="all-height">
    <el-row class="all-height">
    	<el-col :span="left" class="all-height">
    		<app-aside/>
    	</el-col>
    	<el-col :span="right">
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
  created () {
    this.$root.Bus.$on('collapseToggle',val => {
      // console.log('value:',val);
      this.left = val.leftSpan;
      this.right = val.rightSpan;
    });
  },
  data () {
    return {
      left: 4,
      right: 20
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
