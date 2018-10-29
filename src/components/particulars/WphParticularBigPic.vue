<template>
  <div class="backBlack" @click="hideBox">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="pic in particulars.bannerPic">
          <img :src="pic">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  export default {
    props:["particulars","isshow"],
    methods:{
      newSwiper: function () {
        let myswiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        });
      },
      hideBox(){
          this.$emit('childByValue', false)
      }
    },
    mounted(){
      this.newSwiper()
    }
  }
</script>

<style scoped>
.backBlack{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}
  img{
    width: 100%;
  }
</style>
