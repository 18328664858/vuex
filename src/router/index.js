import Vue from 'vue'
import Router from 'vue-router'
import Vuex from '@/components/Vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vuex',
      component: Vuex
    }
  ]
})
