<template>
    <div>
      <div class="product">
        <div class="moneyBox">
          <div class="boxLeft">
            <p>￥{{particulars.saleprice}}</p>
            <span>￥{{particulars.price}}</span>
            <div class="discount">{{Math.floor(particulars.saleprice/particulars.price*100)/100}}折</div>
          </div>
          <div class="icon">
            <a href="#"><img src="static/img/particulars/save_icon.jpg" alt=""></a>
            <a href="#"><img src="static/img/particulars/share_icon.jpg" alt=""></a>
          </div>
        </div>
        <div class="producyTitle">
          <p v-text="particulars.producyTitle"></p>
        </div>
      </div>
      <div class="coupon">
        <div class="couponMsg">
          <div>唯品花</div>
          <p>开通唯品花收单立减{{particulars.wpflower}}元</p>
          <span>领取</span>
        </div>
        <div class="couponMsg msgTwo">
          <div>唯品币</div>
          <p>购买最多可获{{particulars.wpmoney}}个唯品币</p>
        </div>
      </div>
      <div class="size">
        <h3>规格</h3>
        <div v-text="particulars.fenlei"></div>
      </div>
      <div class="site" @click="xianshi">
        <h3>配送至</h3>
        <p>{{address}}</p>
        <img src="static/img/particulars/site_icon.jpg" alt="">
      </div>
      <div class="explain">
        <ul>
          <li>唯品会发货</li>
          <li>7天包退</li>
          <li>退货返运费</li>
        </ul>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="brand">
        <div class="boxTop">
          <div class="imgBox">
            <img :src="particulars.shopPic" alt="">
          </div>
          <div class="shopName">
            <p v-text="particulars.shopName"></p>
            <p v-text="particulars.nameMsg"></p>
          </div>
          <div class="collect">
            收藏
          </div>
        </div>
        <div class="boxBottom">
          <a href="#">查看品牌</a>
          <a href="#">进入专场</a>
        </div>
      </div>
      <div class="picBox">
        <img src="../../../static/img/particulars/1502443448261.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
      name: "WphParticularInformation",
      props:["particulars","address"],
      methods:{
        xianshi(){
          this.$emit('addresschange', true)
        }
      }
    }
</script>

<style scoped>
  img{
    display: block;
  }
  .brand{
    height: auto;
  }
.product{
  width: 100%;
  height: 1.03rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
  .moneyBox{
    width: 3.51rem;
    height: .31rem;
    display: flex;
    justify-content: space-between;
  }
  .boxLeft{
    display: flex;
    align-items: flex-end;
  }
  .moneyBox p{
    line-height: .31rem;
    font-size: .31rem;
  }
  .moneyBox span{
    font-size: .17rem;
    color: #98989f;
    text-decoration: line-through;
  }
  .moneyBox .discount{
    width: .41rem;
    height: .16rem;
    font-size: .1rem;
    line-height: .16rem;
    text-align: center;
    color: white;
    background: #39424a;
    border-radius: 2px;
    margin-left: .1rem;
  }
  .icon{
    display: flex;
    height: .31rem;
    align-items: flex-end;
    margin-left: 30%;
  }
  .icon a{
    display: block;
  }
  .icon a:nth-of-type(1){
    margin-right: .1rem;
  }
  .producyTitle{
    margin-top: .20rem;
    /*border-bottom: 1px dashed #eaeaea;*/
  }
  .producyTitle p{
    color: #3f3f3f;
    font-size: .14rem;
    width: 3.51rem;
    line-height: .18rem;
  }
  .coupon{
    width: 3.51rem;
    height: 1rem;
    margin: 0 auto;
    border-top: 1px dashed #eaeaea;
    border-bottom: 1px solid #eaeaea;
  }
  .couponMsg{
    height: .5rem;
    width: 100%;
    align-items: center;
  }
  .coupon .msgTwo div{
    border: 1px solid #5682c0;
    color: #5682c0;
  }
  .couponMsg div{
    width: .6rem;
    height: .19rem;
    border: 1px solid #e3067e;
    color: #e3067e;
    border-radius: 2px;
    font-size: .1rem;
    float: left;
    text-align: center;
    line-height: .19rem;
    margin-right: 1.2em;
    margin-top: .15rem;
  }
  .couponMsg p{
    font-size: .15rem;
    line-height: .5rem;
    float: left;
  }
  .couponMsg span{
    font-size: .12rem;
    height: 100%;
    line-height: .5rem;
    color: #498fdd;
    float: left;
    margin-left: 20%;
  }
  .size{
    width: 100%;
    height: 1.02rem;
    border-bottom: 1px solid #cbcbcb;
  }
  .size h3{
    font-size: .14rem;
    line-height: .5rem;
    margin-left: .1rem;
    font-weight: 300;
  }
  .size div{
    width: 1rem;
    height: .3rem;
    padding: 0 .02rem;
    font-size: .14rem;
    margin-left: .1rem;
    border: 1px solid #dd3d95;
    text-align: center;
    line-height: .3rem;
    color: #dd3d95;
  }
  .site{
    width: 100%;
    height: .86rem;
    border-bottom: 1px solid #cbcbcb;
  }
  .site h3{
    font-size: .14rem;
    line-height: .5rem;
    margin-left: .1rem;
    font-weight: 300;
  }
  .site p{
    font-size: .12rem;
    color: #585c64;
    font-weight: 100;
    margin-left: .1rem;
    float: left;
    /*background: url("../../../static/particulars/site_icon.jpg") no-repeat right center;*/
  }
  .explain{
    width: 100%;
    height: .51rem;
    border-bottom: 1px solid #cbcbcb;
  }
  .explain ul{
    float: left;
    font-size: .15rem;
    display: flex;
    padding: 0 .1rem;
    margin-right: .1rem;
  }
  .explain ul li{
    line-height: .51rem;
    margin-right: .15rem;
    background: url("../../../static/img/particulars/explain_icon.jpg") no-repeat 0 center;
    text-indent: .15rem;
  }
  .explain span{
    display: block;
    width: .02rem;
    height: .02rem;
    border-radius: 50%;
    float: left;
    margin: .25rem .05rem;
  }
  .explain span:nth-of-type(1){
    background: #ccc;
  }
  .explain span:nth-of-type(2){
    background: #98989f;
  }
  .explain span:nth-of-type(3){
    background: #585c64;
  }
  .boxTop{
    width: 3.45rem;
    height: .9rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .shopName p:nth-of-type(1){
    font-size: .16rem;
    width: 1.9rem;
  }
  .shopName p:nth-of-type(2){
    font-size: .12rem;
    width: 1.9rem;
    color: #97979e;
  }
  .imgBox{
    width: .6rem;
    height: .6rem;
    border: 1px solid #cbcbcb;
    display: flex;
    align-items: center;
    margin-right: .12rem;
  }
  .imgBox img{
    width: .6rem;
  }
  .collect{
    width: .66rem;
    height: .24rem;
    border: 1px solid #dd3c95;
    color: #dd3c95;
    font-size: .12rem;
    text-align: center;
    line-height: .24rem;
    margin-left: .1rem;
  }
  .boxBottom{
    width: 100%;
    height: .55rem;
    border-top: 1px solid #cbcbcb;
    border-bottom: 1px solid #cbcbcb;
    display: flex;
    font-size: .12rem;
    align-items: center;
  }
  .boxBottom a{
    width: 50%;
    height: .25rem;
    line-height: .25rem;
    text-align: center;
    color: #545454;
    background: url("../../../static/img/particulars/go_icon.jpg") no-repeat 1.2rem center;
  }
  .boxBottom a:nth-of-type(1){
    border-right: 1px solid #e6e6e6;
  }
  .picBox{
    width: 100%;
    height: 1.28rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .picBox img{
    width: 3.45rem;
  }
</style>
