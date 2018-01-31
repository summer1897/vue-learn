<template>
	<div id="component-header">
		<el-row>
			<el-col :span="1">
				<div class="menu-toggle" @click="menuToggle">
					<i :class="datas.isCollapse ? 'el-icon-d-arrow-right':'el-icon-d-arrow-left'"/>
				</div>
			</el-col>
			<el-col :span="23">
				<el-menu
            mode="horizontal"
            background-color="#376956"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
					<el-menu-item index="1">首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
					</el-submenu>
					<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">用户心中</a></el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'component-header',
		data () {
			return {
				activeIndex: '1',
        		activeIndex2: '1',
        		datas: {
        			isCollapse: false,
        			leftSpan: 4,
        			rightSpan: 20
        		}
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			menuToggle () {
				this.datas.isCollapse = !this.datas.isCollapse;
				if (this.datas.isCollapse) {
					this.datas.leftSpan = 0;
					this.datas.rightSpan = 24;
				} else {
					this.datas.leftSpan = 4;
					this.datas.rightSpan = 20;
				}

				this.$root.Bus.$emit('collapseToggle',this.datas);
			}
		}
	}
</script>
<style type="text/css">
	.menu-toggle {
		height:60px;
		line-height:60px;
		text-align: center;
		padding:0px 15px;
		border-bottom:1px solid #e6e6e6;
		cursor: pointer;
    background-color: #376956;
    color: #fff;
		/*border: 1px solid green;*/
	}
	.menu-toggle:hover {
		background-color: rgb(44,84,69);
	}
</style>
