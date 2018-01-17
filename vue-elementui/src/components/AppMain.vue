<template>
	<div class="component-main">
		<!-- <div class="s-row">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>网盘</el-breadcrumb-item>
			</el-breadcrumb>
		</div> -->
		<div class="s-row" style="padding-bottom: 0px;">
			<el-row>
				<el-col :span="2">
					<span class="s-title">全部文件</span>
				</el-col>
				<el-col :offset="18" :span="4">
					<span class="s-title">已全部加载，共{{fileAmount}}个</span>
				</el-col>
			</el-row>
		</div>
		<!-- operaton buttons -->
		<div class="s-row">
			<el-row :gutter="3">
				<el-col :md="14">
					<el-button type="primary">
						<i class="el-icon-upload"></i>
						上传
					</el-button>
					<el-button plain>
						<i class="el-icon-document"></i>
						新建文件夹
					</el-button>
					<el-button plain>
						<i class="el-icon-download"></i>
						离线下载
					</el-button>
					<el-dropdown>
						<el-button plain>
							<i class="el-icon-mobile-phone"></i>
							我的设备
						</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>推送任务列表</el-dropdown-item>
							<el-dropdown-item>添加设备</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>
				<el-col :offset="2" :md="4">
					<el-input
					placeholder="请输入内容"
					suffix-icon="el-icon-search"
					v-model="searchContent">
					</el-input>
				</el-col>
				<el-col :md="2" style="text-align:center;">
					<el-dropdown>
						<el-button type="success">
							<i class="el-icon-download"></i>
						</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>文件名</el-dropdown-item>
							<el-dropdown-item>大小</el-dropdown-item>
							<el-dropdown-item>修改日期</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>
				<el-col :md="2">
					<el-button type="primary" class="el-icon-menu"></el-button>
				</el-col>
		</el-row>
	</div>
	<!-- operation buttons end -->
	<!-- file list -->
	<div class="s-row" style="padding-top:0px;">
		<el-table
		    ref="multipleTable"
		    :data="fileInfos"
		    tooltip-effect="dark"
		    style="width:100%"
		    :fit="fit"
		    @cell-mouse-enter="showOperation"
		    @cell-mouse-leave="hideOperation"
		    @selection-change="handleSelectionChange">
		    <el-table-column
		      type="selection"
		      width="55">
		    </el-table-column>
		    <el-table-column
		      label="文件名"
		      prop="fileName"
		      show-overflow-tooltip
		      >
		      <template slot-scope="scope">
		      		<el-row>
		      			<el-col :span="6">
		      				{{scope.row.fileName}}
		      			</el-col>
		      			<el-col :offset="12" :span="6" 
		      			v-bind:class="{ 's-column-hide' : operation }">
		      				<i class="el-icon-share"></i>
							<i class="el-icon-download"></i>
							<el-dropdown>
							    <span class="el-dropdown-link">
							    	<i class="el-icon-more"></i>
							    </span>
							    <el-dropdown-menu slot="dropdown">
							      <el-dropdown-item class="s-drop">移动到</el-dropdown-item>
							      <el-dropdown-item class="s-drop">复制到</el-dropdown-item>
							      <el-dropdown-item class="s-drop">重命名</el-dropdown-item>
							      <el-dropdown-item class="s-drop">删除</el-dropdown-item>
							    </el-dropdown-menu>
							</el-dropdown>
		      			</el-col>
		      		</el-row>
		      	</template>
		    </el-table-column>
		    <el-table-column
		      prop="size"
		      label="大小"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="modifyDate"
		      label="修改日期"
		      >
		    </el-table-column>
  		</el-table>
	</div>
</div>
</template>
<script>
	// import {fileList} from '../db/db'
	import axios from 'axios'

	axios.defaults.baseURL = 'http://localhost:9000/boom'; 
	export default {
		name: 'component-main',
		mounted() {
			axios.get('/file/lists.json/1')
			 .then(response => {
			 	console.log(response);
			 }).catch(err => {
			 	console.log('request file list fail');
			 });
		},
		data () {
			return {
				fileAmount: 2,
				fileInfos: [{
					modifyDate: '2016-05-03',
					fileName: 'demo.rar',
					size: '1.6G'
				}, {
					modifyDate: '2016-05-02',
					fileName: 'demo.rar',
					size: '1.6G'
				}, {
					modifyDate: '2016-05-04',
					fileName: 'demo.rar',
					size: '1.6G'
				}, {
					modifyDate: '2016-05-01',
					fileName: 'demo.rar',
					size: '1.6G'
				}, {
					modifyDate: '2016-05-08',
					fileName: 'demo.rar',
					size: '1.6G'
				}, {
					modifyDate: '2016-05-06',
					fileName: 'demo.rar',
					size: '1.6G'
				}],
				multipleSelection: [],
				fit: true,
				searchContent: '',
				operation: true
			}
		},
		methods: {
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			showOperation(row, column, cell, event) {
				// alert("show");
				// console.log(event);
				this.operation = !this.operation;
			},
			hideOperation() {
				// alert('hidden');
				this.operation = !this.operation;
			}

		}
	}
</script>
<style type="text/css">
	.s-row {
		padding: 20px;
	}
	.s-row .s-title {
		font-family: "微软雅黑";
		font-size: 14px;
		color: gray;
	}
	.s-drop {
		font-family: "微软雅黑";
		font-size: 12px;
	}
	.s-column-hide {
		visibility: hidden;
	}
</style>