<template>
  <div>
    <wph-public-header></wph-public-header>
    <div v-show="showSelect">
      <child-banner></child-banner>
      <child-title-lis></child-title-lis>
      <child-sub-content></child-sub-content>
    </div>
    <wph-public-footer></wph-public-footer>
  </div>

</template>

<script>
  import WphPublicHeader from "../components/public/WphPublicHeader"
  import childBanner from "../components/fransnana/childBanner"
  import childSubContent from "../components/fransnana/childSubContent"
  import childTitleLis from "../components/fransnana/childTitleLis"
  import  WphPublicFooter from "../components/public/WphPublicFooter"
  export default {
        name: "WphFransnana",
        components:{
          childBanner,
          childSubContent,
          childTitleLis,
          WphPublicHeader,
          WphPublicFooter
        },
        data(){
          return{
            showSelect:true
          }
        },
        methods:{
          togle() {
            this.$root.Bus.$on('showSelect', showSelect => {
              this.showSelect = showSelect
            })
          }
        },
        mounted(){
          this.togle()
        }
    }
</script>

<style scoped>

</style>
