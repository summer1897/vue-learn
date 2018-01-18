<template>
	<div id="component-user-manager">
		<div class="s-row s-padding-10">
			<el-row :gutter="10">
				<el-col :span="8">
					<el-input
						placeholder="请输入用户名"
						v-model="userSearch">
					</el-input>
				</el-col>
				<el-col :span="16">
					<!-- <el-button-group> -->
					<el-button 
						type="warning" 
						icon="el-icon-search"
						@click="searchUser"
					>
						搜索
					</el-button>
					<el-button 
						type="success"
						icon="el-icon-plus"
						@click="addUserDialog=true"
					>
						添加
					</el-button>
	  				<el-button 
	  					type="primary"
	  					icon="el-icon-edit"
						@click="editUserDialog =true"
	  				>
	  					编辑
	  				</el-button>
	  				<el-button 
	  					type="danger"
	  					icon="el-icon-delete"
						@click="deleteUser"
	  				>
	  					删除
	  				</el-button>
	  				<el-button 
	  					type="info"
	  					icon="el-icon-info"
						@click="addRoles"
	  				>
	  					添加角色
	  				</el-button>
					<!-- </el-button-group> -->
				</el-col>
			</el-row>
		</div>
		<div class="s-row">
			<el-table
				ref="multipleTable"
				:data="userLists"
				tooltip-effect="dark"
				style="width: 100%"
				@selection-change="handleSelectionChange"
				highlight-current-row
			>
				<el-table-column
					type="selection"
					:align="align"
					width="55">
				</el-table-column>
				<el-table-column
					:align="align"
					label="序号"
					type="index"
				>
				</el-table-column>
				<el-table-column
					label="用户名"
					:align="align"
					prop="userName">
				</el-table-column>
				<el-table-column
					prop="nickName"
					:align="align"
					label="昵称"
				>
				</el-table-column>
				<el-table-column
					prop="sex"
					label="性别"
					:align="align"
					:formatter="sexFormatter"
					:filters="[{text:'男',value: '男'},{text: '女',value: '女'}]"
					:filter-method="filterSexTag"
				>
					<template slot-scope="scope">
						<el-tag :type="scope.row.sex==0?'primary':'success'">
							{{scope.row.sex==0?'男':'女'}}
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column
					prop="phone"
					label="手机号码"
					:align="align"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					prop="email"
					label="邮箱"
					:align="align"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					prop="locked"
					label="状态"
					:align="align"
					:formatter="statusFormatter"
					:filters="[{text:'未激活',value: '未激活'},{text: '正常',value: '正常'},{text: '已禁用',value: '已禁用'}]"
					:filter-method="filterStatusTag"
				>
					<template slot-scope="scope">
						<el-tag v-if="0 == scope.row.locked" type="warning">
							未激活
						</el-tag>
						<el-tag v-if="1 == scope.row.locked" type="success">
							正常
						</el-tag>
						<el-tag v-if="2 == scope.row.locked" type="danger">
							已禁用
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column
					prop="birthday"
					label="出生日期"
					:align="align"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					prop="createDate"
					label="创建日期"
					:align="align"
					show-overflow-tooltip>
				</el-table-column>
			</el-table>
		</div>

		<!-- 信息模态框 -->
		<el-dialog title="添加用户" 
			:visible.sync="addUserDialog"
			>
			<el-form :model="userInfo" ref="userInfoForm" label-width="80px">
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
				<el-form-item label="性别" prop="sex">
					<el-select v-model="userInfo.sex" placeholder="请选性别">
						<el-option label="男" value="0"></el-option>
						<el-option label="女" value="1"></el-option>
					</el-select>
				</el-form-item>
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
					<el-date-picker type="date" placeholder="选择日期" v-model="userInfo.birthday" style="width: 100%;"></el-date-picker>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addUserDialog = false">取 消</el-button>
				<el-button type="primary" @click="addUserSubmit">确 定</el-button>
			</div>
		</el-dialog>
		<!-- END信息模态框 -->
	</div>
</template>
<script type="text/javascript">
	import {userDao} from '@/db/user'
	import {utils} from '@/utils/utils'
	export default {
		name: 'component-user-manager',
		mounted () {
			userDao.getUserList("/user/lists.json").then(res => {
				this.userLists = res;
			});
		},
		data () {
			return {
				userLists: [],
				align: 'center',
				userSearch: '',
				addUserDialog: false,
				editUserDialog: false,
				formLabelWidth: '120px',
				userInfo: {
					userName: '',
					nickName: '',
					password: '',
					sex: '',
					phone: '',
					email: '',
					birthday: ''
				},
				selectedItems: []
			}
		},
		methods: {
			handleSelectionChange(val) {
				this.selectedItems = val;
			},
			sexFormatter (row,column,cellVal) {
				// console.log("sex...",cellVal);
				var _sex = '';
				if (cellVal == 0) {
					_sex = '男';
				} else {
					_sex = '女';
				}
				return _sex;
			},
			filterSexTag (value,row) {
				var _sex = row.sex == 0 ? '男' : '女';
				return _sex == value;
			},
			statusFormatter (row,column,cellVal) {
				var _labelName = '';
				if (0 == cellVal) {
					_labelName = '未激活';
				} else if (1 == cellVal) {
					_labelName = '正常';
				} else if (2 == cellVal) {
					_labelName = '已禁用';
				}
				return _labelName;
			},
			filterStatusTag (value,row) {
				var _locked = row.locked;
				var _lockedLabel = '';
				if (0 == _locked) {
					_lockedLabel = '未激活';
				} else if (1 == _locked) {
					_lockedLabel = '正常';
				} else if (2 == _locked) {
					_lockedLabel = '已禁用';
				}
				return _lockedLabel == value;
			},
			searchUser () {
				/*
				* 用户名模糊查询
				*/
				if ('' == this.userSearch) {
					userDao.getUserList("/user/lists.json").then(res => {
						this.userLists = res;
					});
				} else {
					userDao.getLikeUserName("/user/query_like_username.json/" + this.userSearch).then(res => {
						this.userLists = res;
					});
				}
			},
			addUserSubmit () {
				/*
				* 添加用户信息提交
				*/
				// this.$refs.userInfoForm.resetFields();
				console.log("user info",JSON.stringify(this.userInfo));
				var _userInfo = this.userInfo;
				//格式化时间字符串
				utils.dateFormat(this.userInfo.birthday);
				userDao.addUser("/user/add.json",JSON.stringify(this.userInfo))
					.then(res => {
						if (1 == res.code) {
							this.$message({
			          			message: res.msg,
			          			type: 'success'
        					});
        					this.userLists.push(_userInfo);
        					this.$refs.userInfoForm.resetFields();
						} else {
							this.$message.error(res.msg);
						}
						// console.log(res);
					}).catch(err => {
						console.log("error: ",err);
					});
				this.$refs.multipleTable.doLayout();
				this.addUserDialog = !this.addUserDialog;
			},
			editUser () {

			},
			deleteUser (userId) {
				var _data = this.selectedItems;
				var _length = _data.length;
				console.log("delete number: ",_length);
				if (_length <= 0) {
					this.$message({
			          message: '请选择要删除的数据!',
			          type: 'warning'
        			});
				} else {
					this.$confirm('此操作将永久删除你选择的所有数据，是否继续?',
								  '提示',
								  {
									confirmButtonText: '确定',
									cancelButtonText: '取消',
									type: 'warning'
					}).then(() => {
						var _userLists = this.userLists;
						var _indexs = [];
						_userLists.forEach(row => {
							_indexs.push(row.id);
						});
						console.log("row id:",_indexs);
						for (var i = 0; i < _length; ++i) {
							var _item = _data[i];
							console.log("index: ",_userLists.indexOf(_item));
							_userLists.splice(_userLists.indexOf(_item),1);
						}
						this.selectedItems = [];
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					}).catch((err) => {
						console.log("error:",err);
						//取消操作回调函数
						this.$message({
							type: 'info',
							message: '取消操作'
						});
					});
				}
			},
			addRoles () {
				// this.dialogFormVisible = !this.dialogFormVisible;
			},
		}
	}
</script>
<style scoped>
	.highlight {
		background-color: green;
		color: white;
	}
</style>