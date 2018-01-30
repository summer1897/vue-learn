<template>
    <div id="component-permission-manager">
        <!-- tool bar -->
        <!-- <div class="s-row s-padding-10">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-input
                placeholder="请输入权限名称"
                v-model="searchKey">
              </el-input>
            </el-col>
            <el-col :span="16">
              <el-button
                type="warning"
                icon="el-icon-search"
                @click="searchPermission"
              >搜索
              </el-button>
              <el-button
                type="success"
                icon="el-icon-plus"
                @click="addPermission"
              >添加
              </el-button>
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                @click="editPermission"
                >编辑
                </el-button>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                @click="deletePermission"
                >删除
                </el-button>
            </el-col>
          </el-row>
        </div> -->
        <!-- end tool bar -->

        <el-row>
            <el-col :span="8">
              <div class="s-row">
                <el-card class="box-card">
                    <div slot="header">
                        <span>菜单管理</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div style="max-height:400px;min-height:400px;;overflow-y:auto;">
                        <el-tree
                            :data="treeNodes"
                            :props="defaultProps"
                            show-checkbox
                            node-key="id"
                            :default-expanded-keys="[1,2,3,4]"
                         >
                        </el-tree>
                    </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="15" :offset="1">
                <div class="s-row">
                  <el-card class="box-card">
                      <div slot="header">
                          <span>
                            <i class="el-icon-info primary"></i>
                            资源信息
                          </span>
                          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                      </div>
                      <div style="max-height:400px;min-height:400px;;overflow-y:auto;">
                        <el-form ref="form" :model="form" label-width="80px">
                          <el-form-item label="父亲名称">
                            <el-input v-model="form.parentName"></el-input>
                          </el-form-item>
                          <el-form-item label="名称">
                            <el-input v-model="form.name"></el-input>
                          </el-form-item>
                          <el-form-item label="类型">
                            <el-select v-model="form.type" placeholder="请选择活动区域">
                              <el-option label="目录" value="1"></el-option>
                              <el-option label="菜单" value="2"></el-option>
                              <el-option label="按钮" value="3"></el-option>
                            </el-select>
                          </el-form-item>
                          <el-form-item label="可用">
                            <el-switch v-model="form.available"></el-switch>
                          </el-form-item>
                          <el-form-item label="活动性质">
                            <el-checkbox-group v-model="form.type">
                              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                              <el-checkbox label="地推活动" name="type"></el-checkbox>
                              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                            </el-checkbox-group>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary">立即创建</el-button>
                            <el-button>取消</el-button>
                          </el-form-item>
                        </el-form>
                      </div>
                  </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/javascript">
    import {permissionDao} from '@/db/permission'
    import {utils} from '@/utils/utils'
    import {httpStatus} from '@/constant/constant'

    export default {
        name: 'component-permission-manager',
        mounted () {
            this.fetchAllTreeNodes();
        },
        data() {
            return {
                form: {
                  name: '',
                  region: '',
                  date1: '',
                  date2: '',
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: ''
                },
                //搜索关键字
                searchKey: '',
                //树形节点
                treeNodes: [],
                //树形控件默认使用treeNodes中的字段
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                //默认展开节点
                defaultExpandNodes: [1]
            };
        },
        methods: {
            /*
             * tool bar click event
             */
            searchPermission() {

            },
            addPermission() {

            },
            editPermission() {

            },
            deletePermission() {

            },
            /*
            * Tree component methods
            */
            append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                  this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },
            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },
            renderContent(h, { node, data, store }) {
              // return (
              //     <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
              //       <span>
              //         <span>{node.label}</span>
              //       </span>
              //       <span>
              //         <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>Append</el-button>
              //         <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
              //       </span>
              //     </span>);
            },
            /*
            * common operation methods
            */
            fetchAllTreeNodes() {
                var _url = utils.authorize('/permission/lists_tree.json');
                permissionDao.getAllTreeNodes(_url).then(res => {
                    console.log('res: ',res);
                    if (httpStatus.STATUS_OK === res.code) {
                        this.treeNodes = res.data.children;
                    }
                });
            }
        }
    }
</script>
