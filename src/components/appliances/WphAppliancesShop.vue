<template>
    <div>
      <div>
        <div class="title">
          <a href=""><img :src="shops.title" alt=""></a>
        </div>
        <div>
          <div class="box_top">
            <a href=""><img :src="shops.picTop" alt=""></a>
          </div>
          <div class="box_bottom">
            <a href="" v-for="(i,index) in shops.picBottom" :key="index"><img :src="shops.picBottom[index]" alt=""></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WphAppliancesShop",
        props:["shops"]
    }
</script>

<style scoped>
  img{
    display: block;
  }
.title img{
  width: 100%;
  height: .575rem;
}
  .box_top{
    width: 100%;
  }
  .box_top img{
    width: 100%;
  }
  .box_bottom{
    display: flex;
    width: 100%;
  }
  .box_bottom a{
    flex: 1;
  }
  .box_bottom a img{
    width: 100%;
  }
</style>
