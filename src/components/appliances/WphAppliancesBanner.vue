<template>
  <div class="box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(i,index) in list" :key="index">
          <a href=""><img :src="i.pic" alt=""></a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
import Swiper from "swiper";
export default {
    name:"WphAppliancesBanner",
    props:["list"],
    methods:{
        newSwiper(){
          var myswiper = new Swiper('.swiper-container', {
              loop:true,
              pagination: {
                el: '.swiper-pagination',
                clickable :true
              }
          })
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
    height: 100%;
  }
  .swiper-slide img{
    width: 100%;
    height: 1.5rem;
  }
    .swiper-pagination{
      padding-left: 2.8rem;
    }
  .swiper-pagination span{
    background-color: black !important;
    float: left;
  }
  .box{
    margin-top: 0.78rem;
  }
</style>
