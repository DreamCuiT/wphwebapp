<template>
  <div class="margintop">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/img/fransnana/15395955498445.jpg"/></div>
          <div class="swiper-slide"><img src="../../../static/img/fransnana/15393333056688.gif"/></div>
          <div class="swiper-slide"><img src="../../../static/img/fransnana/ias_153932581871565_604x290_80.jpg"/></div>
          <div class="swiper-slide"><img src="../../../static/img/fransnana/ias_153931217168647_604x290_80.jpg"/></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
    import '../../../node_modules/swiper/dist/css/swiper.css';
    import Swiper from 'swiper';
    export default {
        mounted(){
            new Swiper('.swiper-container', {
                autoplay: true,
                loop:true,
                pagination:{

                    direction: 'horizontal',

                    // 如果需要分页器
                    el: '.swiper-pagination',
                    clickable :true,

                    //这里分页器类型必须设置为custom,即采用用户自定义配置
                    type: 'custom',

                    //下面方法可以生成我们自定义的分页器到页面上
                    renderCustom: function(swiper, current, total) {
                        var customPaginationHtml = "";
                        for(var i = 0; i < total; i++) {
                            //判断哪个分页器此刻应该被激活
                            if(i==(current-1)) {
                                customPaginationHtml += "<span class='swiper-pagination-customs swiper-pagination-customs-active'></span>";
                            } else {
                                customPaginationHtml += "<span class='swiper-pagination-customs'></span>";
                            }
                        }
                        return customPaginationHtml;
                    }

                },
            })
        },
        name:"",
        methods:{
        }
    }

</script>
<style scoped>
  @import url('../../assets/font/fransnana/iconfont.css');
.banner{
width:100%;
height:1.67rem;
overflow: hidden;
}
.banner img{
    width:100%;
    height:1.67rem;
}
.margintop{
  margin-top: 0.78rem;
}
/*包裹自定义分页器的div的位置等CSS样式*/
.swiper-pagination {
    bottom: 0;
    left: 0;
    width:100%;
    height:.15rem;
    text-align: right;
    padding-right:.08rem;
    box-sizing: border-box;
}

</style>

<style>

/*自定义分页器的样式，这个你自己想要什么样子自己写*/
.banner .swiper-container .swiper-pagination .swiper-pagination-customs{
    width:.07rem;
    height:.07rem;
    display:inline-block;
    background: #000;
    opacity: .3;
    margin-right:.05rem;
    border-radius:50%;
    z-index:10;
    border:1px solid #fff;
    vertical-align:top;
}
/*自定义分页器激活时的样式表现*/
.banner .swiper-container .swiper-pagination .swiper-pagination-customs-active {
    opacity:1;
    background: #000;
    border:1px solid #fff;
    z-index:10;
}
</style>
