<template>
    <transition name="fade">
        <div class="cmTranspond" v-if="n">
            <div class="cmTranspondOut">
                <div class="cmTranspondBox">
                    <div class="cmTranspondLis" v-for="(item,index) in cmTpdData" :key=index>
                        <img :src="item.img">
                        <p>{{item.text}}</p>
                    </div>
                </div>
                <div class="cmTpdCancle" @click="trpdCancleClick">
                    <p>取消</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    data(){
        return{
            cmTpdData:[
                {
                    img:require("../../../static/img/listpage/weibo.png"),
                    text:"新浪微博"
                },
                {
                    img:require("../../../static/img/listpage/qqkongjian.png"),
                    text:"QQ空间"
                },
                {
                    img:require("../../../static/img/listpage/fuzhi.png"),
                    text:"复制"
                }
            ],
        }
    },
    computed:{
            ...mapGetters({
                n:"GETNUM"
            })
        },
    methods:{
        ...mapActions({
            trpdCancleClick:"INCNUM"
        })
    }
}
</script>

<style>
/*设置起始值*/

.fade-enter,
.fade-leave-to {
    transform: translateY(100%);
}

/*设置动画的变化过程*/

.fade-enter-active,
.fade-leave-active {
    transition: .2s linear;
}
.cmTranspond{
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    position: fixed;
    top:0;
    bottom:0;
    z-index: 999;
}
.cmTranspondOut{
    width:100%;
    position:absolute;
    left:0;
    bottom:0;
    height:1.53rem;
}
.cmTranspondBox{
    width:100%;
    height:1.01rem;
    border-top:1px solid #d1cccd;
    border-bottom:1px solid #d1cccd;
    background:#f4f2f2;
    bottom:.52rem;
    display:flex;
}
.cmTranspondLis{
    width:1.05rem;
    height:100%;
}
.cmTranspondLis img{
    width:.49rem;
    height:.47rem;
    margin:0 auto;
    margin-top:.16rem;
}
.cmTranspondLis p{
    font-size:.13rem;
    color:#5e5efe;
    text-align:center;
    margin-top:.12rem;
}

/* 取消 */

.cmTpdCancle{
    width:100%;
    height:.52rem;
    background:#fff;
    bottom:0;
}
.cmTpdCancle p{
    font-size:.16rem;
    text-align:center;
    color:#318dfb;
    line-height:.52rem;
}
</style>
