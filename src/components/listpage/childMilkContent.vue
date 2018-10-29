<template>
    <div class="cmContent">
        <div class="cmHotSellTitle">
            <img src="../../../static/img/listpage/b94a936a5c90c8def3269ebd2dcad712-hot.png"/>
            <p>热销推荐</p>
        </div>
        <div class="cmHotSellContent">
            <div class="cmHotSellContentLis" v-for="(item,index) in cmHotSellObj" :key="index">
                <img class="milkbox" :src="item.img">
                <p class="cmHotSellContentLisText">
                    <img src="../../../static/img/listpage/b94a936a5c90c8def3269ebd2dcad712-hot.png"/>
                    热销指数<span>{{item.sellData}}</span>%
                </p>
                <h3>￥<span>{{item.price}}</span></h3>
            </div>
        </div>
        <div class="wph">
            <img src="../../../static/img/listpage/3d09b30dafca40a8ab6cfc036da56d99.png"/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cmHotSellObj:[
                {
                    img:require("../../../static/img/listpage/milkbox.png"),
                    sellData:96,
                    price:155
                },
                {
                    img:require("../../../static/img/listpage/cmBoxMiddle.png"),
                    sellData:93,
                    price:155
                },
                {
                    img:require("../../../static/img/listpage/mcBoxSmall.png"),
                    sellData:91,
                    price:909
                }
            ]
        }
    }
}
</script>

<style>
.cmContent{
    width:100%;
    background:#fff;
}
.cmHotSellTitle{
    font-size:.16rem;
    color:#333333;
    display:flex;
    margin-left:.19rem;
    margin-bottom:.36rem;
    align-items: center;
}
.cmHotSellTitle img{
    width:.11rem;
    height:.16rem;
    margin-right:.03rem;
}
.cmHotSellContent{
    width:100%;
    background:#fff;
    display:flex;
}
.cmHotSellContentLis{
    width:33.33333333%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;
}
.milkbox{
    width:.54rem;
    height:.85rem;
    margin:0 auto;
    margin-bottom:.28rem;
}
.cmHotSellContentLisText{
    font-size:.12rem;
    color:#f97474;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom:.1rem;
}
.cmHotSellContentLisText img{
    width:.07rem;
    height:.12rem
}
.cmHotSellContentLis h3{
    font-size:.12rem;
    color:#222222;
    font-weight: 100;
    margin-bottom:.23rem;
}
.wph img{
    width:100%;
    height:.6328rem;
    padding-bottom:.06rem;
}
</style>
