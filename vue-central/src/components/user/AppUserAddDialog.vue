<template>
  <div id="component-add-user-dialog">
    <el-dialog title="添加用户" :visible.sync="addUserDialog" @open="dialogOpen">
			<el-form
        :model="userInfo"
        ref="userInfoForm"
        :rules="userValidateRules"
        label-width="80px"
        status-icon
      >
				<el-form-item label="用户名" prop="userName">
					<el-input v-model="userInfo.userName" clearable></el-input>
				</el-form-item>
				<el-form-item label="昵称" prop="nickName">
					<el-input v-model="userInfo.nickName" clearable></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input
						type="password"
						v-model="userInfo.password"
						clearable
					/>
				</el-form-item>
				<el-row>
					<el-col :span="12">
						<el-form-item label="性别" prop="sex">
							<el-select v-model="userInfo.sex" placeholder="请选性别">
								<el-option label="男" value="0"></el-option>
								<el-option label="女" value="1"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="状态" prop="locked">
							<el-select v-model="userInfo.locked" placeholder="请选状态">
								<el-option label="未激活" value="0"></el-option>
								<el-option label="正常" value="1"></el-option>
								<el-option label="已禁用" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item label="手机号码" prop="phone">
					<el-input
						v-model="userInfo.phone"
						clearable
					/>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="userInfo.email" clearable></el-input>
				</el-form-item>
				<el-form-item label="出生日期" prop="birthday">
					<el-date-picker
						type="datetime"
						placeholder="选择日期"
						v-model="userInfo.birthday"
						value-format="yyyy-MM-dd HH:mm:ss"
						clearable
						style="width:100%;"
					/>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addCancel">取 消</el-button>
				<el-button type="primary" @click="addUserSubmit">确 定</el-button>
			</div>
		</el-dialog>
  </div>
</template>
<script type="text/javascript">
  import {userValidate} from './validate'
  import {utils} from '@/utils/utils'

  export default {
    name: 'component-add-user-dialog',
    data () {
      return {
        addUserDialog: false,
        userInfo: {
          id: '',
					userName: '',
					nickName: '',
					password: '',
					sex: '',
					locked: '',
					phone: '',
					email: '',
					birthday: ''
        },
        userValidateRules: {}
      };
    },
    methods: {
      dialogOpen() {
        this.userValidateRules = userValidate.userValidateRules;
        // console.log('validate rules:',userValidate.userValidateRules);
      },
      addCancel() {
        this.destroy();
      },
      addUserSubmit() {
        this.$refs.userInfoForm.validate(valid => {
          if (valid) {
            var _userInfo = utils.copy(this.userInfo);
            this.$emit('userAdd',_userInfo);
            this.destroy();
          } else {
            console.log('submit error');
          }
        });
      },
      formReset(formName) {
        this.$refs[formName].resetFields();
      },
      destroy() {
        this.formReset('userInfoForm');
        this.addUserDialog = !this.addUserDialog;
      }
    }
  }
</script>
