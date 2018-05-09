<template>
  <div class="main-content">
      <div class="layout-header"></div>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">
                <Card :bordered="false" class="search">
                    <slot name="search"></slot>
                </Card>
                <slot class="table"></slot>
            </div>
        </div>
        <div class="layout-copy">
            2018 &copy; tool
        </div>
  </div>
</template>
<style scoped>
    .search {
        margin-bottom: 10px;
    }
</style>

