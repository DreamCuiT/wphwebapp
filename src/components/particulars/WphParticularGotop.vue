<template>
    <div class="goTop" @click="goTop" v-show="isshow"></div>
</template>

<script>
    export default {
        name: "WphParticularGotop",
        data(){
          return{
            isshow:false
          }
        },
        methods:{
          goTop(){
            document.documentElement.scrollTop=0;
          },
          gotopShow(){
            if(document.documentElement.scrollTop<=800){
              this.isshow=false
            }else if(document.documentElement.scrollTop>800){
              this.isshow=true
            }
          }
        },
        mounted(){
          window.addEventListener('scroll', this.gotopShow)
        }
    }
</script>

<style scoped>
.goTop{
  width: .44rem;
  height: .44rem;
  border-radius: 50%;
  position: fixed;
  bottom: .8rem;
  right: .2rem;
  background: rgba(34,34,34,.9) url("../../../static/img/particulars/gotop_icon.jpg") no-repeat center;
}
</style>
