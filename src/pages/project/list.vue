<template>
    <cps-layout>
        <div class="search" slot="search">
          <i-form :model="search" :rule="rule">
            <Row>
              <i-col span="8">
                <Form-item prop="name">
                  <i-input type="text" :value.sync="search.name" placeholder="项目名"></i-input>
                </Form-item>
              </i-col>
            </Row>
            <Row type="flex" justify="end">
              <!-- <i-col span="4"><i-button type="primary" @click="handleSearch" icon="search">搜索</i-button></i-col> -->
              <!-- <i-col span="4"> -->
                <Button-group>
                  <i-button type="primary" @click="handleSearch" icon="search">搜索</i-button>
                  <i-button type="primary" @click="handleAdd" icon="plus-round">新增</i-button>
                </Button-group>
              <!-- </i-col> -->
            </Row>
          </i-form>
        </div>
        <i-table border :columns="columns" :data="data"></i-table>
        <Modal
          :value.sync="viewModal.status"
          ref="$view"
          title="新增项目"
          >
          <i-form :model="addModel" :rule="rule" :label-width="80">
            <Form-item label="项目名" prop="name">
              <i-input :value.sync="addModel.name" placeholder="请输入项目名"></i-input>
            </Form-item>
            <Form-item label="位置" prop="path">
              <i-button @click="wakeSelectFile" type="ghost" icon="folder">{{addModel.path || '请选择文件'}}</i-button>
              <input type="file" ref="file" :style="{display: 'none'}"  nwdirectory @change="selectFile" />
            </Form-item>
            <Form-item label="插件" prop="plugins">
                <i-select :model.sync="addModel.plugins" :value="addModel.plugins" multiple>
                  <i-option value="hot">热加载</i-option>
                  <i-option value="ug">压缩</i-option>
                </i-select>
            </Form-item>
            <Form-item label="端口" prop="port">
              <i-input :value.sync="addModel.port" placeholder="请输入端口"></i-input>
            </Form-item>
          </i-form>
        </Modal>
    </cps-layout>
</template>
<script>

export default {
  data () {
    let that = this
    return {
      search: {
        name: ''
      },
      addModel: {
        name: '',
        path: '',
        port: '',
        plugins: []
      },
      rule: {
        name: [{
          required: true,
          message: '项目名不能为空'
        }]
      },
      viewModal: {
        status: false
      },
      self: this,
      columns: [
        {
          title: '项目名',
          key: 'name'
        },
        {
          title: '类型',
          key: 'type'
        },
        {
          title: '是否启用',
          key: 'status',
          render (h, column) {
            // console.log({row, column, index})
            return h('span', '停用')
          }
        },
        {
          title: '位置',
          key: 'path'
        },
        {
          title: '访问地址',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          render () {
            // console.log(this)
            return [<i-button onClick={that.handleView.bind(this)} type="text" size="small">查看</i-button>, <i-button type="text" size="small">编辑</i-button>]
          }
        }
      ],
      data: [
        {
          'name': 'M站',
          'id': 1,
          'type': 1,
          'path': '/dev-center/MTUNIU',
          'address': '//127.0.0.1:5002',
          'status': 0
        }
      ]
    }
  },
  methods: {
    handleAdd () {
      this.$refs.$view.visible = true
    },
    selectFile (e) {
      // console.log(e, this.addModel)
      this.addModel.path = this.$refs.file.value
    },
    wakeSelectFile () {
      this.$refs.file.click()
    },
    handleSearch () {},
    handleView () {
      this.$refs.$view.visible = true
    }
  }
}
</script>
