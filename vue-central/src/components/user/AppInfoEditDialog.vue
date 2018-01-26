<template>
	<div id="user-edit-dialog-component">
		<!-- 信息编辑模态框 -->
		<el-dialog title="用户信息" 
					:visible.sync="editUserDialog"
					@open="handlerOpen">
			<el-form :model="info" ref="userInfoForm" label-width="80px">
				<el-form-item label="用户名" prop="userName">
					<el-input v-model="info.userName" disabled></el-input>
				</el-form-item>
				<el-form-item label="昵称" prop="nickName">
					<el-input v-model="info.nickName" clearable></el-input>
				</el-form-item>
				<el-row>
					<el-col :span="12">
						<el-form-item label="性别" prop="sex">
							<el-select v-model="info.sex" placeholder="请选性别">
								<el-option label="男" value="0"></el-option>
								<el-option label="女" value="1"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="状态" prop="locked">
							<el-select v-model="info.locked" placeholder="请选状态">
								<el-option label="未激活" value="0"></el-option>
								<el-option label="正常" value="1"></el-option>
								<el-option label="已禁用" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item label="手机号码" prop="phone">
					<el-input 
						v-model="info.phone" 
						clearable
					/>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="info.email" clearable></el-input>
				</el-form-item>
				<el-form-item label="出生日期" prop="birthday">
					<el-date-picker 
						type="datetime" 
						placeholder="选择日期" 
						v-model="info.birthday"
						value-format="yyyy-MM-dd HH:mm:ss"
						clearable
						style="width:100%;"
					/>
				</el-form-item>
				<el-form-item label="用户角色" prop="roles">
					<el-tag v-for="(role,index) in userRoles" v-model="userRoles"
						closable
						@close="handleClose(role)"
						:key="role.id"
					>
						{{role.value}}
					</el-tag>
					<!-- <el-input
						class="input-new-tag"
						v-if="inputVisible"
						v-model="inputValue"
						ref="saveTagInput"
						size="small"
						@keyup.enter.native="handleInputConfirm"
						@blur="handleInputConfirm"
					>
					</el-input> -->
					<el-autocomplete
						class="input-new-tag"
						v-if="inputVisible"
						v-model="inputValue"
						ref="saveTagInput"
						size="small"
						@keyup.enter.native="handleInputConfirm"
						@blur="handleInputConfirm"
						:fetch-suggestions="querySearch"
						placeholder="请输入内容"
						@select="handleSelect"
					/>
					<el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加角色</el-button>
					</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="editCancel">取 消</el-button>
				<el-button type="primary" @click="editUserSubmit">修改</el-button>
			</div>
		</el-dialog>
		<!-- END信息编辑模态框 -->
	</div>
</template>
<script type="text/javascript">4
	import {utils} from '@/utils/utils'
	import {userDao} from '@/db/user'
	import {roleDao} from '@/db/role'
	import {httpStatus} from '@/constant/constant'

	export default {
		name: 'user-edit-dialog-component',
		props: ['info'],
		data () {
			return {
				editUserDialog: false,
				roles: [],
				userRoles: [],
				inputVisible: false,
				inputValue: '',
				
			};
		},
		methods: {
			handlerOpen() {
				this.queryUserRoles();
				this.queryAllRoles();
			},
			editUserSubmit () {
				this.$emit('editSubmit',this.info);
				this.editUserDialog = !this.editUserDialog;
			},
			editCancel () {
				this.resetForm('userInfoForm');
				this.editUserDialog = !this.editUserDialog;
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			queryUserRoles () {
				if (this.info) {
					var _userId = this.info.id;
					var _queryRolesUrl = utils.resolvePathParams('/user/query_user_roles.json',_userId);
					_queryRolesUrl = utils.authorize(_queryRolesUrl);
					userDao.getUserRoles(_queryRolesUrl).then(res => {
						//我编辑信息添加用户角色信息
						// console.log('roles:',res);
						this.userRoles = res.data;
					});
				}
			},
			queryAllRoles () {
				var _url = utils.authorize('/role/query_all_available.json');
				roleDao.getAllAvailableInfos(_url).then(res => {
					if (res.code == httpStatus.STATUS_OK) {
						var _roles = res.data;
						if (_roles.length > 0) {
							for (var i = 0; i < _roles.length; ++i) {
								var _role = {
									'value': _roles[i].name,
									'id': _roles[i].id
								};
								this.roles.push(_role);
							}
						}
					}
				});
			},
			handleClose(role) {
				this.userRoles.splice(this.userRoles.indexOf(role), 1);
			},
			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},
			handleInputConfirm() {
				/*let inputValue = this.inputValue;
				if (inputValue) {
					this.roles.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';*/
			},
			handleSelect(item) {
				console.log('add role is: ',item);
				this.userRoles.push(item);
				this.inputVisible = !this.inputVisible;
			},
			querySearch(queryString, cb) {
				console.log('suggest roles',this.roles);
				cb(this.roles);
	      	}
		}
	}
</script>
<style type="text/css">
	.el-tag + .el-tag {
		margin-left: 10px;
	}
	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
</style>