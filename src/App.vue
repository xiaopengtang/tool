<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <Menu active-key="1-2" theme="dark" width="auto" :open-keys="['1']" name="">
                    <div class="layout-logo-left">
                        <i-input :value="search" placeholder="请输入搜索条件"></i-input>
                    </div>
                    <Submenu key="1" name="">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            项目
                        </template>
                        <Menu-item name="1-1" key="1-1">
                          <router-link tag="div" :to="{name: 'project:index'}">项目列表</router-link>
                        </Menu-item>
                        
                    </Submenu>
                    <Submenu key="2" name="">
                        <template slot="title">
                            <Icon type="shuffle"></Icon>
                            MOCK
                        </template>
                        <Menu-item name="2-1" key="2-1">
                          <router-link tag="div" :to="{name: 'mock:index'}">服务器列表</router-link>
                        </Menu-item>
                        <Menu-item name="2-2" key="2-2">选项 2</Menu-item>
                        <Menu-item name="2-3" key="2-3">选项 3</Menu-item>
                    </Submenu>
                    <Submenu key="32" name="">
                        <template slot="title">
                            <Icon type="settings"></Icon>
                            设置
                        </template>
                        <Menu-item name="3-1" key="3-1">选项 1</Menu-item>
                        <Menu-item name="3-2" key="3-2">选项 2</Menu-item>
                        <Menu-item name="3-3" key="3-3">选项 3</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
              <router-view></router-view>
            </i-col>
            <!-- <i-col span="19">
                
            </i-col> -->
        </Row>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, body{
    height: 100%;
    width: 100%;
  }
  .layout{
    widows: 100%;
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    /* max-width: 300px; */
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    display: none;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .ivu-row-flex{
    height: 100%;
    width: 100%
  }

</style>
