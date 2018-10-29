<template>
  <div>
    <wph-public-header></wph-public-header>
    <div v-show="showSelect">
      <wph-appliances-banner :list="bannerListData"></wph-appliances-banner>
      <wph-appliances-brand-show :show="brandShowList"></wph-appliances-brand-show>
      <wph-appliances-shop v-for="(shop,index) in shopPicList" :key="index" :shops="shop" :num="index"></wph-appliances-shop>
      <wph-appliances-activity :list="detailList" v-for="(detail,i) in detailList" :detail="detail" :key="i"></wph-appliances-activity>
    </div>
    <wph-public-footer></wph-public-footer>
  </div>
</template>

<script>
  import WphPublicFooter from "../components/public/WphPublicFooter"
  import WphPublicHeader from "../components/public/WphPublicHeader"
  import WphAppliancesBanner from "../components/appliances/WphAppliancesBanner.vue"
  import WphAppliancesBrandShow from "../components/appliances/WphAppliancesBrandShow.vue"
  import WphAppliancesShop from "../components/appliances/WphAppliancesShop.vue"
  import WphAppliancesActivity from "../components/appliances/WphAppliancesActivity.vue"
  import bannerList from "../../static/appliancesBanner.json"
  import brandShow from "../../static/brandShow.json"
  import shop from "../../static/shop.json"
  import appliancesDetail from "../../static/appliancesDetail.json"
  export default {
      name: "appliances",
      components:{
        WphAppliancesBanner,
        WphAppliancesBrandShow,
        WphAppliancesShop,
        WphAppliancesActivity,
        WphPublicFooter,
        WphPublicHeader
      },
      data(){
        return{
          bannerListData:[],
          brandShowList:[],
          shopPicList:[],
          detailList:[],
          showSelect:true
        }
      },
      methods:{
        _initData(url){
          this.bannerListData=bannerList
          this.brandShowList=brandShow
          this.shopPicList=shop
          this.detailList=appliancesDetail
        },
        togle() {
          this.$root.Bus.$on('showSelect', showSelect => {
            this.showSelect = showSelect
          })
        }
      },
      created(){
        this._initData()
      },
      mounted(){
        this.togle()
      }
    }
</script>

<style scoped>

</style>
