<template>
	<div id="component-role-edit-dialog">
		<!-- 信息编辑模态框 -->
		<el-dialog title="角色添加"
					:visible.sync="editRoleDialog">
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
				<el-button @click="editCancel">取消</el-button>
				<el-button type="primary" @click="addRoleSubmit">修改</el-button>
			</div>
		</el-dialog>
		<!-- END信息编辑模态框 -->
	</div>
</template>
<script type="text/javascript">
	import {utils} from '@/utils/utils'
	export default {
		name: 'component-role-edit-dialog',
		props: ['role'],
		data () {
			return {
				editRoleDialog: false,
			};
		},
		methods: {
			editCancel () {
				this.editRoleDialog = !this.editRoleDialog;
				this.formReset('roleInfoForm');
			},
			addRoleSubmit () {
				var _role = utils.copy(this.role);
				if (_role) {
					_role.available = _role.available ? 1:0;
					this.$emit('editRole',_role);
					this.editRoleDialog = !this.editRoleDialog;
					this.formReset('roleInfoForm');
				}

			},
			formReset (formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
