<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  watch:{
    $route(to,from){
      console.log(to.path)
      this.$store.state.path=to.path
    }
  },
  mounted(){

  },
  methods:{
  }
}
</script>

<style>
#app {
  height:100%;
  padding:0;
  margin:0;
}
</style>
