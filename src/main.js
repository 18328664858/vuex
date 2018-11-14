// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)



import createstore from './store/store'
const store = createstore()
// import store from './store/store'
//动态注册模块
store.registerModule('modC', {
  state: {
    msg: 'this is CC'
  }
})
//监听state的变化
store.watch((state) => state.count, (newCount) =>{
  console.log(newCount)
})
//监听变化的mutation
store.subscribe((mutation, state) => {
  console.log(mutation)
})
//监听变化的action
store.subscribeAction((action, state) => {})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
