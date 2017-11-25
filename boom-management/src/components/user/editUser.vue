<template>
	<div id="editUser">
		<el-dialog :visible.sync="openEditUserDialog"
				   title="编辑"
				   append-to-body>
			<div class="dialog-foot" slot="foot">
				<el-button type="primary" icon="el-icon-plus" @click="editSubmit">
					确定
				</el-button>
    			<el-button type="warning" @click="openEditUserDialog = false" icon="el-icon-close">
    				取消
    			</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'editUser',
		props: ['msg'],
		methods: {
			editSubmit: function() {

			}
		},
		computed: {
			openEditUserDialog: function () {
				return msg;
			}
		},
		data () {
			return {
				x: ''
			}
		}
	}
</script>
<style scoped lang="scss">
	
</style>