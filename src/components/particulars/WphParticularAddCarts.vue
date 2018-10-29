<template>
    <div class="box">
      <router-link :to="{path:'/car'}">
        <div class="carts" v-bind:class="{'carstwo':carcar}">
          <div class="carsbox" v-show="carcar">
             <span>
            {{this.$store.state.mtimes}}:{{this.$store.state.stimes}}
          </span>
            <p>{{nums}}</p>
          </div>
        </div>
      </router-link>
      <div class="addCarts" @click="showss"><div @click="addscars();addgoods()">加入购物车</div></div>
      <img id="img" ref="myimg" :src="particulars[0]" v-show="picmove">
    </div>
</template>

<script>
    export default {
        name: "WphParticularAddCarts",
        data(){
          return{
            carcar:true,
            nums:null,
            picmove:false
          }
        },
        props:["addscars","particulars"],
        mounted(){
          this.showss()
          this. shopnums()
        },
        methods:{
          showss(){
            console.log(1)
            if(this.$store.state.carshop.length<1){
              this.carcar=false
            }else if(this.$store.state.carshop.length>0){
              this.carcar=true
            }
            this.addd()
          },
          shopnums(){
            this.nums=0
            for(let i=0;i<this.$store.state.carshop.length;i++){
              this.nums+=this.$store.state.carshop[i].goodsnumber
            }
          },
          addd(){
            this.nums++
          },
          addgoods(){
            this.picmove=true;
            let top=-3;
            let left=2;
            let width=0.9;
            let mytime=setInterval(()=>{
              top+=.17;
              left-=.1;
              width-=.03;
              this.$refs.myimg.style.top=top+"rem"
              this.$refs.myimg.style.left=left+"rem"
              this.$refs.myimg.style.width=width+"rem"
              this.$refs.myimg.style.height=width+"rem"
              if(top>=0&&left<=0){
                clearInterval(mytime)
                this.picmove=false;
              }
            },20)
          }
        }
    }
</script>

<style scoped>
.box{
  width: 3.55rem;
  height: .66rem;
  position: fixed;
  background: white;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .1rem;
}
  .carts{
    width: .86rem;
    height: .42rem;
    border: 1px solid #e7e7e7;
    background: url("../../../static/img/particulars/carts_icon.jpg") no-repeat center;

  }
  .carstwo{
    background: url("../../../static/img/particulars/carts_icon.jpg") no-repeat 0.16rem;
  }
  .carsbox{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .addCarts{
    width: 2.56rem;
    height: .44rem;
    background: #dd3d97;
    font-size: .15rem;
    color: white;
    font-weight: 600;
    line-height: .44rem;
    text-align: center;
  }
  .carts span {
    display: block;
    font-size: 0.14rem;
    width: 0.4rem;
    height: 100%;
    text-align: center;
    line-height: 0.44rem;
    margin-left: 0.35rem;
  }
  .carts p{
    width: 0.16rem;
    height: 0.16rem;
    position: absolute;
    left: 0.25rem;
    top: 0.04rem;
    background: #dd3d97;
    border-radius: 50%;
    font-size: 0.1rem;
    text-align: center;
    line-height: 0.16rem;
    color: white;
  }
  #img{
    width: .9rem;
    height: .9rem;
    border-radius: 50%;
    position: absolute;
    top: -3rem;
    left: 2rem;
  }
</style>
