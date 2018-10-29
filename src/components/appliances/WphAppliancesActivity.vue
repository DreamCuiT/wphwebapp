<template>
    <div>
      <div class="title">
        <a href="#"><img :src="list[i].title" alt=""></a>
      </div>
      <div class="message">
        <p v-text="list[i].message"></p>
        <a href="" v-for="(i,d) in list[i].gif" :key="d"><img :src="i"></a>
      </div>
      <div class="detailedCom" v-for="(i,v) in list[i].detailedCom" :key="v">
        <router-link :to="{path:'/listpage'}">
          <img :src="i.pic">
          <div class="littleTit">
            <p v-text="i.msg"></p>
            <span v-text="i.day"></span>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WphAppliancesActivity",
        props:["list","i","detail"]
    }
</script>

<style scoped>
  img{
    display: block;
  }
.title{
  width: 100%;
}
  .title img{
    width: 100%;
  }
  .message{
    width: 100%;
    line-height: .25rem;
    font-size: .15rem;
    text-align: center;
    padding-top: .12rem;
  }
  .message a{
    width: 1.87rem;
    float: left;
  }
  .message a img{
    width: 100%;
  }
  .message a:last-child{
    width: 100%;
  }
  .detailedCom{
    width: 100%;
  }
  .detailedCom img{
    width:100%;
  }
  .detailedCom .littleTit{
    width: 100%;
    heigth:.55rem;
    display: flex;
    justify-content: space-between;
  }
  .detailedCom .littleTit p{
    font-size: .1rem;
    color: black;
    font-weight: 600;
    line-height: .55rem;
    margin-left: 3.1%;
  }
  .detailedCom .littleTit span{
    font-size: .06rem;
    color: #98989f;
    line-height: .55rem;
    margin-right: 3.1%;
  }
</style>
