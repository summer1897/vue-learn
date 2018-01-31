<template>
  <div id="component-layout">
    <el-row>
    	<el-col :span="left">
        <EasyScrollbar>
    		  <app-aside :style="{height:pageHeight}"/>
        </EasyScrollbar>
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
import AppHeader from './AppHeader'
import AppContent from './AppContent'
export default {
  name: 'component-layout',
  created () {
    // alert('page height: ' + document.body.clientHeight);
    this.$root.Bus.$on('collapseToggle',val => {
      // console.log('value:',val);
      this.left = val.leftSpan;
      this.right = val.rightSpan;
    });
  },
  computed: {
    pageHeight () {
      return document.body.clientHeight + 'px';
    }
  },
  data () {
    return {
      left: 4,
      right: 20
    }
  },
  components: {
  	AppAside,AppMain,AppHeader,AppContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-col {
    /*width:100%;*/
  }
</style>
