import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Update from '@/pages/Update'
import Help from '@/pages/help'
import Attendance from '@/pages/help/attendance'
import Project from '@/pages/project'
import ProjectView from '@/pages/project/view'
import ProjectList from '@/pages/project/list'

Vue.use(Router)

const Mock = resolve => require([], require => {
  resolve(require('@/pages/mock'))
})

const MockHost = resolve => require([], require => {
  resolve(require('@/pages/mock/host'))
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/mock',
      name: 'mock',
      component: Mock,
      children: [{
        path: '',
        name: 'mock:index',
        component: MockHost
      }]
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
      children: [{
        path: '',
        component: ProjectList,
        name: 'project:index'
      }, {
        path: 'view',
        component: ProjectView,
        name: 'project:view'
      }]
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
      children: [{
        path: '',
        name: 'Help:index',
        component: Attendance
      }]
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})
