<template>
    <div>
      <h3 class="message">商品信息</h3>
      <img v-for="mes in particulars.message" :src="mes" alt="">
      <img :src="particulars.explain[0]" v-if="isshow" @click="show()" class="borderPic">
      <img :src="particulars.explain[1]" v-else="isshow" @click="hide()" class="borderPic">
      <img src="../../../static/img/particulars/returnShop.jpg">
      <h3 class="message">商品图片</h3>
      <img :src="img" v-for="img in particulars.shopImg">
    </div>
</template>

<script>
    export default {
        name: "WphParticularMessage",
      props:["particulars"],
      data(){
          return{
            isshow:true
          }
      },
      methods:{
        show(){
          this.isshow=false
        },
        hide(){
          this.isshow=true
        }
      }
    }
</script>

<style scoped>
  img{
    display: block;
    width: 100%;
  }
.message{
  font-size: .14rem;
  line-height: .54rem;
  border-top: 1px solid #cbcbcb;
  padding: 0 .1rem;
  font-weight: 400;
}
  .borderPic{
    border-top: 1px solid #cbcbcb;
    border-bottom: 1px solid #cbcbcb;
  }
</style>
