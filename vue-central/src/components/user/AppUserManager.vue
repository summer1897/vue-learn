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
					<el-button
						type="warning"
						icon="el-icon-search"
						@click="searchUser"
					>搜索
					</el-button>
					<el-button
						type="success"
						icon="el-icon-plus"
						@click="addUserDialog=true"
					>添加
					</el-button>
	  				<el-button
	  					type="primary"
	  					icon="el-icon-edit"
						@click="editUser"
	  				>编辑
	  				</el-button>
	  				<el-button
	  					type="danger"
	  					icon="el-icon-delete"
						@click="deleteUser"
	  				>删除
	  				</el-button>
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

		<!-- 页面分页组件 -->
		<div class="s-row pull-right">
			<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="page.currentPage"
		      :page-sizes="page.pageSizes"
		      :page-size="page.pageSize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="page.total">
		    </el-pagination>
		</div>

		<!-- 信息模态框 -->
		<el-dialog title="添加用户" :visible.sync="addUserDialog">
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
				<el-button @click="addUserDialog = false">取 消</el-button>
				<el-button type="primary" @click="addUserSubmit">确 定</el-button>
			</div>
		</el-dialog>
		<!-- END信息模态框 -->
		<app-info-edit-dialog :info="info"
							  ref="userEditDialog"
							  v-on:editSubmit="editUserSubmit"
    />
	</div>
</template>
<script type="text/javascript">
	import {db} from '@/db/dao'
	import {utils} from '@/utils/utils'
	import AppInfoEditDialog from './AppInfoEditDialog'
	export default {
		name: 'component-user-manager',
		mounted () {
			this.userListsByPage();
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
					id: '',
					userName: '',
					nickName: '',
					password: '',
					sex: '',
					locked: '',
					phone: '',
					email: '',
					birthday: ''
					// roles: []
				},
				info: {},
				selectedItems: [],
				//分页配置
				page: {
					currentPage: 1,
					pageSize: 5,
					pageSizes: [5,10,20,30],
					total: null,
					request_url: '/user/lists_by_pagination.json'
				}
			}
		},
		methods: {
			handleSelectionChange(val) {
				this.selectedItems = val;
				// console.log('all selections: ',this.selectedItems);
			},
			sexFormatter (row,column,cellVal) {
				return this.getSexStr(cellVal);
			},
			getSexStr(val) {
				return 0 == val ? '男' : '女';
			},
			filterSexTag (value,row) {
				var _sex = this.getSexStr(row.sex);
				return _sex == value;
			},
			statusFormatter (row,column,cellVal) {
				return this.getStatusStr(cellVal);
			},
			getStatusStr(val) {
				var _labelName = '';
				if (0 == val) {
					_labelName = '未激活';
				} else if (1 == val) {
					_labelName = '正常';
				} else if (2 == val) {
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
					this.userListsByPage();
				} else {
					var _url = utils.authorize('/user/query_like_username.json/' +this.userSearch);
					db.get(_url).then(res => {
						this.userLists = res;
					});
				}
			},
			addUserSubmit () {
				/*
				* 添加用户信息提交
				*/
				var _url = utils.authorize('/user/add.json');
				console.log("user info",JSON.stringify(this.userInfo));
				// var _userInfo = JSON.parse(JSON.stringify(this.userInfo));
				db.post(_url,JSON.stringify(this.userInfo))
					.then(res => {
						if (1 == res.code) {
							this.$message({
			          			message: res.msg,
			          			type: 'success'
        					});
        					this.userListsByPage();
        					// this.userLists.push(_userInfo);
        					this.userFormReset('userInfoForm');
						} else {
							this.$message.error(res.msg);
						}
					}).catch(err => {
						console.log("error: ",err);
					});
				// console.log("user info:",this.userLists);
				this.addUserDialog = !this.addUserDialog;
			},
			editUser () {
				var _data = this.selectedItems;
				var _length = _data.length;
				if (_length <= 0) {
					this.$message({
			          message: '请选择要编辑的数据!',
			          type: 'warning'
        			});
				} else {
					this.$refs.userEditDialog.editUserDialog = true;
					this.info = JSON.parse(JSON.stringify(_data[0]));
					this.info.sex = this.getSexStr(this.info.sex);
					this.info.locked = this.getStatusStr(this.info.locked);
					this.editUserDialog = !this.editUserDialog;
					// console.log('user info',this.info);
				}
			},
			editUserSubmit (info) {
				console.log('submit info:',info);
			},
			getSelectionIds () {
				var _ids = [];
				this.selectedItems.forEach(row => {
					_ids.push(row.id);
				});
				return _ids;
			},
			deleteUser () {
				var _data = this.selectedItems;
				var _length = _data.length;
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
						//请求服务端删除操作
						var _ids = utils.concat('',',','',this.getSelectionIds());
						// console.log("_ids: ",_ids);
						var _url = utils.authorize('/user/delete_batch.json/' + _ids);
						console.log("delete url: ",_url);
						db.get(_url)
							   .then(res => {
							   		if (1 == res.code) {
							   			this.$message({
							   				type: 'success',
							   				message: res.msg
							   			});
							   			this.userListsByPage();
							   			this.selectedItems = [];
							   		} else {
							   			this.$message.error(res.msg);
							   		}
							   });
					}).catch(err => {
						console.log('cancel operation',err);
					});
				}
			},
			handleSizeChange(val) {
				this.page.pageSize = val;
				this.userListsByPage();
				// console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				this.page.currentPage = val;
				this.userListsByPage();
				console.log(`当前页: ${val}`);
			},
			userListsByPage() {
				var _url = utils.resolvePathParams(this.page.request_url,
											  this.page.currentPage,
											  this.page.pageSize);
				_url = utils.authorize(_url);
				db.get(_url).then(res => {
					this.page.total = parseInt(res.total);
					this.userLists = res.userLists;
				});
			},
			userFormReset(formName) {
				this.$refs[formName].resetFields();
			}
		},
		components: {
			AppInfoEditDialog
		}
	}
</script>
<style scoped>
	.highlight {
		background-color: green;
		color: white;
	}
</style>
