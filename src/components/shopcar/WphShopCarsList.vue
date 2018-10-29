<template>
    <div class="carsList">
      <h3>精选特卖</h3>
      <ul>
        <li v-for="(item,index) in list ">
          <img :src="item.goodsimgs" alt="">
          <div class="goodsIntro">
            <div class="goodsIntroLeft">
              <p>{{item.goodsname}}</p>
              <span>{{item.goodsshoppe}}</span>
              <span>{{item.goodssize}}</span>
              <div class="goodsNumber">
                <span @click="sub(index)">
                  <i class="iconfont icon--hao"></i>
                </span>
                <p>{{item.goodsnumber}}</p>
                <span @click="add(index)">
                  <i class="iconfont icon-hao"></i>
                </span>
            </div>

            </div>
            <div class="goodsIntroRight">
              <p><span>￥{{item.goodsnewprice}}</span></p>
              <p><b>￥{{item.goodsoldprice}}</b></p>
              <div class="goodsDelete">
                <i class="iconfont icon-tubiao20" @click="remove(index)" ></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="ageMoney">
        <span>￥{{tm}}</span>
      </div>
      <div class="freeShipping">
        <span>
          免邮
        </span>
        <p>唯品自营商品已享受新会员专享全场38元包邮</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WphShopCarsList",
        props:["list","add","sub","tptalMoneyss","tm"],
        data(){
          return{
          }
        },
        created(){
        },
        mounted(){
        },
        methods:{
          remove(i){
            this.$emit("listen",i)
            this.$store.dispatch("INCTIME")
          }
        }
    }
</script>

<style scoped>
  @import url('../../assets/font/shopcar/iconfont.css');
  .carsList{
  padding: 0 0.15rem;
}
  .carsList h3{
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.14rem;
    font-weight: 100;
  }
  .carsList li{
    display: flex;
    width: 100%;
    padding: 0.15rem 0 0.25rem 0;
    border-bottom: 1px dashed #ccc ;
  }
  .carsList li img{
    width: 0.68rem;
    height: 0.86rem;
    display: block;
    margin-right: 0.1rem;
  }
  .goodsIntro{
    flex: 1;
    display: flex;
  }
  .goodsIntroLeft p{
    line-height: 0.15rem;
    width: 1.86rem;
    font-size: 0.14rem;
    margin-bottom: 0.06rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #3c3c3c;
  }
  .goodsIntroLeft span{
    display: block;
    font-size: 0.12rem;
    width: 1.86rem;
    margin-bottom: 0.06rem;
    color: #999999;
  }
  .goodsNumber{
    display: flex;
  }
  .goodsNumber span{
    width: 0.3rem;
    height: 0.24rem;
    border: 1px solid #e7e7e7;
    text-align: center;
    line-height: 0.24rem;
  }
  .goodsNumber p{
    width: 0.38rem;
    height: 0.24rem;
    text-align: center;
    line-height: 0.24rem;
    border-bottom: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
  }
  .goodsNumber i{
    font-size: 0.12rem;
  }
  .goodsIntroRight{
    width: 100%;
  }
  .goodsIntroRight p{
    font-size: 0.12rem;
    text-align: right;
    width: 100%;
    color: #3c3c3c;
  }
  .goodsIntroRight p:nth-child(2) b{
    font-weight: 100;
    text-decoration: line-through;
    color: #999999 ;
  }
  .goodsDelete{
    width: 100%;
    height: 0.12rem;
    text-align: right;
    margin-top: 0.55rem;
  }
  .goodsDelete i{
    display: block;
    font-size: 0.16rem;
    color: #999999;
  }
  .ageMoney{
    width: 100%;
    height: 0.48rem;
    text-align: right;
    line-height: 0.48rem;
  }
  .ageMoney span{
    font-size:0.16rem ;
    display: block;
    color:#3c3c3c ;
  }
  .freeShipping{
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 0.14rem;
    height: 0.24rem;
  }
  .freeShipping span{
    display: block;
    width: 0.33rem;
    height: 0.16rem;
    border: 1px solid rgba(58,89,152,.5);
    text-align: center;
    line-height: 0.16rem;
    font-size: 0.12rem;
    border-radius: 0.03rem ;
    margin-right: 0.05rem;
    color: #3a5998;
  }
  .freeShipping p{
    font-size: 0.12rem;
    color: #585c64;
  }
</style>
