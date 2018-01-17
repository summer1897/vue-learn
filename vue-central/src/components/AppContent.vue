<template>
	<div id="component-content">
		<div class="s-row">
			<el-tree
				:data="userMenus"
				show-checkbox
				node-key="id"
				ref="treeMenu"
				:default-expanded-keys="[2, 3]"
				:default-checked-keys="[5]"
				:props="defaultProps">
			</el-tree>
			<el-button-group>
				<el-button type="primary" @click="getCheckedNodes" icon="el-icon-edit">通过Node获取</el-button>
				<el-button @click="getCheckedKeys" type="primary" icon="el-icon-share">通过key获取</el-button>
				<el-button type="primary" icon="el-icon-delete" @click="selectAll">全选</el-button>
				<el-button type="primary" icon="el-icon-delete" @click="clear">清空</el-button>
			</el-button-group>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {user} from '../db/user'
	export default {
		name: 'component-content',
		mounted() {
			user.getUserMenus("/user/menus.json").then(res => {
				this.userMenus = res;
				console.log(res);
			});
			var allSelectedEle = this.$refs.treeMenu.getCheckedNodes(true);
			console.log("all selected elements: ",allSelectedEle);
		},
		data () {
			return {
				userMenus: [],
				defaultProps: {
					label: 'name',
					children: 'children'
				}
			}
		},
		methods: {
			getCheckedNodes() {
				var nodes = this.$refs.treeMenu.getCheckedNodes(true);
				if (nodes.length > 0) {
					var node1 = nodes[0];
					var child = {id: 1900,children: [],name: 'test1'};
					if (node1) {
						node1.children.push(child);
					}
				}
				console.log(nodes[0]);
			},
			getCheckedKeys () {
				console.log("key:",this.$refs.treeMenu.getCheckedKeys(true));
			},
			selectAll () {
				// var _length = this.userMenus.length;
				var _length = 13;
				console.log("length: ",_length);
				var _selected = [];
				for (var i = 0; i < _length; ++i) {
					_selected.push(i + 1);
				}
				console.log(_selected);
				this.$refs.treeMenu.setCheckedKeys(_selected);
			},
			clear() {
				this.$refs.treeMenu.setCheckedKeys([]);
			}
		}
	}
</script>
<style type="text/css">
	#component-content .s-row:nth-child(1) {
		/*margin-top: 50px;*/
	}
	#component-content {
		padding: 20px;
	}
</style>