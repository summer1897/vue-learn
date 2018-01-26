<template>
	<div id="component-login">
		<el-card>
			<div slot="header" class="clearfix">
				<span>登录框</span>
				<el-button style="float: right; padding: 3px 0" type="text">注册</el-button>
			</div>
			<el-form :model="loginForm" status-icon :rules="validateRules" ref="loginForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="userName">
					<el-input v-model="loginForm.userName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
					<el-button @click="resetForm('loginForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script type="text/javascript">
	import {loginDao} from '@/db/login'
	import store from '@/store/store'
	import {httpStatus} from '@/constant/constant'
	export default {
		name: 'component-login',
		data () {
	      var validateUserName = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入用户名'));
	        } else {
	          callback();
	        }
	      };
	      var validatePassword = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	        	// if (value.length < 6) {
	        	// 	callback(new Error('密码长度至少为六位'));
	        	// }
	          	callback();
	        }
	      };
	      return {
	      	loginForm: {
	      		userName: '',
	      		password: ''
	      	},
	      	validateRules: {
	      		userName: [
	      			{ validator: validateUserName, trigger: 'blur' }
	      		],
	      		password: [
	      			{ validator: validatePassword, trigger: 'blur' }
	      		]
	      	}
	      };
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						var _data = {
							"userName": this.loginForm.userName,
							"password": this.loginForm.password
						}
						// console.log('submit data is: ',_data);
						loginDao.login('/login.json',_data).then(res => {
							if (httpStatus.STATUS_OK == res.code) {
								store.commit('login',res.data);
								this.$message({
									message: '登录成功',
									type: 'success'
								});
								this.$router.push('/');
								console.log('login successfully!');
							} else {
								this.$message.error(res.msg);
								this.resetForm('loginForm');
							}
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
<style scoped>
	#component-login {
		padding: 50px;
		width: 60%;
		margin: auto;
	}
</style>