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
  return new Vuex.Store({
    strict: isdev,
    state: defaultSate,
    mutations,
    getters,
    actions
  })
}
