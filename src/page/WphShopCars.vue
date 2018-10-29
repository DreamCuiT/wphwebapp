<template>
  <div>
    <wph-shop-cars-header :timeshow="timeshow" v-on:givefather="titleshow"></wph-shop-cars-header>
    <wph-shop-cars-list v-on:listen="sonnum" :tm="totalMoney" :list="goodsList" :add="addqal" :sub="subqal" :almoney="tptalMoneyss"></wph-shop-cars-list>
    <wph-shop-cars-footer :dc="discounts" :rtm="reallyMoney" :tm="totalMoney"></wph-shop-cars-footer>
  </div>
</template>

<script>
  import WphShopCarsHeader from "../components/shopcar/WphShopCarsHeader"
  import WphShopCarsList from "../components/shopcar/WphShopCarsList"
  import WphShopCarsFooter from "../components/shopcar/WphShopCarsFooter"
    export default {
        name: "WphShopCars",
       components:{
         WphShopCarsHeader,
         WphShopCarsList,
         WphShopCarsFooter
       },
      data(){
          return{
            discounts:5,
            totalMoney:0,
            reallyMoney:0,
            goodsList:this.$store.state.carshop,
            timeshow:false
          }
      },
      created(){
      },
      mounted(){
        this.tptalMoneyss(this.goodsList)
        this.rellytotalMoney()
        this.titleshow()
      },
      methods:{
        addqal(i){
            this.goodsList[i].goodsnumber++
            this.totalMoney+=this.goodsList[i].goodsnewprice
            this.rellytotalMoney()
        },
        subqal(i){
          if(this.goodsList[i].goodsnumber<=1){
            this.goodsList[i].goodsnumber=1
          }else{
            this.goodsList[i].goodsnumber--
            this.totalMoney-=this.goodsList[i].goodsnewprice
            this.rellytotalMoney()
          }
        },
        tptalMoneyss(goodsList){
          this.tptalMoney=0
          goodsList.forEach((item,index)=>{
            this.totalMoney+=item.goodsnumber*item.goodsnewprice
          })
        },
        rellytotalMoney(){
          this.reallyMoney=this.totalMoney-this.discounts
          if(this.reallyMoney<0){
            this.reallyMoney=0
          }
        }
        ,sonnum(i){
          this.goodsList.splice(i,1)
          this.totalMoney=0
          this.reallyMoney=0
          this.tptalMoneyss(this.goodsList)
          this.rellytotalMoney()
          this.titleshow()
        },
        titleshow(){
          if(this.$store.state.carshop.length==0){
            this.timeshow=false
            console.log(11)
          }else if(this.$store.state.carshop.length>0){
            this.timeshow=true
            console.log(22)
          }
        }
      }
    }
</script>

<style scoped>

</style>
