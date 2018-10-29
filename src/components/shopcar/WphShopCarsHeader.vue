<template>
  <div>
    <div class="shopCarsHeader">
      <div class="goBack" @click="goback">
        <i class="iconfont icon-right"></i>
      </div>
      <div class="shopCarTitle">
        <p>确认订单</p>
        <p v-show="timeshow">{{this.$store.state.mtimes}}:{{this.$store.state.stimes}}</p>
      </div>
      <div></div>
    </div>
    <div class="CarsContent">
      <div class="safety">
        <img src="../../../static/img/shopcars/rem.jpg" alt="">
        <p>你正在安全购物环境中，请放心购买</p>
      </div>
      <div class="site">
        <p>设置收货地址</p>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "WphShopCarsHeader",
        data(){
          return{
          }
        },
        props:["timeshow"],
        created(){
          this.updatetime()
        },
        mounted(){
        },
        methods:{
          updatetime(){
            this.$store.dispatch("INCTIME")
          },
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  @import url('../../assets/font/shopcar/iconfont.css');
  .shopCarsHeader{
    width: 100%;
    height: 0.44rem;
    position: relative;
    background: #fbfbfa;
  }
  .goBack{
    width: 0.46rem;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }
  .goBack i{
    display: block;
    font-size: 0.22rem;
  }
  .shopCarTitle{
    line-height: 0.44rem;
    display: flex;
    justify-content: center;
  }
  .shopCarTitle p{
    font-size: 0.18rem;
  }
  .CarsContent{
    padding-bottom: 0.1rem;
    background: #e8eaf4;
  }
  .safety{
    display: flex;
    padding: 0.06rem 0.15rem;
  }
  .safety img{
    width: 0.24rem;
    height: 0.24rem;
    display: block;
    margin-right: 0.08rem;
  }
  .safety p{
    font-size: 0.12rem;
    line-height: 0.24rem;
  }
  .site{
    height:0.47rem;
    display: flex;
    line-height: 0.47rem;
    justify-content: space-between;
    padding-left:0.15rem;
    background: #656c89;
    color: #fbfbfc;
  }
  .site p{
    font-size: 0.16rem;
  }
  .site i{
    display: block;
    font-size: 0.2rem;
    margin-right: 0.1rem;
  }

  .shopCarTitle p:nth-child(2){
    color: #e90f87;
    font-size: 0.16rem;
  }
</style>
