<template>
    <div class="filtrContent">
        <div class="filtrPriceArea">
            <p>价格区间(元)</p>
            <div class="priceAreaInput">
                <input type="text" placeholder="最低价">
                <span>-</span>
                <input type="text" placeholder="最高价">
            </div>
        </div>
        <div class="filtrClass">
            <p class="filtrClassTitle">品类</p>
            <p class="filtrClassTitleOther">先选类别，才能筛选属性</p>
            <div class="filtrClassChoice">
                <div ref="smallBox" :class="filtrClassChoiceData" v-for="(item,index) in list" :key=index @click="filtrChoiceClick(index)">
                    {{list[index]}}
                </div>
            </div>
        </div>
        <div class="filtrFooter">
            <div class="filtrOption" @click="filtrOptionClick">
                重置
            </div>
            <div class="filtrConfirm" @click="filtrConfirmClick">
                确认
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["list"],
    data(){
        return{
            filtrClassChoiceData:"filtrClassChoiceDiv"
        }
    },
    methods:{
        filtrChoiceClick(index){
            if(this.$refs.smallBox[index].className=="filtrClassChoiceDiv"){
                this.$refs.smallBox[index].className="filtrClassChoiceDivChange"
            }else if(this.$refs.smallBox[index].className=="filtrClassChoiceDivChange"){
                this.$refs.smallBox[index].className="filtrClassChoiceDiv"
            }
        },
        filtrConfirmClick(){
            this.$router.push({
                path:"/childMilk"
            })
        },
        filtrOptionClick(){
            for(let i=0; i<this.$refs.smallBox.length; i++){
                this.$refs.smallBox[i].className="filtrClassChoiceDiv"
            }

        }
    }
}
</script>

<style>
body{
    background:#fff;

}
.filtrContent{
    width:100%;

}
.filtrPriceArea{
    /* width:100%; */
    margin-left:.18rem;
    box-sizing:border-box;
}
.filtrPriceArea p{
    font-size:.16rem;
    color:#222222;
    font-weight: 600;
    padding-top:.23rem;
}
.priceAreaInput{
    display:flex;
    height:.47rem;
    line-height:.47rem;
    font-size:.3rem;
    margin-top:.2rem;
}
.priceAreaInput input{
    width:1.25rem;
    height:.47rem;
    background:#f6f6f6;
    border:none;
    text-align:center;
    outline:none;
}
.priceAreaInput span{
    font-weight: 100;
    margin:0 .03rem;
}
.filtrClass{
    /* width:100%; */
    margin-left:.18rem;
    margin-top:.43rem;
}
.filtrClassTitle{
    font-size:.16rem;
    color:#222222;
    font-weight: 600;
    padding-top:.23rem;
}
.filtrClassTitleOther{
    font-size: .13rem;
    color:#a6a6ac;
    margin-top:.09rem;
}
.filtrClassChoice{
    margin-top:.19rem;
    overflow: hidden;
}
.filtrClassChoiceDiv{
    width:1rem;
    height:.39rem;
    border:1px solid #b1b1b6;
    border-radius: .02rem;
    line-height:.39rem;
    font-size:.14rem;
    color:#353535;
    text-align:center;
    float:left;
    margin-right:.15rem;
    margin-bottom:.18rem;
}
.filtrClassChoiceDivChange{
    width:1rem;
    height:.39rem;
    border:1px solid #de3c96;
    border-radius: .02rem;
    line-height:.39rem;
    font-size:.14rem;
    color:#de3c96;
    text-align:center;
    float:left;
    margin-right:.15rem;
    margin-bottom:.18rem;
    background:url(../../../static/img/listpage/rightBottom.png) no-repeat right bottom;
}
.filtrFooter{
    width:100%;
    height:.75rem;
    border-top:1px solid #ebebeb;
    font-size:.16rem;
    display:flex;
    justify-content: space-around;
    position: fixed;
    left:0;
    bottom:0;
    box-sizing:border-box;
}
.filtrOption{
    width:1.5rem;
    height:.48rem;
    border:1px solid #d2d2d7;
    border-radius: .02rem;
    color:#aca6a6;
    line-height:.48rem;
    text-align:center;
    margin-top:.11rem;
}
.filtrConfirm{
    width:1.5rem;
    height:.48rem;
    border-radius: .02rem;
    border:1px solid #d2d2d7;
    color:#fff;
    line-height:.48rem;
    text-align:center;
    background:#dd3d97;
    margin-top:.11rem;
    border:none;
}
</style>
