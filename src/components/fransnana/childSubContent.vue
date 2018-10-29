<template>
    <div class="childSubContent">
        <!-- 唯爱童行 -->

        <div class="childHelp">
            <a href=""><img src="../../../static/img/fransnana/15393334353382.jpg"/></a>
        </div>

        <!-- 小孩模特 -->

        <div class="childModel">
            <a href=""><img src="../../../static/img/fransnana/15393338865894.jpg"/></a>
            <a href=""><img src="../../../static/img/fransnana/15393342462367.jpg"/></a>
            <a href=""><img src="../../../static/img/fransnana/15393343322723.jpg"/></a>
        </div>

        <!-- 限时特惠 -->

        <div class="childFavorable">
            <a href=""><img src="../../../static/img/fransnana/15307568412382.jpg"/></a>
        </div>

        <!-- 红包 -->

        <div class="childRedbag">
            <a href="#"><img src="../../../static/img/fransnana/15278196188306.jpg"/></a>
        </div>

        <!-- 礼物馆 -->

        <div class="childGift">
            <a class="childGift_gift" href="#"><img src="../../../static/img/fransnana/15391362505920.jpg"/></a>
            <a class="childGift_buy" href="#"><img src="../../../static/img/fransnana/15391363038573.jpg"/></a>
        </div>

        <!-- 热销榜单 -->

        <div class="childSell">
            <a href="#"><img src="../../../static/img/fransnana/15391364509363.jpg"/></a>
            <a href="#"><img src="../../../static/img/fransnana/15391364835433.jpg"/></a>
            <a href="#"><img src="../../../static/img/fransnana/15391365269884.gif"/></a>
        </div>

        <!-- mama学院 -->

        <div class="childMama">
            <a href="#"><img src="../../../static/img/fransnana/15391358362900.gif"/></a>
        </div>

        <!-- 旗舰店 -->

        <div class="childTopShop">
            <a href="#"><img src="../../../static/img/fransnana/15391366707481.gif"/></a>
        </div>

        <!-- 秋冬好货 -->

        <div class="childAutumn">
            <a href="#"><img src="../../../static/img/fransnana/15375265795791.png"/></a>
        </div>

        <!-- 今日特卖 -->

        <div class="childToday">
            <p class="childTodayText">今日特卖 · 每天早10点 晚8点上新</p>
            <a href="#"><img src="../../../static/img/fransnana/15393307900591.jpg"/></a>
            <a href="#"><img src="../../../static/img/fransnana/15393308968933.jpg"/></a>
            <a href="#"><img src="../../../static/img/fransnana/15393309709225.jpg"/></a>
            <div class="childTodayContent">
                <div v-for="n in [1,2,3]" :key="n.id" class="childTodayContentLis">
                  <router-link :to="{path:'/listpage'}">
                    <a href="#"><img src="../../../static/img/fransnana/58e7244fc7f97fd3f47e609fdee82a94_604x290_80.jpg"/></a>
                    <div class="childTodayContentLisText">
                        <p class="childTodayContentLisTextLeft">安奈儿品牌日-3+</p>
                        <p class="childTodayContentLisTextRight">剩<span>2</span>天</p>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style scoped>
  @import url('../../assets/font/fransnana/iconfont.css');
/* 唯爱童行 */

.childHelp{
    width:100%;
    height:.78rem;
}
.childHelp img{
    width:100%;
    height:.78rem;
}

/* 小孩模特 */

.childModel{
    width:100%;
    height:1.75rem;
    overflow: hidden;
}
.childModel img{
    width:33.333333333333333%;
    height:1.75rem;
    float:left;
}

/* 限时特惠 */

.childFavorable{
    width:100%;
    height:.475rem;
}
.childFavorable img{
    width:100%;
    height:100%;
}

/* 红包 */

.childRedbag{
    width:100%;
    height:.78rem;
}
.childRedbag img{
    width:100%;
    height:100%;
}

/* 礼物馆 */

.childGift{
    width:100%;
    height:.35rem;
    display:flex;
}
.childGift a{
    width:50%;
    height:100%;
}
.childGift img{
    width:100%;
    height:100%;
}

/* 热销榜单 */

.childSell{
    width:100%;
    height:.78rem;
    display:flex;
}
.childSell a{
    width: 33.33333333333333%;
    height:100%;
}
.childSell img{
    width: 100%;
    height:100%;
}

/* mama学院 */

.childMama{
    width:100%;
    height:.67rem;
}
.childMama img{
    width:100%;
    height:100%;
}

/* 旗舰店 */

.childTopShop{
    width:100%;
    height:.475rem;
}
.childTopShop img{
    width:100%;
    height:100%;
}

/* 秋冬好货 */

.childAutumn{
    width:100%;
    height:.985rem;
}
.childAutumn img{
    width:100%;
    height:100%;
}

/* 今日特卖 */

.childToday{
    width:100%;
    background:#fff;
    padding-top:.11rem;
}
.childTodayText{
    width:100%;
    font-size:.16rem;
    color:#000000;
    text-align: center;
    line-height: .26rem;
}
.childToday img{
    width:100%;
    height:1.8rem;
}


.childTodayContent{
    width:100%;
}
.childTodayContentLis{
    width:100%;
    background:#f3f4f5;
    padding-top:.1rem;
}
.childTodayContentLis img{
    width:100%;
    height:1.7942rem;
}
.childTodayContentLisText{
    background:#fff;
    padding:.14rem .12rem .27rem .22rem;
    display:flex;
    box-sizing: border-box;
    justify-content: space-between;
}
.childTodayContentLisTextLeft{
    font-size:.13rem;
    font-weight:600;
    color:#222222;
}
.childTodayContentLisTextRight{
    font-size:.12rem;
    color:#98989f;
}
</style>
