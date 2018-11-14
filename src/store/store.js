import Vuex from 'vuex'
// import vue from 'vue'
// vue.use(Vuex)
// const store = new Vuex.Store({
//   state : {
//     count: 2
//   },
//   mutations: {
//     updateCount(state, count){
//       state.count = count
//     }
//   }
// })
// 服务端渲染 重新生成store 重复使用一个store 容易造成内存泄漏
// export default store

// export default () => {
//   return new Vuex.Store({
//     state : {
//       count: 2
//     },
//     mutations: {
//       updateCount(state, count){
//         state.count = count
//       }
//     }
//   })
// }
const isdev = process.env.NODE_ENV === 'development'

import defaultSate from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default () => {
  const store = new Vuex.Store({
    strict: isdev,
    state: defaultSate,
    mutations,
    getters,
    actions,
    modules: {
      modA: {
        namespaced: true,
        state: {
          msg:'this is A module'
        },
        mutations: {
          showMsg (state, msg) {
            state.msg = msg
          }
        },
        getters: {
          //rootState 全局的state
          getModA (state, getters, rootState){
            return state.msg + '+rootState:' + rootState.count + '+modB:' + rootState.modB.msg
          }
        },
        actions: {
          // root设置为true 调用全局mutation或者其他模块mutation
          updateMsg ({state, commit, rootState}) {
            //commit('updateCount',{count: 0},{root: true})
            commit('showMsg',rootState.testMsg)
          }
        }

      },
      modB: {
        namespaced: true,
        state: {
          msg:'this is B module'
        },
        mutations: {},
        getters: {},
        actions: {
          BUpdateMsg({state, commit, rootState}){
            commit('modA/showMsg','from b changes', {root: true})
          }
        }
      }
    }
  })
//vuex热重载
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ],() => {
      const newState = require('./state/state').default
      const newMutaTions = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutaTions,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
