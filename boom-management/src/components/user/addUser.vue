<template>
	<el-dialog title="添加用户" 
				:visible.sync="openAddUserDialog" 
				append-to-body="true">
		<el-form ref="userForm" :model="userForm" label-width="80px">
			<el-form-item label="Id">
				<el-input v-model="userForm.Id" au-complete="off"/>
			</el-form-item>
			<el-form-item label="姓名">
				<el-input v-model="userForm.name" au-complete="off"/>
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
		<div slot="footer" class="dialog-footer">
			<el-button type="primary" icon="el-icon-plus" @click="addSubmit">
				添加
			</el-button>
    		<el-button type="warning" @click="openAddUserDialog = false" icon="el-icon-close">取消</el-button>
		</div>
	</el-dialog>
</template>
<style scoped lang="scss">
</style>
<script type="text/javascript">
	export default {
		methods: {
			addSubmit: function () {
				// console.log(this.form);
				this.$emit('add',this.form);
				this.openAddUserDialog = false;
				this.$message({
          			message: '添加成功!',
          			type: 'success'
        		});
        		console.log("form refs: ",this.$refs['userForm'])
        		this.$refs['userForm'].resetFields();
			}
		},
		data ()  {
			return {
				openAddUserDialog: false,
				userForm: {
					Id: '',
					name: '',
					age: '',
					sex: '',
					department: '',
					group: '',
					email: '',
					phone: '',
					qq: '',
					status: ''
				},
				sex: [
					{
						value: 'male',
						label: '男'
					},
					{
						value: 'female',
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