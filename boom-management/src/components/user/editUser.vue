<template>
	<div id="editUser" style="height: 400px;overflow-y:scroll;">
		<el-dialog :visible.sync="openEditUserDialog"
				   title="编辑"
				   append-to-body>
			<div class="dialog-foot" slot="footer">
				<el-button type="primary" icon="el-icon-plus" @click="editSubmit">
					确定
			<el-form ref="userForm" :model="userForm" label-width="80px">
				<el-form-item label="姓名">
					<el-input v-model="userForm.name" au-complete="off" value="msg.name" disabled/>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="userForm.age" :min="18" :max="120" label="年龄"/>
				</el-form-item>
				<el-form-item label="性别">
					<el-select v-model="userForm.sex" placeholder="请选择">
						<el-option v-for="item in sex" 
								   :key="item.value"
								   :label="item.label"
								   :value="item.value"/>
					</el-select>
				</el-form-item>
				<el-form-item label="部门">
					<el-select v-model="userForm.department" placeholder="请选择">
						<el-option v-for="department in departments" 
								   :key="department.value"
								   :label="department.label"
								   :value="department.value"/>
					</el-select>
				</el-form-item>
				<el-form-item label="所属组">
					<el-select v-model="userForm.group" placeholder="请选择">
						<el-option v-for="group in groups" 
								   :key="group.value"
								   :label="group.label"
								   :value="group.value"/>
					</el-select>
				</el-form-item>
				<el-form-item label="邮箱" 
							  :rules="[
	      					  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
	      					  { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
					<el-input v-model="userForm.email" au-complete="off"/>
				</el-form-item>
				<el-form-item label="手机">
					<el-input v-model="userForm.phone" au-complete="off"/>
				</el-form-item>
				<el-form-item label="QQ">
					<el-input v-model="userForm.qq" au-complete="off"/>
				</el-form-item>
			</el-form>
			<div class="dialog-foot" slot="footer">
				<el-button type="primary" icon="el-icon-plus" @click="editSubmit">确定
				</el-button>
    			<el-button type="warning" @click="openEditUserDialog = false" icon="el-icon-close">取消
    			</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'editUser',
		props: ['msg'],
		methods: {
			editSubmit: function() {
				console.log("router parameters: ",this.$route.params);
				console.log("msg: ",this.msg);
				console.log("edit user: ",this.msg);
			}
		},
		computed: {
			userForm: function () {
				return this.msg;
			}
		},
		data () {
			return {
				// openEditUserDialog: this.msg
				openEditUserDialog: false,
				sex: [
					{
						value: '男',
						label: '男'
					},
					{
						value: '女',
						label: '女'
					}
				],
				departments: [
					{
						value: '地理信息中心',
						label: '地理信息中心'
					},
					{
						value: '勘测部',
						label: '勘测部'
					},
					{
						value: '财务部',
						label: '财务部'
					},
					{
						value: '人资部',
						label: '人资部'
					}
				],
				groups: [
					{
						value: 'group1',
						label: '开发一组'
					},
					{
						value: 'group2',
						label: '开发二组'
					},
					{
						value: 'group3',
						label: '开发三组'
					}
				]
			}
		}
	}
</script>
<style scoped lang="scss">
	
</style>