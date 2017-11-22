<template>
	<div class="s-user-list">
		<el-row class="">
			<el-col :span="24">
				<el-card>
					<div class="s-user-list-title">
						<h3>用户信息列表</h3>
					</div>
					<div class="s-user-list-content">
						<el-table ref="multipleTable"
								  :data="userList"
								  fit="true"
								  tooltip-effect="dark"
								  @selection-change="selectionChange" style="border:1px solid #efefef;width:100%;border-bottom:0px;">
							<el-table-column type="selection"/>
							<el-table-column label="Id"
											 prop="Id"/>
							<el-table-column label="姓名"
											 prop="name"/>
							<el-table-column label="年龄"
											 prop="age"/>
							<el-table-column label="性别"
											 prop="sex"/>
							<el-table-column label="部门"
											 prop="department"/>
							<el-table-column label="所属组"
											 prop="group"/>
							<el-table-column label="邮箱"
											 prop="email"/>
							<el-table-column label="手机"
											 prop="phone"/>
							<el-table-column label="qq"
											 prop="qq"/>
							<el-table-column label="状态"
											 prop="status"/>
							<el-table-column label="操作">
								<template slot-scope="scope">
        							<span>编辑</span>
        							<span>删除</span>
      							</template>
							</el-table-column>
						</el-table>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
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
					}
				]
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../styles/base';
</style>