<!--
角色授权弹出框
author:summer
角色授权思路：整个授权过程，是在原🈶️权限id(permissionIds)基础上，获取到这次操作，
新添加的权限Id，以及找出删除掉的权限Id，然后在后台，对角色与权限关联
表进行一次插入与删除的原子操作。
-->
<template>
	<div id="component-role-authorize-dialog">
		<el-dialog
			:title="role.name + '角色授权'"
			:visible.sync="authorizeDialogVisible"
      @open="initAuthorizeDialog"
		>
			<el-tree
        :data="permissionTrees"
        :props="defaultProps"
        :default-expanded-keys="defaultExpandKeys"
        show-checkbox
        check-strictly
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
	import {db} from '@/db/dao'
	import {utils} from '@/utils/utils'
	import {httpStatus} from '@/constant/constant'
	export default {
		name: 'component-role-authorize-dialog',
		props: ['role'],
		created () {
		},
		data () {
			return {
				authorizeDialogVisible: false,
				//权限树
				permissionTrees: [],
				//角色权限Id
				permissionIds: [],
				//树形控件默认使用treeNodes中的字段
        defaultProps: {
            children: 'children',
            label: 'name'
        },
        //默认展开节点keys
        defaultExpandKeys: []
			};
		},
		methods: {
	      /*
	      * 模态框打开事件处理
	      */
	      initAuthorizeDialog () {
	        //获取权限信息，并构建权限树
	        this.getPermissionTree();
	        //勾选当前角色具有的权限
	        this.setRolePermission();
	      },
			authorizeCancel () {
				this.destory();
			},
			authorizeSubmit () {
				let _checkedKeys = this.$refs.permissionTrees.getCheckedKeys();
				console.log('selected pids:',_checkedKeys);
				let _addingPids = this.getAddingPermissionIds(_checkedKeys);
				let _deletingPids = this.getDeletingPermissionIds(_checkedKeys);
				// console.log('selected keys:',_checkedKeys);
				console.log('origin pids:',this.permissionIds);
				this.$emit('roleAuthorize',_addingPids,_deletingPids);
    		this.destory();
			},
			/*
			* 找出相对于permissionIds中新添加的权限id,
			* 即筛选出permissionId中没有的权限id
			*/
			getAddingPermissionIds (_checkedKeys) {
				let addingPermissionIds = [];
				if (_checkedKeys.length > 0) {
					let pid = _checkedKeys.filter(el => {
						return this.permissionIds.indexOf(el) < 0;
					});
					// console.log('filter adding pids:',pid);
					addingPermissionIds.push(...pid);
				}
				return addingPermissionIds;
			},
			/*
			* 获取相对应permissionIds数组中，要删除的权限id
			*/
			getDeletingPermissionIds (_checkedKeys) {
				//原先具有的权限id
				let _originPermissionIds = this.permissionIds;
				let _pidHasBefore = [];
				let _deletingPermissionIds = [];
				//筛选出_checkedKey(这次选中)，且原permissionIds中
				//也有的权限id
				if (_checkedKeys.length > 0) {
					let pid = _checkedKeys.filter(pid => {
						return this.permissionIds.indexOf(pid) >= 0;
					});
					_pidHasBefore.push(...pid);
				}

				/*
				* _originPermissionIds减去_pidHasBefore就等于，
				* 这次要删除的权限
				*/
				if (_pidHasBefore.length > 0) {
					let pid = _originPermissionIds.filter(pid => {
						return _pidHasBefore.indexOf(pid) < 0;
					});
					_deletingPermissionIds.push(...pid);
				}

				return _deletingPermissionIds;
			},
	    setRolePermission () {
	        let _url = utils.authorize('/role/permission_ids.json/' + this.role.id);
	        db.get(_url).then(res => {
	          if (httpStatus.STATUS_OK === res.code) {
	            console.log('dao:permission id: ',res.data);
	            this.permissionIds = res.data;
	            if (res.data.length > 0) {
	        		this.$refs.permissionTrees.setCheckedKeys(res.data);
              this.defaultExpandKeys.push(...res.data);
	        	}
	          } else {
	          	this.$message.error('加载' + this.role.name + '权限信息失败');
	          }
	        });
	    },
			getPermissionTree () {
				let _url = utils.authorize('/permission/lists_tree.json');
        db.get(_url).then(res => {
            // console.log('res: ',res);
            if (httpStatus.STATUS_OK === res.code) {
                this.permissionTrees = res.data.children;
            }
        });
			},
      destory () {
        this.$refs.permissionTrees.setCheckedKeys([]);
        this.defaultExpandKeys = [];
    		this.authorizeDialogVisible = !this.authorizeDialogVisible;
      }
		}
	}
</script>
