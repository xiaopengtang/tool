// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import Components from './components'
import Vuex from 'vuex'
import * as storeData from './store'

// console.log(Components)
Object.keys(Components).forEach(n => {
  const name = `cps-${n}`
  Vue.component(name, Components[n])
})

Vue.config.productionTip = false

Vue.use(iview)
Vue.use(Vuex)

const store = new Vuex.Store(storeData)

// for auto update
import { checkUpdate } from '@/utils/update.js'
checkUpdate()
console.log(store)
// store.dispatch('cache/GET', 'id')
// store.dispatch('common/host/QUERY_HOST')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
