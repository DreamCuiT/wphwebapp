<template>
  <div>
    <div class="swiper-container" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="pic in particulars.bannerPic" @click="showBox">
          <img :src="pic" >
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="back" @click="goback"></div>
    <div class="countTime">剩<span>2</span>天<span>13</span>时</div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  export default {
    name:"WphParticularPicbox",
    props:["particulars"],
    methods:{
      newSwiper(){
        var myswiper2 = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
            observer:true,
            grabCursor: true,
          }
        })
      },
      showBox(){
        this.$emit('childByValue', true)
      },
      goback(){
        this.$router.go(-1)
      }
    },
    mounted(){
      this.newSwiper()
    }
  }
</script>

<style scoped>
  .swiper-container{
    width: 100%;
  }
  .swiper-slide img{
    width: 100%;
    height: 3.75rem;
  }
  .swiper-pagination span{
    background: black;
    border: 1px solid #fff;
    width: 5px;
    height: 5px;
  }
  .back{
    width: .42rem;
    height: .42rem;
    border-radius: 50%;
    z-index: 100;
    position: absolute;
    top: .1rem;
    left: .1rem;
    background:rgba(0,0,0,.5) url("../../../static/img/particulars/back_icon.jpg") no-repeat 50%;
  }
  .countTime{
    width: .74rem;
    height: .24rem;
    background: rgba(0,0,0,.5);
    border-top-left-radius: .12rem;
    border-bottom-left-radius: .12rem;
    z-index: 100;
    position: absolute;
    top: .1rem;
    right: 0rem;
    font-size: .14rem;
    color: white;
    line-height: .24rem;
    text-align: center;
  }
</style>
