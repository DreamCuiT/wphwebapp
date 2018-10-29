<template>
    <div class="cmFiltrHeader">
        <div class="filtrCancle" @click="filtrCancle">
            <p>取消</p>
        </div>
        <div class="filtrTitle">
            <p>筛选</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        filtrCancle(){
            this.$router.push({
                path:"/childMilk"
            })
        }
    }
}
</script>

<style>
.cmFiltrHeader{
    width:100%;
    height:.51rem;
    background:#fff;
}
.filtrCancle{
    font-size:.16rem;
    color:#282828;
    float:left;
    line-height:.51rem;
    margin-left:.18rem;
}
.filtrTitle{
    font-size:.21rem;
    color:#373737;
    width:2.5rem;
    margin:0 auto;
    text-align:center;
    line-height:.51rem;
}
</style>
