<template>
	<div id="component-role-manager">
		<!-- tool bar -->
		<div class="s-row s-padding-10">
			<el-row :gutter="10">
				<el-col :span="8">
					<el-input
						placeholder="请输入角色名称"
						v-model="roleSearchName">
					</el-input>
				</el-col>
				<el-col :span="16">
					<el-button
						type="warning"
						icon="el-icon-search"
						@click="searchRole"
					>搜索
					</el-button>
					<el-button
						type="success"
						icon="el-icon-plus"
						@click="addRole"
					>添加
					</el-button>
	  				<el-button
	  					type="primary"
	  					icon="el-icon-edit"
						@click="editRole"
	  				>编辑
	  				</el-button>
	  				<el-button
	  					type="danger"
	  					icon="el-icon-delete"
						@click="deleteRole"
	  				>删除
	  				</el-button>
				</el-col>
			</el-row>
		</div>
		<!-- end tool bar -->
		<!-- role lists table -->
		<div class="s-row">
			<el-table
				ref="multipleTable"
				:data="roleLists"
				tooltip-effect="dark"
				style="width: 100%"
				@selection-change="handleSelectionChange"
				highlight-current-row
			>
				<el-table-column
					type="selection"
					:align="align"
					width="55"
				/>
				<el-table-column
					:align="align"
					label="序号"
					type="index"
				/>
				<el-table-column
					label="角色"
					:align="align"
					prop="name"
				/>
				<el-table-column
					label="状态"
					:align="align"
					prop="available"
					:filters="[{text:'正常',value: '正常'},{text: '禁用',value: '禁用'}]"
					:filter-method="filterStatusTag"
				>
					<template slot-scope="scope">
						<el-tag :type="scope.row.available==0?'danger':'success'">
							{{scope.row.available==0?'禁用':'可用'}}
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column
					label="描述"
					:align="align"
					prop="description"
					show-overflow-tooltip
				/>
				<el-table-column
					prop="createDate"
					label="创建日期"
					:align="align"
					show-overflow-tooltip
				/>
				<el-table-column
					label="操作"
					:align="align"
				>
					<template slot-scope="scope">
						<el-button
							type="text"
							size="mini"
							icon="el-icon-edit"
							@click="authorize(scope.row)"
						>授权
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!-- end role lists -->

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

		<!-- 角色添加弹出框 -->
		<app-role-add-dialog ref="roleAddDialog" v-on:addRole="addRoleSubmit" />
		<!-- 角色编辑弹出框 -->
		<app-role-edit-dialog
			ref="roleEditDialog"
			v-on:editRole="editRoleSubmit"
			:role="editRoleInfo"
		/>
		<!-- 角色授权框 -->
		<app-role-authorize-dialog
			ref="roleAuthorizeDialog"
			:role="authorizeRoleInfo"
			@roleAuthorize="roleAuthorizeSubmit"
		/>
	</div>
</template>
<script type="text/javascript">
	import AppRoleAddDialog from './AppRoleAddDialog'
	import AppRoleEditDialog from './AppRoleEditDialog'
	import AppRoleAuthorizeDialog from './AppRoleAuthorizeDialog'
	import {utils} from '@/utils/utils'
	import {db} from '@/db/dao'
	import {httpStatus} from '@/constant/constant'

	export default {
		name: 'component-role-manager',
		//页面加载的时候，默认分页加载数据
		mounted () {
			this.goToFirstPage();
		},
		data () {
			return {
				roleSearchName: '',
				//表头对齐方式
				align: 'center',
				//角色信息源
				roleLists: [],
				editRoleInfo: {},
				authorizeRoleInfo: {
					id: '',
					name: '',
			        //当前编辑角色权限Id
			        permissionIds: [],
				},
				selectedItems: [],
				//分页配置
				page: {
					currentPage: 1,
					pageSize: 5,
					pageSizes: [5,10,20,30],
					total: null,
					request_url: '/role/lists_by_page.json',
					search_url: '/role/query_by_name.json'
				}
			};
		},
		methods: {
			/*
			* table component
			*/
			statusFormatter (row,column,cellVal) {
				return this.getStatusStr(cellVal);
			},
			getStatusStr (val) {
				return val == 0 ? '禁用' : '正常';
			},
			filterStatusTag (value,row) {
				var _available = this.getStatusStr(row.available);
				return _available == value;
			},
			handleSelectionChange (val) {
				this.selectedItems = val;
			},
			searchRole () {
				/*
				* 角色模糊查询
				*/
				if (!this.roleSearchName) {
					this.goToFirstPage();
				} else {
					this.queryAllOrByName();
				}
			},
			addRole () {
				this.$refs.roleAddDialog.addRoleDialog = true;
			},
			addRoleSubmit (role) {
				var _url = utils.authorize('/role/add.json');
				console.log('add role: ',role);
				db.post(_url,role).then(res => {
					if (res && httpStatus.STATUS_OK == res.code) {
						this.$message({
        			message: res.msg,
        			type: 'success'
  					});
    					this.goToFirstPage();
					} else {
						this.$message.error(res.msg);
					}
				});
			},
			isSelected () {
				var _selected = this.selectedItems;
				var _selectedItem = [];
				if (_selected.length <= 0) {
					this.$message({
			          message: '请选择要删除的数据!',
			          type: 'warning'
        			});
				} else {
					_selectedItem = _selected;
				}
				return _selectedItem;
			},
			editRole () {
				let _selectedItem = this.isSelected();
				if (_selectedItem.length > 0) {
					this.editRoleInfo = utils.copy(_selectedItem[0]);
					this.editRoleInfo.available = this.editRoleInfo.available ? true:false;
					this.$refs.roleEditDialog.editRoleDialog = true;
				}
			},
			editRoleSubmit (role) {
				console.log('modify role info:',role);
				if (role) {
					this.$confirm('确定修改该角色信息?',
								  '提示',
								  {
									confirmButtonText: '确定',
									cancelButtonText: '取消',
									type: 'warning'
					}).then(() => {
						var _url = utils.authorize('/role/update.json');
						db.post(_url,role).then(res => {
							if (res.code === httpStatus.STATUS_OK) {
								this.$message({
					   				type: 'success',
					   				message: res.msg
								});
								this.goToFirstPage();
								this.selectedItems = [];
							} else {
								this.$message.error(res.msg);
							}
						});
					}).catch(err => {
						console.log('cancel');
					});
				}
			},
			deleteRole () {
				var _selectedItem = this.isSelected();
				if (_selectedItem.length > 0) {
					this.$confirm('此操作将永久删除你选择的所有数据，是否继续?',
								  '提示',
								  {
									confirmButtonText: '确定',
									cancelButtonText: '取消',
									type: 'warning'
						}).then(() => {
							var _ids = [];
							_selectedItem.forEach(row => {
								_ids.push(row.id);
							});
							var ids = utils.concat('',',','',_ids);
							var _url = utils.authorize('/role/delete_batch.json/' +ids);
							console.log('delete url:',_url);
							db.get(_url).then(res => {
								if (httpStatus.STATUS_OK == res.code) {
									this.$message({
						   				type: 'success',
						   				message: res.msg
									});
						   			this.goToFirstPage();
						   			this.selectedItems = [];
								} else {
									this.$message.error(res.msg);
								}
							});
						});
				}
			},
			/*
			* 角色授权
			*/
			authorize (_role) {
				// console.log('role id: ',_role);
				this.authorizeRoleInfo.id = _role.id;
				this.authorizeRoleInfo.name = _role.name;
		        //打开角色授权框
				this.$refs.roleAuthorizeDialog.authorizeDialogVisible = true;
			},
			roleAuthorizeSubmit (addingPids,deletingPids) {
				console.log('adding pids:',addingPids);
				console.log('deleting pids:',deletingPids);
        if (addingPids.length > 0 || deletingPids.length > 0) {
          let _addingPids = utils.concat('',',','',addingPids);
          let _deletingPids = utils.concat('',',','',deletingPids);
          if ('' === _addingPids) {
          	_addingPids = '-1';
          }
          if ('' === _deletingPids) {
          	_deletingPids = '-1';
          }
          //post请求数据封装
          let rolePermissionVo = {
            roleId: this.authorizeRoleInfo.id,
            addingPermissionIds: _addingPids,
            deletingPermissionIds: _deletingPids
          };
          let _url = utils.authorize('/role/authorization.json');
          console.log('url: ',_url);
          db.post(_url,rolePermissionVo).then(res => {
            if (httpStatus.STATUS_OK === res.code) {
              this.$message({
                message: '角色授权成功',
                type: 'success'
              });
            } else {
              this.$message.error(res.msg);
            }
          });
        } else if (0 === addingPids.length && 0 === deletingPids.length) {
          this.$message({
            message: '操作成功',
            type: 'success'
          });
        } else {
          this.$message.error('操作失败');
        }
      },
			/*
			* 分页插件
			*/
			handleSizeChange(val) {
				//更换当前显示数据量
				this.page.pageSize = val;
				this.queryAllOrByName();
			},
			handleCurrentChange (val) {
				//显示指定页数据
				this.page.currentPage = val;
				this.queryAllOrByName();
			},
			goToFirstPage () {
				this.page.currentPage = 1;
				this.roleListsByPage();
			},
			/*
			* 分页查询角色信息
			*/
			queryAllOrByName() {
				if (this.roleSearchName) {
					this.roleListsByNameAndPage();
				} else {
					this.roleListsByPage();
				}
			},
			roleListsByPage () {
				var _url = utils.resolvePathParams(this.page.request_url,
											  this.page.currentPage,
											  this.page.pageSize);
				_url = utils.authorize(_url);
				db.get(_url).then(res => {
					// console.log('res:',res);
					if (res && res.code == httpStatus.STATUS_OK) {
						var _data = res.data;
						this.page.total = parseInt(_data.total);
						this.roleLists = _data.roleLists;
					}
				});
			},
			roleListsByNameAndPage () {
				var _url = utils.resolvePathParams(this.page.search_url,
													   this.roleSearchName,
													   this.page.currentPage,
													   this.page.pageSize);
				_url = utils.authorize(_url);
				db.get(_url).then(res => {
					if (res.code == httpStatus.STATUS_OK) {
						// console.log('query role info:',res);
						this.page.total = parseInt(res.data.total);
						// this.handleSizeChange(this.page.total);
						this.roleLists = res.data.roleLists;
					}
				});
			}
		},
		components: {
			AppRoleAddDialog,AppRoleEditDialog,AppRoleAuthorizeDialog
		}
	}
</script>
