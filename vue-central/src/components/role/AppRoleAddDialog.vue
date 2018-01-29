<template>
	<div id="component-role-add-dialog">
		<!-- 角色信息添加模态框 -->
		<el-dialog title="角色添加" 
					:visible.sync="addRoleDialog">
			<el-form :model="role" ref="roleInfoForm" label-width="80px">
				<el-form-item label="角色" prop="name">
					<el-input v-model="role.name"/>
				</el-form-item>
				<el-form-item label="可用" prop="available">
    				<el-switch v-model="role.available"/>
  				</el-form-item>
				<el-form-item label="描述" prop="description">
					<el-input type="textarea" v-model="role.description"/>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addCancel">取 消</el-button>
				<el-button type="primary" @click="addRoleSubmit">添加</el-button>
			</div>
		</el-dialog>
		<!-- END角色信息添加模态框 -->
	</div>
</template>
<script type="text/javascript">
	import {utils} from '@/utils/utils'

	export default {
		name: 'component-role-add-dialog',
		data () {
			return {
				//角色编辑框默认关闭
				addRoleDialog: false,
				//角色信息
				role: {
					name: '',
					available: false,
					description: ''
				}
			};
		},
		methods: {
			addCancel () {
				this.addRoleDialog = !this.addRoleDialog;
				this.formReset('roleInfoForm');
			},
			addRoleSubmit () {
				var _role = utils.copy(this.role);
				_role.available = _role.available ? 1 : 0;
				// console.log('role dialog:',_role);
				//触发父组件中的addRoleSubmit事件
				this.$emit('addRole',_role);
				this.formReset('roleInfoForm');
				this.addRoleDialog = !this.addRoleDialog;
			},
			formReset(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>