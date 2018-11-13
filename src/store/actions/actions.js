export default {
  updateCountAsync(store, data){
    setTimeout(() => {
      store.commit('updateCount',{
        count: data.count
      })
    },1500)
  }
}
