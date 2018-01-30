<!--
角色授权弹出框
-->
<template>
	<div id="component-role-authorize-dialog">
		<el-dialog
			:title="role.name + '角色授权'"
			:visible.sync="authorizeDialogVisible"
		>
			<el-tree
                :data="permissionTrees"
                :props="defaultProps"
                show-checkbox
                node-key="id"
                ref="permissionTrees"
                style="height:200px;overflow-y:auto;"
            />
			<div slot="footer" class="dialog-footer">
				<el-button @click="authorizeCancel">取消</el-button>
				<el-button type="primary" @click="authorizeSubmit">授权</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	import {permissionDao} from '@/db/permission'
	import {utils} from '@/utils/utils'
	import {httpStatus} from '@/constant/constant'
	export default {
		name: 'component-role-authorize-dialog',
		props: ['role'],
		created () {
			this.getPermissionTree();
		},
		data () {
			return {
				authorizeDialogVisible: false,
				//权限树
				permissionTrees: [],
				//树形控件默认使用treeNodes中的字段
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
			};
		},
		methods: {
			authorizeCancel () {
				this.authorizeDialogVisible = !this.authorizeDialogVisible;
			},
			authorizeSubmit () {
				// console.log('role:',this.role);
				this.authorizeDialogVisible = !this.authorizeDialogVisible;
				// let _checkedNodes = this.$refs.permissionTrees.getCheckedNodes();
				let _checkedKeys = this.$refs.permissionTrees.getCheckedKeys();
				// console.log('selected node:',_checkedNodes);
				// console.log('selected keys:',_checkedKeys);
				this.$emit('roleAuthorize',_checkedKeys);
			},
			getPermissionTree () {
				var _url = utils.authorize('/permission/lists_tree.json');
                permissionDao.getAllTreeNodes(_url).then(res => {
                    // console.log('res: ',res);
                    if (httpStatus.STATUS_OK === res.code) {
                        this.permissionTrees = res.data.children;
                    }
                });
			}
		}
	}
</script>