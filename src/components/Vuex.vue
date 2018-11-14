<template>
  <div class="hello">
    {{getPrice}}
    {{count}}
    {{getPrice}}

    <p>modules</p>
    <p>{{getMsg}} {{modA}} {{getModA}}</p>
    <p>{{modC}}</p>
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
      ...mapMutations(['updateCount']),

      //modules
      // ...mapMutations(["showMsg"]),
      ...mapMutations(["modA/showMsg"]),
      ...mapActions(['modA/updateMsg','modB/BUpdateMsg'])
    },
    mounted() {
      //this.$store.dispatch('updateCountAsync',{count: 25})
      this.updateCountAsync({
        count: 35
      })

      //modules
      // this.showMsg('modA')
      this['modA/showMsg']('modA')
      this['modA/updateMsg']()

      this['modB/BUpdateMsg']()
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
      //modules
      getMsg() {
        return this.$store.state.modA.msg
      },
      ...mapState({
        modA:(state) => state.modA.msg,
        modC: state => state.modC.msg
      }),
      ...mapGetters({
        getModA: 'modA/getModA'
      })
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
