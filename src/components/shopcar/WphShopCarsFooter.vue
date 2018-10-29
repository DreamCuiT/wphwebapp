<template>
    <div class="footerbox">
      <div class="discountCoupon">
        <span>已选择1张礼券</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="discountCouponDown">
        <span>优惠券</span>
        <b>-￥{{dc}}</b>
        <p>[全场券 | 唯品自营、唯品国际(部分商品除外)]</p>
      </div>
      <div class="use">
        <p>使用口令</p>
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <div class="allMoney">
        <div class="allMoneyTop">
          <h3>订单金额</h3><span>￥ {{rtm}}</span>
        </div>
        <ul>
          <li><span>商品总金额</span><p>￥ {{tm}}</p></li>
          <li><span>运费</span><p>￥ 0</p></li>
          <li><span>商品总金额</span><p>-￥ {{dc}}</p></li>
        </ul>
      </div>
      <div class="invoice">
        <p>开具发票(pc暂不支持开具发票)</p>
      </div>
      <div class="grayBox"></div>
      <div class="bottomFixed">
        <div class="lackMoney">
          <span>还需支付:</span>
          <p>￥{{rtm}}</p>
        </div>
        <div class="support">
          <p>不支持货到付款</p>
        </div>
        <div class="SoLongMoney">
          <span>货到付款</span>
          <p>在线支付</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WphShopCarsFooter",
        props:["rtm","dc","tm"],
        data(){
          return{
          }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style scoped>
  @import url('../../assets/font/shopcar/iconfont.css');
  .footerbox{
    background: #f3f4f5;
  }
.discountCoupon{
  padding: 0 0.15rem;
  background: white;
  height: 0.51rem;
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  .discountCoupon span{
    display: block;
    font-size: 0.14rem;
    color: #555555;
  }
  .discountCoupon i{
    font-size: 0.2rem;
    display: block;
    color: #a0a0a7;
  }
  .discountCouponDown{
    padding: 0 0.15rem;
    background: white;
    height: 0.4rem;
    display: flex;
    align-items: center;
  }
  .discountCouponDown span{
    width: 0.44rem;
    height: 0.18rem;
    border: 1px solid #c39d2e;
    color: #c39d2e;
    font-size: 0.12rem;
    display: block;
    margin-right: 0.05rem;
    text-align: center;
  }
  .discountCouponDown b{
    font-weight: 100;
    display: block;
    font-size:0.16rem ;
    letter-spacing:-3px;
    margin-right: 0.13rem;
  }
  .discountCouponDown p{
    font-size: 0.12rem;
    color: #999999;
  }
  .use{
    margin: 0.1rem 0;
    padding: 0 0.15rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.5rem;
  }
  .use p{
    font-size: 0.14rem;
    color: #555555;
  }
  .use i{
    display: block;
    font-size: 0.2rem;
    color: #a0a0a7;
  }
  .allMoney{
    padding: 0 0.15rem;
    background: white;
  }
  .allMoneyTop{
    display: flex;
    height: 0.48rem;
    justify-content: space-between;
    align-items: center;
  }
  .allMoneyTop h3{
    font-size: 0.14rem;
    color: #474747;
  }
  .allMoneyTop span{
    display: block;
    color: #e4007f;
    font-size: 0.14rem;
  }
  .allMoney ul{
    padding: 0.08rem 0;
  }
  .allMoney li{
    height: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .allMoney li span{
    display: block;
    font-size: 0.14rem;
    color: #585c64;
  }
  .allMoney li p{
    font-size: 0.14rem;
    color: #585c64;
  }
  .invoice{
    margin-top: 0.1rem;
    height: 0.45rem;
    line-height: 0.45rem;
    padding: 0 0.15rem;
    background: white;
  }
  .invoice p{
    font-size: 0.14rem;
    color: #dfdfdf;
  }
  .grayBox{
    width: 100%;
    height: 1.84rem;
    background: #f3f4f5;
  }
  .bottomFixed{
    width: 100%;
    box-sizing: border-box;
    height: 1.23rem;
    padding: 0.15rem;
    background: white;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .lackMoney{
    display: flex;
    justify-content: center;
    margin-bottom: 0.07rem;
  }
  .lackMoney span{
    display: block;
    font-size: 0.14rem;
    color: #000;
  }
  .lackMoney p{
    font-size: 0.14rem;
    color: #e4007f;
  }
  .support p{
    font-size: 0.12rem;
    color: #98989f;
    text-align: center;
    margin-bottom: 0.12rem;
  }
  .SoLongMoney{
    display: flex;
    text-align: center;
    line-height: 0.45rem;
  }
  .SoLongMoney span{
    display: block;
    width: 1.6rem;
    height: 0.43rem;
    border: 1px solid #dcdde1;
    font-size: 0.16rem;
    color: #caccd2;
    margin-right: 0.16rem;
    border-radius: 0.05rem;
  }
  .SoLongMoney p{
    width: 1.62rem;
    height: 0.45rem;
    background: #e80080;
    color: white;
    font-size: 0.16rem;
    border-radius: 0.05rem;
  }
</style>
