<template>
  <div>
        <router-view></router-view>
        <wph-search></wph-search>
  </div>
</template>

<script>
import WphSearch from "../components/tao/WphGoodsSearch.vue"

export default {
  name:"goodsSearch",
  components:{
     WphSearch
  }
}
</script>

<style>

</style>
