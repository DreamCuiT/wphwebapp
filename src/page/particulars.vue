<template>
  <div>
    <wph-particular-picbox :particulars="particularsList" v-on:childByValue="childByValue"></wph-particular-picbox>
    <wph-particular-information :particulars="particularsList" v-on:addresschange="addresschange" :address="addressdata"></wph-particular-information>
    <wph-particular-message :particulars="particularsList"></wph-particular-message>
    <wph-particular-add-carts :addscars="addcars" :particulars="particularsList.bannerPic"></wph-particular-add-carts>
    <wph-particular-gotop></wph-particular-gotop>
    <wph-particular-big-pic :particulars="particularsList" v-if="isshow" v-on:childByValue="childByValue"></wph-particular-big-pic>
    <wph-particular-address v-if="address" v-on:hide="hide" v-on:addresschange="addresschange" v-on:getaddress="getaddress" :area="areas"></wph-particular-address>
  </div>
</template>

<script>
  import WphParticularPicbox from "../components/particulars/WphParticularPicbox"
  import WphParticularInformation from "../components/particulars/WphParticularInformation"
  import WphParticularMessage from "../components/particulars/WphParticularMessage"
  import WphParticularBigPic from  "../components/particulars/WphParticularBigPic"
  import WphParticularAddCarts from  "../components/particulars/WphParticularAddCarts"
  import WphParticularGotop from  "../components/particulars/WphParticularGotop"
  import WphParticularAddress from  "../components/particulars/WphParticularAddress"
  import particulars from "../../static/particulars.json"
  import area from  "../../static/area.json"
    export default {
      name: "particulars",
      components:{
        WphParticularPicbox,
        WphParticularInformation,
        WphParticularMessage,
        WphParticularBigPic,
        WphParticularAddCarts,
        WphParticularGotop,
        WphParticularAddress
      },
      data(){
        return {
          particularsList:null,
          isshow: false,
          address:false,
          areas:[],
          addressdata:"填写收货地址",
          abcc:null
        }
      },
      mounted(){
        this.$store.dispatch("INCTIME")
      },
      methods:{
        childByValue: function (childValue) {
          this.isshow = childValue
        },
        addresschange: function (value) {
          this.address = value
        },
        getaddress: function (childValue) {
          // childValue就是子组件传过来的值
          this.addressdata = childValue
        },
        hide: function (value) {
          this.address = value
        },
        addcars(){
          console.log(2)
          let aa=this.particularsList
          let bb=[{
            goodsname:'',
            goodsshoppe:'',
            goodssize:'',
            goodsnumber:null,
            goodsoldprice:null,
            goodsnewprice:null
          }]
          bb[0].goodsname=aa.producyTitle
          bb[0].goodsshoppe=aa.shopName
          bb[0].goodssize=aa.fenlei
          bb[0].goodsnumber=1
          bb[0].goodsoldprice=parseFloat(aa.price)
          bb[0].goodsnewprice=parseFloat(aa.saleprice)
          bb[0].goodsimgs=aa.bannerPic[0]
          this.$store.dispatch("ADDCARSS",bb[0])
          this.$store.dispatch("INCTIME")
        }
      },
      created(){
        getParams : {
          let routerParams = this.$route.params.dataobj
          this.abcc = parseInt(routerParams)
        }
        this.particularsList=particulars[this.abcc];
        console.log(this.abcc)
        this.areas=area
        console.log(this.particularsList.price)
      }
    }
</script>

<style scoped>

</style>
