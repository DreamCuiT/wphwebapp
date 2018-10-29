<template>
    <div>
      <child-milk-header></child-milk-header>
      <child-milk-content></child-milk-content>
      <child-milk-transpond></child-milk-transpond>
      <child-milk-detail></child-milk-detail>
    </div>
</template>

<script>
  import childMilkHeader from "../components/listpage/childMilkHeader"
  import childMilkContent from "../components/listpage/childMilkContent"
  import childMilkDetail from "../components/listpage/childMilkDetail"
  import childMilkTranspond from "../components/listpage/childMilkTranspond"
  export default {
        name: "WphListPage",
        components:{
          childMilkHeader,
          childMilkContent,
          childMilkDetail,
          childMilkTranspond
        }
    }
</script>

<style scoped>
</style>
