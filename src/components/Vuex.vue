<template>
  <div class="hello">
    {{getPrice}}
    {{count}}
    {{getPrice}}
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    data () {
      return {}
    },
    created() {
      console.log()
    },
    methods: {
      ...mapActions(['updateCountAsync']),
      ...mapMutations(['updateCount'])
    },
    mounted() {
      //this.$store.dispatch('updateCountAsync',{count: 25})
      this.updateCountAsync({
        count: 35
      })
    },
    computed: {
      // ...mapState({counts: 'count'}),
      ...mapState(['count']),
      ...mapGetters(['getPrice']),
      // ...mapGetters({
      //   getPrice: 'getPrice'
      // })
      // getPrice () {
      //   console.log(this.$store.getters.getPrice)
      //   return this.$store.getters.getPrice
      // }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
