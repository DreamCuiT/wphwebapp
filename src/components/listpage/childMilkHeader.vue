<template>
    <div>

        <!-- 上部网页标题 -->

        <div class="milkHeader">
            <div class="mhLeft">
                <router-link to="../child">
                    <i class="iconfont icon-zuojiantou" @click="goback"></i>
                </router-link>
            </div>
            <div class="mhcenter">
                <p>诺优能奶粉NUTRILON奶粉</p>
            </div>
            <div class="mhright">
                <i class="iconfont icon-icon-test"></i>
                <i class="iconfont icon-zhuanfa" @click="transpondClick"></i>
            </div>
        </div>

        <!-- 上部菜单栏 -->

        <div :class="cmTitleClass">
            <div class="cmGoods" :style="{color:changeGoods}" @click="changeCmGoods()">
                <div :class="circleOut">
                    <span class="circleIn" v-if="showCercle"></span>
                </div>
                <p>有货商品</p>
            </div>
            <div :class="cmGoodsOther" @click="changeOtherPrice">
                <div class="cmGoodsFont">
                    <i class="iconfont icon-shangjiantou"></i>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <p>价格</p>
            </div>
            <div class="cmGoodsOther" :style="{color:changeDiscount}" @click="changeDiscountClick">
                <div class="cmGoodsFont">
                    <i class="iconfont icon-shangjiantou"></i>
                    <i class="iconfont icon-xiajiantou"></i>
                </div>
                <p>折扣</p>
            </div>
            <div class="cmGoodsOther" :style="{color:changeChoose}" @click="changeChooseClick">
                <i class="iconfont icon-iconfontzhizuobiaozhun18"></i>
                <p @click=" go">筛选</p>
            </div>
        </div>

        <!-- 红包 -->

        <div class="cmRedp">
            <img src="../../../static/img/listpage/redPacket.png"/>
            <p class="rpTime">剩<span>5</span>天</p>
        </div>
    </div>
</template>

<script>
 import {mapGetters,mapActions} from "vuex"

export default {
    // 上部菜单栏效果
    data(){
        return{
            changeGoods:"#222222",
            showCercle:false,
            circleOut:"circleOut",
            cmGoodsOther:"cmGoodsOther",
            changeDiscount:"#222222",
            changeChoose:"#222222",
            cmTitleClass:"cmTitle",
            scrollData:"document.documentElement.scrollTop"
        }
    },
    methods:{
        scrollFun(){
            if(document.documentElement.scrollTop!=0){
                this.cmTitleClass="cmTitleScroll"
            }else if(document.documentElement.scrollTop==0){
                this.cmTitleClass="cmTitle"
            }
            // console.log(document.documentElement.scrollTop)
        },
        changeCmGoods(){
            if(this.changeGoods=="#222222"){
                this.changeGoods="#de3d96"
            }else if(this.changeGoods=="#de3d96"){
                this.changeGoods="#222222"
            }
            if(this.showCercle==false){
                this.showCercle=true
                document.documentElement.scrollTop=3960
            }else if(this.showCercle==true){
                this.showCercle=false
                document.documentElement.scrollTop=0
            }
            if(this.circleOut=="circleOut"){
                this.circleOut="circleOutChange"
            }else if(this.circleOut=="circleOutChange"){
                this.circleOut="circleOut"
            }

        },
        changeOtherPrice(){
            if(this.cmGoodsOther=="cmGoodsOther"){
                this.cmGoodsOther="cmGoodsOtherClick"
                this.changeDiscount="#222222"
                this.changeChoose="#222222"
            }
            document.documentElement.scrollTop=110
        },
        changeDiscountClick(){
            if(this.changeDiscount=="#222222"){
                this.changeDiscount="#de3d96"
                this.cmGoodsOther="cmGoodsOther"
                this.changeChoose="#222222"
            }
            document.documentElement.scrollTop=860
        },
        changeChooseClick(){
            if(this.changeChoose=="#222222"){
                this.changeChoose="#de3d96"
                this.cmGoodsOther="cmGoodsOther"
                this.changeDiscount="#222222"
            }

        },
         ...mapActions({
            transpondClick:"INCNUM"
        }),
        goback(){
          this.$router.go(-1)
        },
        go(){
          this.$router.push({
            path:"/childFiltr"
          })
        }
    },
    computed:{
        ...mapGetters({
            n:"GETNUM"
        })
    },
    mounted(){
        window.addEventListener('scroll', this.scrollFun)
        console.log(document.documentElement.scrollTop)
    }
}

</script>

<style scoped>
  @import url('../../assets/font/lisipage/iconfont.css');

/* 上部页面标题 */

.milkHeader{
    width:100%;
    height:.44rem;
    display:flex;
    justify-content: space-between;
    background:#fff;
    border-bottom:1px solid #ededed;
}
.mhLeft{
    width:.4rem;
    height:.44rem;
    line-height:.44rem;
    text-align:center;
}
.milkHeader i{
    font-size:.24rem;
    color:#000;
    display: block;
}
.mhcenter{
    width:2.2rem;
    height:.44rem;
    line-height:.44rem;
    margin-left:0;
}
.mhcenter p{
    width:100%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size:.19rem;
}
.mhright{
    width:.76rem;
    height:.44rem;
    display:flex;
    justify-content: space-between;
    line-height:.44rem;
    margin-right:.1rem;
}
.milkHeader .icon-zhuanfa{
    font-size:.22rem;
}

/* 上部菜单栏 */

.cmTitle{
    width:100%;
    height:.36rem;
    color:#222222;
    display:flex;
    background:#fff;
    border-bottom:1px solid #e4e3e6;
    z-index: 10;
}
.cmTitleScroll{
    width:100%;
    height:.36rem;
    color:#222222;
    display:flex;
    background:#fff;
    border-bottom:1px solid #e4e3e6;
    position:fixed;
    top:0;
    left:0;
    z-index: 10;
}
.cmGoods{
    width:34%;
    height:.36rem;
    line-height:.36rem;
    font-size:.14rem;
    display:flex;
    justify-content: center;
    border-right:1px solid #cccccc;
    align-items: center;
}
.cmGoodsOther{
    width:22%;
    height:.36rem;
    line-height:.36rem;
    font-size:.14rem;
    color:#222222;
    display:flex;
    justify-content: center;
    border-right:1px solid #cccccc;
}
.cmGoodsOtherClick{
    width:22%;
    height:.36rem;
    line-height:.36rem;
    font-size:.14rem;
    color:#de3d96;
    display:flex;
    justify-content: center;
    border-right:1px solid #cccccc;
}
.cmTitle .cmGoodsOther:last-of-type{
    border-right:none;
}
.cmGoodsFont{
    margin-top:.11rem;
    margin-right:.07rem;
}
.cmGoodsFont i{
    font-size:.06rem;
    line-height:.07rem;
  display: block;
}
.icon-iconfontzhizuobiaozhun18{
    font-size:.12rem;
    vertical-align: baseline;
    margin-right:.04rem;
}
.circleOut{
    width:.13rem;
    height:.13rem;
    border:1px solid #222222;
    border-radius: 50%;
    text-align:center;
    margin-right:.04rem;
    position: relative;
}
.circleOutChange{
    width:.13rem;
    height:.13rem;
    border:1px solid #222222;
    border-radius: 50%;
    text-align:center;
    margin-right:.04rem;
    position: relative;
    border:1px solid #de3d96;
}
.circleIn{
    width:.09rem;
    height:.09rem;
    background:#de3d96;
    border-radius:50%;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
}

/* 红包 */

.cmRedp{
    background:#ffffff;
    overflow:hidden;
}
.cmRedp img{
    width:100%;
    height:.56rem;
    margin-top:.12rem;
    margin-bottom:.15rem;
}
.rpTime{
    font-size:.12rem;
    color:#999999;
    float:right;
    margin-right:.1rem;
    margin-bottom:.4rem;
}
</style>

