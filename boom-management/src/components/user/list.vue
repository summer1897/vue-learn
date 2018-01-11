<template>
	<div class="s-user-list">
		<el-row>
			<el-col :span="24">
				<el-card>
					<div class="s-user-list-title">
						<!-- <h3>用户信息列表</h3> -->
						<el-form :inline="true" class="demo-form-inline">
							<el-form-item>
    							<el-input v-model="username" suffix-icon="el-icon-edit"  placeholder="姓名"/>
  							</el-form-item>
  							<el-form-item>
    							<el-button type="primary" 
    									   icon="el-icon-search"
    									   @click="queryByName">查询
    							</el-button>
    							<el-button @click="openUserDialog"
    									   type="success" 
    									   icon="el-icon-plus">添加
    							</el-button>
    							<el-button @click="removeSelected"
    									   type="danger"
    									   icon="el-icon-delete">删除
    							</el-button>
  							</el-form-item>
  						</el-form>
					</div>
					<div class="s-user-list-content">
						
						<el-table ref="multipleTable"
								  :data="filterUserInfos"
								  fit="fit"
								  tooltip-effect="dark"
								  max-height="500"
								  style="border:1px solid #efefef;border-bottom:0px;"
								  @selection-change="handleSelectionChange"
						>
							<el-table-column type="selection" 
											 align="center"
											 fixed
											 width="50" />
							<el-table-column label="Id"
											 prop="Id" 
											 align="center"
											 sortable
											 fixed="left"
											 width="50" />
							<el-table-column label="姓名"
											 prop="name"
											 align="center"
											 fixed="left" />
							<el-table-column label="年龄"
											 prop="age"
											 align="center"
											 sortable />
							<el-table-column label="性别"
											 prop="sex"
											 align="center"
											 :filters="[{text:'男',value:'男'},{text:'女',value:'女'}]"
											 :filter-method="filterSex"
											 filter-placement="bottom-end" />
							<el-table-column label="部门"
											 prop="department"
											 show-overflow-tooltip
											 align="center" />
							<el-table-column label="所属组"
											 prop="group"
											 align="center"
											 :filters="[{text:'开发一组',value:'开发一组'},{text:'开发二组',value:'开发二组'},{text:'开发三组',value:'开发三组'}]"
											 :filter-method="filterGroup"
											 filter-placement="bottom-end" />
							<el-table-column label="邮箱"
											 prop="email"
											 show-overflow-tooltip
											 align="center" />
							<el-table-column label="手机"
											 prop="phone"
											 show-overflow-tooltip
											 align="center"
											 sortable />
							<el-table-column label="qq"
											 prop="qq"
											 align="center"
											 sortable
											 show-overflow-tooltip />
							<el-table-column label="状态"
											 prop="status"
											 align="center"
											 :filters="[{text:'在线',value:'在线'},{text:'离线',value:'离线'}]"
											 :filter-method="filterStatus"
											 filter-placement="bottom-end">
								<template slot-scope="scope">
									<div slot="reference" 
										:class="scope.row.status === '在线' ? 's-online' : 's-outline'">
										{{ scope.row.status }}
									</div>
								</template>
							</el-table-column>
							<el-table-column label="操作"
											 align="center"
											 fixed="right"
											 width="100">
								<template slot-scope="scope">
									<el-button type="text" size="small">
          								查看
        							</el-button>
									<el-button 
										style="color:#EB9E05;" type="text" size="small"
										@click="openEdit(scope.$index)">
          								编辑
        							</el-button>
      							</template>
							</el-table-column>
						</el-table>
						<div class="s-pager">
						    <el-pagination
						      :current-page="currentPage"
						      :page-sizes="[100, 200, 300, 400]"
						      :page-size="100"
						      layout="total, sizes, prev, pager, next, jumper"
						      :total="400">
						    </el-pagination>
  						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<add-user ref="addUserDialog" v-on:add="addUser">
		</add-user>
		<!-- <edit-user :msg="openEditDialog"></edit-user> -->
		<edit-user ref="editdialogRef" :msg="userInfo"></edit-user>
	</div>
</template>
<script type="text/javascript">
	import AddUser from './addUser'
	import EditUser from './editUser'
	
	export default {
		computed: {
			filterUserInfos: function () {
				var _username = this.queryUserName;
				return this.userList.filter( data => {
					if (this.queryUserName == '') {
						return true;
					} else {
						return data.name.indexOf(_username) >= 0;
					}
				});
			}
		},
		methods: {
			//根据用户名查找用户
			queryByName: function () {
				this.queryUserName = this.username;
			},
			//性别筛选
			filterSex: function (value,row) {
				return row.sex == value;
			},
			//状态筛选
			filterStatus: function (value,row) {
				return row.status == value;
			},
			//所属组筛选
			filterGroup: function (value,row) {
				return row.group == value;
			},
			//打开模态框
			openUserDialog: function () {
				// console.log("open dialog");
				this.$refs.addUserDialog.openAddUserDialog = !this.openAddUserDialog;
				// this.openAddUserDialog = !this.openAddUserDialog;
			},
			openEdit: function (index) {
				console.log("index: ",index);
				this.userInfo = this.userList[index];
				this.$refs.editdialogRef.openEditUserDialog = true;
			},
			//添加用户
			addUser: function (user) {
				console.log("user info: ",user);
				var userInfo = JSON.stringify(user);
				// console.log("user json: ",JSON.parse(userInfo));
				this.userList.push(JSON.parse(userInfo));
				// this.userList.push(userInfo);
				this.$message({
          			message: '添加成功!',
          			type: 'success'
        		});
        		// this.$refs.addUserDialog.refs['userForm'].resetFields();
			},
			//移除单条数据
			removeItem: function (index) {
				this.$confirm('此操作将永久删除该数据，是否继续?','提示',{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					//确定删除数据回调函数
					this.userList.splice(index,1);
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					//取消操作回调函数
					this.$message({
						type: 'info',
						message: '取消操作'
					});
				});
			},
			//将所有选中的用户数据存放到multipleSelection数组中
			handleSelectionChange: function (selection) {
				this.multipleSelection = selection;
				// console.log("all selected items: ",this.multipleSelection);
			},
			//删除所有选中数据
			removeSelected: function () {
				//确定删除数据回调函数
				var _length = this.multipleSelection.length;
				if (_length > 0) {
					this.$confirm('此操作将永久删除你选择的所有数据，是否继续?',
								  '提示',
								  {
									confirmButtonText: '确定',
									cancelButtonText: '取消',
									type: 'warning'
					}).then(() => {
						for (var i = 0; i < _length; ++i) {
							var _data = this.multipleSelection[i];
							console.log("index: ",this.userList.indexOf(_data));
							this.userList.splice(this.userList.indexOf(_data),1);
						}
						this.multipleSelection = [];
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					}).catch(() => {
						//取消操作回调函数
						this.$message({
							type: 'info',
							message: '取消操作'
						});
					});
				} else {
					this.$message.warning('请选中待删除的数据!');
				}
			}
		},
		data () {
			return {
				currentPage: 1,
				openAddUserDialog: false,
				//是否打开编辑模态框
				openEditDialog: false,
				multipleSelection: [],
				username: '',
				queryUserName: '',
				userInfo: {},
				userList: [
					{
						Id: 1,
						name: '杜浩',
						age: 28,
						sex: '男',
						department: '地理信息中心',
						group: '开发一组',
						email: 'summer@sina.com',
						phone: '15268528314',
						qq: '406507191',
						status: '在线'
					},
					{
						Id: 2,
						name: 'solstice',
						age: 26,
						sex: '女',
						department: '地理信息中心',
						group: '开发二组',
						email: 'solstice@sina.com',
						phone: '13788904431',
						qq: '55770041',
						status: '离线'
					},
					{
						Id: 3,
						name: 'heaven',
						age: 32,
						sex: '男',
						department: '地理信息中心',
						group: '开发一组',
						email: 'heaven@sina.com',
						phone: '13595647704',
						qq: '334400512',
						status: '在线'
					},
					{
						Id: 4,
						name: 'sky',
						age: 33,
						sex: '女',
						department: '地理信息中心',
						group: '开发二组',
						email: 'sky@sina.com',
						phone: '13300416657',
						qq: '779055643',
						status: '离线'
					},
					{
						Id: 5,
						name: 'kitty',
						age: 29,
						sex: '女',
						department: '地理信息中心',
						group: '开发三组',
						email: 'kitty@sina.com',
						phone: '15277904433',
						qq: '88990042',
						status: '离线'
					},
					{
						Id: 6,
						name: '夏沫',
						age: 28,
						sex: '女',
						department: '地理信息中心',
						group: '开发三组',
						email: 'xiamo@sina.com',
						phone: '18883304808',
						qq: '450755931',
						status: '在线'
					},
					{
						Id: 7,
						name: '欧辰',
						age: 31,
						sex: '男',
						department: '地理信息中心',
						group: '开发一组',
						email: 'ouchen@sina.com',
						phone: '15271911343',
						qq: '406507190',
						status: '在线'
					}
				]
			}
		},
		components: {
			'add-user': AddUser,
			'edit-user': EditUser
		}
	}
</script>
<style scoped lang="scss">
	@import '../../styles/base';
	.s-online {
		color: $primary-color;
	}
	.s-outline {
		color: $info-color;
	}
	.s-pager {
		margin: 10px 0px 0px 0px;
		padding: 10px;
		text-align: right;
	}
</style>