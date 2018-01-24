<template>
	<div id="component-login">
		<el-card>
			<div slot="header" class="clearfix">
				<span>登录框</span>
				<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
			</div>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="userName">
					<el-input v-model="ruleForm2.userName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="年龄" prop="age">
					<el-input v-model.number="ruleForm2.age"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
					<el-button @click="resetForm('ruleForm2')">重置</el-button>
				</el-form-item>
			</el-form>
			<!-- <el-form :model="loginForm" status-icon :rules="validateRules" ref="loginForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="userName">
					<el-input v-model="loginForm.userName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
					<el-button @click="resetForm('loginForm')">重置</el-button>
				</el-form-item>
			</el-form> -->
		</el-card>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'component-login',
		data () {
			/*var validateUserName = (rule,value,callback) => {
				if ('' == value) {
					callback(new Error('请输入用户名'))
				} else {
					if ('' !== this.loginForm.userName) {
						console.log('user name validate');
						// this.$refs.loginForm.validateField('userName');
					} else {
						callback();
					}
					// callback();
				}
			};
			var validatePassword = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if ('' !== this.loginForm.password) {
						if (value.length < 6) {
							callback(new Error('密码长度至少为六位'));
						}
						this.$refs.loginForm.validateField('password');
					}
					callback();
				}
			};
			return {*/
				
				/*msg: 'This is a login page',
				token: '',
				loginForm: {
					userName: '',
					password: ''
				},
				validateRules: {
					userName: [
						{validator: validateUserName,trigger: 'blur'}
					],
					password: [
						{ validator: validatePassword, trigger: 'blur' }
					]
				}
			}*/
			var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          /*if (this.ruleForm2.userName !== '') {
            this.$refs.ruleForm2.validateField('userName');
          }*/
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          userName: '',
          password: '',
          age: ''
        },
        rules2: {
          userName: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
		},
		methods: {
			submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
			/*submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				console.log('reset');
				this.$refs[formName].resetFields();
			}*/
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