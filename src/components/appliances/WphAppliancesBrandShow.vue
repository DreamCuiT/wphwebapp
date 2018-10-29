<template>
  <div>
    <div class="brandShow">
      <a href=""><img :src="show.pic[index]" v-for="(i,index) in show.pic" :key="index"></a>
    </div>
    <div class="nav">
      <a href="#" v-for="(m,num) in show.navpic" :key="num" ><img :src="show.navpic[num]" alt=""></a>
    </div>
    <div>
      <a href=""><img :src="show.gif" class="gif"></a>
    </div>
  </div>
</template>

<script>
    export default {
      name:"WphAppliancesBrandShow",
      props:["show"],
    }
</script>

<style scoped>
  img{
    display: block;
  }
  .brandShow{
    width: 100%;
    height: 3.85rem;
    display: flex;
    flex-direction: column;
  }
  .brandShow img:nth-of-type(1){
    height: 3.5rem;
  }
  .brandShow img:nth-of-type(2){
    height: .35rem;
  }
  .nav{
    width: 100%;
    height: 2rem;
    background: yellow;
    display: flex;
    flex-wrap: wrap;
  }
  .nav a{
    width: .75rem;
    height: 1rem;
  }
  .nav a img{
    width: .75rem;
    height: 1rem;
  }

  .gif{
    width: 100%;
    height: .35rem;
  }
</style>
