<template>
     <div class="goods">
        <div class="goodsMain">
          <div class="srot-ul-left">
            <ul>
              <li @click="cheakbox(index)" :class=itme.class v-for="(itme,index) in goodsSortList" :key="index"><span>{{itme.text}}</span></li>
            </ul>
          </div>
          <div class="sort-right">
            <div v-for="(itme,index) of sortRightData" :key="index">
               <div class="sort-topImg-right">
                <!-- <img src="" alt=""> -->
              </div>
              <h2 class="sort-title-right">{{itme.title}}<span v-if="itme.hot" class="host-goods">热销榜 <i class="iconfont icon-you iconleft" style="font-size:.07rem;"></i></span></h2>
              <div class="goods-pro">
                    <div v-for="(goods,sub) of sortRightData[index].goodsPro" :key="sub">
                      <img :src="goods.goodsImg" style="width:.55rem;height:.65rem;margin:0 auto">
                      <span>护肤套装</span>
                    </div>
              </div>
            </div>
          </div>
        </div>
     </div>
</template>

<script>
//引入子组件
// import  searchImg from "../../assets/brandImgs/search.png"

export default {
  name: 'WphgoodsSort',
  data(){
    return{
      goodsSortList:[{text:"为你推荐",class:"pitch"},{text:"女装",class:"noPitch"},{text:"男装",class:"noPitch"},{text:"女内衣",class:"noPitch"},{text:"女鞋",class:"noPitch"},{text:"男鞋",class:"noPitch"},{text:"箱包皮具",class:"noPitch"},{text:"手表配饰",class:"noPitch"},{text:"护肤彩妆",class:"noPitch"},{text:"人护理",class:"noPitch"},{text:"母婴",class:"noPitch"},{text:"户外运动",class:"noPitch"},{text:"手机数码",class:"noPitch"},{text:"家用电器",class:"noPitch"},{text:"家具家纺",class:"noPitch"},{text:"生活超市",class:"noPitch"},{text:"唯品国际",class:"noPitch"},{text:"唯品优选",class:"noPitch"},{text:"唯品·奢",class:"noPitch"},{text:"唯品金融",class:"noPitch"},{text:"唯品医药",class:"noPitch"},{text:"图文娱乐",class:"noPitch"}],
      noPitch:"noPitch",
      pitch:"pitch",
      showSort:false,
      sortRightData:[
        {
          hot:false,
          title:"猜你想找",
          goodsPro:[
            {
              goodsImg:require("../../assets/sortImgs/goods-1.png"),
              goodsName:"国际美妆"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-2.png"),
              goodsName:"休闲裤"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-3.png"),
              goodsName:"男士运动鞋"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-4.png"),
              goodsName:"长袖T恤"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-5.png"),
              goodsName:"连衣裙"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-6.png"),
              goodsName:"男士卫衣"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-7.png"),
              goodsName:"女士休闲鞋"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-8.png"),
              goodsName:"短靴"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-9.png"),
              goodsName:"男士夹克"
            },
          ]
        },
        {
          hot:false,
          title:"你可能还喜欢",
          goodsPro:[
            {
              goodsImg:require("../../assets/sortImgs/goods-10.png"),
              goodsName:"男士牛仔裤"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-11.png"),
              goodsName:"衬衫"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-12.png"),
              goodsName:"男袜"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-13.png"),
              goodsName:"水乳精华"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-14.png"),
              goodsName:"海外如唇膏"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-15.png"),
              goodsName:"防嗮隔离"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-16.png"),
              goodsName:"卫衣"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-17.png"),
              goodsName:"外套"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-18.png"),
              goodsName:"T恤"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-19.png"),
              goodsName:"单鞋"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-20.png"),
              goodsName:"男士内裤"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-21.png"),
              goodsName:"女士内裤"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-22.png"),
              goodsName:"聚拢文胸"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-23.png"),
              goodsName:"毛衣"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-24.png"),
              goodsName:"大衣"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-25.png"),
              goodsName:"跑步鞋"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-26.png"),
              goodsName:"休闲运动鞋"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-27.png"),
              goodsName:"运动裤"
            },
          ]
        },
        {
          hot:false,
          title:"精选品牌",
          goodsPro:[
            {
              goodsImg:require("../../assets/sortImgs/goods-28.png"),
              goodsName:"兰芝"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-29.png"),
              goodsName:"森马"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-30.png"),
              goodsName:"骆驼"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-31.png"),
              goodsName:"韩都衣舍"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-32.png"),
              goodsName:"百丽"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-33.png"),
              goodsName:"卓诗尼"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-34.png"),
              goodsName:"江南布衣"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-35.png"),
              goodsName:"都市丽人"
            },
            {
              goodsImg:require("../../assets/sortImgs/goods-36.png"),
              goodsName:"耐克"
            },
          ]
        },
      ]
    }
  },
  methods:{
    cheakbox(index){
         for(let arrIndex in this.goodsSortList){
            this.goodsSortList[arrIndex].class = this.noPitch;
         }
        this.goodsSortList[index].class = this.pitch;
    },
    sortShow(){
        this.$emit("show-srot",this.showSort)
    }
  },
  mounted(){
        this.sortShow()
  },
  components:{
    //注册组件
  }
}
</script>

<style>
  .goods{
   display:flex;
   flex-direction: column;
   height:100%;
   flex:1;
  }
  /* header */

    /* search */
    .searchBox{
      width:100%;
      box-sizing: border-box;
      padding:.1rem .15rem;
      background-color:#f3f4f5;
      font-size:0;
    }
    .searchBox>div{
      height:.35rem;
      background-color:#fff;
      display:flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #d8d8d8;
      border-radius:1px;
    }
     .searchBox>div>img{
       width:.14rem;
       height:.14rem;
       margin-right:.05rem;
     }
    .titleText{
      font-size:.14rem;
      color:#98989f;
    }
    /* goodsMain */
    .goodsMain{
      overflow: hidden;
      flex:1;
      display:flex;
    }
    /* sort-left */
    .srot-ul-left{
      width:.9rem;
      height:100%;
      font-size:.14rem;
      /* float:left; */
      /* position:relative;
      overflow: hidden; */
      background-color:#f3f4f5;
    }
     .srot-ul-left>ul::-webkit-scrollbar {
        display: none;
        width: 0 !important
		}
    .srot-ul-left>ul{
      width:100%;
      height:100%;
      overflow-y: auto;
      overflow-x: hidden;
      /* position: absolute; */
      /* left:6px; */
    }
    .srot-ul-left>ul>li{
      height:.49rem;
      line-height: .49rem;
      text-align: center;
      position: relative;
    }
    .noPitch{
       background-color:#f3f4f5;
    }
    .pitch{
      background-color:#fff;
    }
    .pitch::before{
      position:absolute;
      font-size:0;
      content:"";
      display:block;
      width:.04rem;
      height:.49rem;
      background-color:#de3d96;
    }
    .srot-ul-left>ul>li>span{
      box-sizing: border-box;
      width:80%;
      margin:0 auto;
      display:inline-block;
      height:100%;
      font-size:.07rem;
      color:#585c64;
      border-bottom:1px solid #f0f2f3;
    }
    /* sort-right */
    .sort-right{
      background-color:#fff;
      flex:1;
      display:flex;
      flex-direction:column;
      box-sizing: border-box;
      overflow-y: auto;
      /* float:right;
      width:auto; */
    }
    .sort-right::-webkit-scrollbar {
        display: none;
        width: 0 !important
		}
    .sort-title-right{
      /* float:right; */
      margin:0 .28rem;
      padding-top:.2rem;
      font-size:.14rem;
      color:#222;
    }
    .host-goods{
      font-size:.07rem;
      color:#585c64;
      float:right;
      font-weight:400;
    }
    .goods-pro{
      box-sizing: border-box;
      margin:.2rem .25rem 0 .23rem;
      text-align:justify;
      font-size:0;
      /* overflow: hidden; */
      border-bottom:1px solid #dedede;
    }
    .goods-pro>div{
      width:.66rem;
      text-align:center;
      font-size:0;
      display:inline-block;
      margin:0 .06rem;
    }
    .goods-pro>div>span{
      font-size:.07rem;
      height:.09rem;
      /* line-height: .07rem; */
      display: inline-block;
      width:100%;
      text-overflow: ellipsis;
      color:#222;
      letter-spacing: normal;
      padding:.11rem 0 .25rem 0;
    }
</style>
