<template>
  <div class="indexPage">
      <head-top></head-top>
      <div class="main" v-show="showSelect">
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img :src="imgArr[0]" alt="" class="big-img"></div>
                <div class="swiper-slide"><img :src="imgArr[1]" alt="" class="big-img"></div>
                <div class="swiper-slide"><img :src="imgArr[2]" alt="" class="big-img"></div>
            </div>
            <!-- 如果需要分页器 -->
           <div class="swiper-pagination"></div>
          </div>
         <wph-specialty-today></wph-specialty-today>
      </div>
      <wph-public-footer></wph-public-footer>
  </div>
</template>

<script>
//引入子组件
import WphSpecialtyToday from "../components/tao/WphSpecialtyToday"
import img from "../assets/imgs/big-img.jpg"
import headTop from "../components/public/WphPublicHeader"
import WphPublicFooter from "../components/public/WphPublicFooter"
import Swiper from 'swiper';

//slot
// let headTop = {
//   components:{
//    head
//   }
// }
// let headerContent = {
//   components:{
//     VphPublicContent
//   }
// }
export default {
  name: 'mypage',
  data(){
   return{
      img:img,
      imgArr:[img,img,img],
      showSelect:true
   }
  },
   methods:{
    swiperSlide(){
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  },
  mounted(){
      this.swiperSlide()
  },
  components:{
    //注册组件
    WphSpecialtyToday,
    headTop,
    WphPublicFooter
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

<style>
/* 全局css */
/*@import url( "../assets/css/mypage.css");*/
@import url("../assets/font/publicIconfont/iconfont.css");
@import url("../assets/css/swiper.css");
  .main{
    margin-top: 0.78rem;
  }
 .swiper-container .big-img{
    width:100%;
    height:1.5rem;
  }
  .swiper-pagination{
    text-align:right;
  }
  .swiper-pagination>span{
    vertical-align: bottom;
    background: rgba(94,98,114,.6);
    border: 1px solid hsla(0,0%,100%,1);
  }
   .swiper-pagination .swiper-pagination-bullet-active{
    background:#000;
    border:1px solid #fff;
  }
</style>
