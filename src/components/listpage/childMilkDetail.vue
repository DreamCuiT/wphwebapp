<template>
    <div class="cmDetail">
        <div class="cmDetailLis" v-for="(item,index) in list" :key=index>
          <b @click="goxiangqing(index)">
            <div class="cmDetailLisPic">
                <img :src="item.img"/>
            </div>
            <p class="cmDetailLisText">{{item.text}}</p>
            <div class="cmDetailLisPrice">
                <div class="cmPrice">
                    <p class="priceNow">￥<span>{{item.aPrice}}</span></p>
                    <p class="priceBefore">￥<span>{{item.bPrice}}</span></p>
                </div>
                <div class="Discount">
                    <span>{{parseInt(item.aPrice/item.bPrice*100)}}</span>折
                </div>
            </div>
          </b>
        </div>
    </div>
</template>

<script>
  import  goodslist from "../../../static/childMilkLis"
export default {
    data(){
      return {
        list:null
      }
    },
    created(){
      this.list = goodslist
    },
    mounted(){

    },
    methods:{
      goxiangqing(i){
        this.$router.push({
          path:"/xiangqing",
          name:"Wphxiangqing",
          params:{
            dataobj:i
          }
        })
      }
    }
}
</script>

<style>
.cmDetail{
    background: #fff;
    width:100%;
    overflow: hidden;
}
.cmDetailLis{
    width:50%;
    float:left;
}
.cmDetailLis b{
  display: block;
  font-weight: 100;
}
.cmDetailLisPic{
    width:1.78rem;
    height:2.25rem;
    border:1px solid #efefef;
    position:relative;
    margin:0 auto;
}
.cmDetailLisPic img{
    width:.98rem;
    height:1.55rem;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
}
.cmDetailLisText{
    font-size:.12rem;
    color:#000;
    margin-left:.09rem;
    line-height:.16rem;
    margin-top:.09rem;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
.cmDetailLisPrice{
    width:1.7rem;
    margin:0 auto;
    display:flex;
    font-size:.1rem;
    margin-top:.06rem;
    margin-bottom:.38rem;
    justify-content: space-between;
}
.cmPrice{
    display:flex;
    font-size:.1rem;
}
.priceNow{
    color:#e80080;
    margin-right:.05rem;
}
.priceBefore{
    color:#888888;
    text-decoration: line-through;
}
.Discount{
    width:.37rem;
    height:.14rem;
    background:#000;
    color:#fff;
    line-height:.14rem;
    text-align:center;
}
</style>
