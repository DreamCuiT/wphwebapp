<template>
    <div v-show="showSelect">
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../../static/img/fashion/15393365440727.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="search">
        <img src="../../../static/img/fashion/15329483844014.gif" alt="">
        <img src="../../../static/img/fashion/15329484566024.gif" alt="">
      </div>
      <div class="nav">
        <router-link :to="{path:'###'}"><img src="../../../static/img/fashion/15367451119905.jpg" alt=""></router-link>
        <router-link :to="{path:'###'}"><img src="../../../static/img/fashion/15393100794265.gif" alt=""></router-link>
        <router-link :to="{path:'###'}"><img src="../../../static/img/fashion/15393100958888.gif" alt=""></router-link>
        <router-link :to="{path:'###'}"><img src="../../../static/img/fashion/15357029136455.jpg" alt=""></router-link>
        <router-link :to="{path:'###'}"><img src="../../../static/img/fashion/15367451893071.jpg" alt=""></router-link>
        <router-link :to="{path:'###'}"><img src="../../../static/img/fashion/15367451634178.jpg" alt=""></router-link>
        <router-link :to="{path:'###'}"><img src="../../../static/img/fashion/15367442884761.jpg" alt=""></router-link>
        <router-link :to="{path:'###'}"><img src="../../../static/img/fashion/15356239363957.gif" alt=""></router-link>
      </div>
      <div class="imgTitle">
        <img src="../../../static/img/fashion/15352006498690.jpg" alt="">
      </div>
      <div class="topShopImg">
        <router-link :to="{path:'###'}">
          <img src="../../../static/img/fashion/15393340264688.jpg" alt="">
        </router-link>
        <div  class="inSeasonTwo">
          <router-link :to="{path:'###'}">
            <img src="../../../static/img/fashion/15395979988437.jpg" alt="">
            <img src="../../../static/img/fashion/15395965961020.jpg" alt="">
          </router-link>
        </div>
      </div>
      <div class="imgTitle">
        <img src="../../../static/img/fashion/15351233521341.jpg" alt="">
      </div>
      <div class="topShopImg hot">
        <router-link :to="{path:'###'}">
          <img src="../../../static/img/fashion/15391653151307.gif" alt="">
        </router-link>
      </div>
      <div class="imgTitle">
        <img src="../../../static/img/fashion/15395990490969.jpg" alt="/">
      </div>
      <div class="topShopImg">
        <router-link :to="{path:'###'}">
          <img src="../../../static/img/fashion/15393504125780.jpg" alt="">
        </router-link>
      </div>
      <div class="imgTitle">
        <img src="../../../static/img/fashion/15351674713152.jpg" alt="">
      </div>
      <div class="topShopImg zahuo">
        <router-link :to="{path:'###'}">
          <img src="../../../static/img/fashion/15393469017679.jpg" alt="">
        </router-link>
      </div>
      <div class="downTitle">
        <p>今日特卖 · 每天早10点 晚8点上新</p>
      </div>
    </div >
</template>

<script>
  import Swiper from 'swiper';
    export default {
        name: "WphFashionTop",
      data(){
          return{
            showSelect: true
          }
      },
        mounted(){
          new Swiper ('.swiper-container', {
            // loop: true,
          }),
          this.togle()
        },
        methods:{
          togle(){
            this.$root.Bus.$on('showSelect', showSelect => {
              this.showSelect = showSelect
            })
          }
        }
    }
</script>

<style scoped>
  .banner{
    margin-top: 0.78rem;
  }
  .banner img{
    width: 100%;
    height: 2.5rem;
    display: block;
  }
  .swiper-container {
    width: 100%;
    height: 2.5rem;
  }
  .search{
    display:flex;
  }
  .search img{
    width: 2.5rem;
    height: 0.575rem;
  }
  .search img:last-child{
    width: 1.25rem;
  }
  .nav{
    display: flex;
    flex-wrap: wrap;
  }
  .nav a{
    width: 25%;
    height: 0.88rem;
    display: block;
  }
  .nav a img{
    width: 0.94rem;
    height: 0.88rem;
    display: block;
  }
  .imgTitle img{
    width: 100%;
    height: 0.475rem;
    display: block;
  }
  .topShopImg a{
    display: block;
  }
  .topShopImg img{
    width: 100%;
    height:2.1rem;
    display: block;
  }
  .inSeasonTwo a{
    display: flex;
  }
  .inSeasonTwo a img{
    display: block;
    width: 50%;
    height: 1.17rem;
  }
  .downTitle{
    padding: 0.15rem 0 0.05rem 0;
  }
  .downTitle p{
    font-size: 0.14rem;
    text-align: center;
  }
  .hot img{
    height: 2.4rem;
  }
  .zahuo img{
    height: 2.8rem;
  }
</style>
