<template>
    <div class="box">
      <div class="clickTop" @click="xiaoshi"></div>
      <div class="address">
        <h3 class="title">修改收货地址</h3>
        <ul class="uls clearfix">
          <li v-for="(data,index) in ininData" :key="index" :class="data.moren" @click="dianji(index)">{{data.text}}</li>
        </ul>
        <div class="addressBox">
          <div class="innerBox" v-show="ininData[0].show">
            <div class="sheng" v-for="(i,index) in this.area.provinces" @click="chclick(index)">{{i.pname}}</div>
          </div>
          <div class="innerBox" v-show="ininData[1].show">
            <div class="shi" v-for="(k,index) in this.shi" @click="chshi(index)">{{k.cname}}</div>
          </div>
          <div class="innerBox" v-show="ininData[2].show">
            <div class="qu" v-for="(n,index) in this.qu" @click="chqu(index)">{{n.areaname}}</div>
          </div>
          <div class="innerBox" v-show="ininData[3].show">
            <div class="jiedao" v-for="(n,index) in this.jiedao" @click="chjiedao(index)">{{n}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
      name: "WphParticularAddress",
      props:["area"],
      data(){
        return{
          "ininData":
            [{
                text:"省",
                "moren":"isclick",
              "show":true
              },
              {
                text:"市",
                "moren":"noclick",
                "show":false
              },
              {
                text:"区",
                  "moren":"noclick",
                "show":false
              },
              {
                text:"街道",
                "moren":"noclick",
                "show":false
              }],
          shi:[],
          qu:[],
          jiedao:[],
          mysheng:"",
          myshi:"",
          myqu:"",
          myjiedao:""
        }
      },
      methods:{
        xiaoshi(){
          this.$emit('addresschange', false);
        },
        dianji(index){
          for(let i in this.ininData){
            this.ininData[i].moren="noclick";
            this.ininData[i].show=false;
          }
          this.ininData[index].moren="isclick";
          this.ininData[index].show=true;
        },
        chclick(index){
          let a=document.getElementsByClassName("sheng");
          for(let i=0;i<a.length;i++){
            a[i].style.border="1px solid #97979e";
          }
          event.target.style.border="1px solid #b50064";
          this.mysheng=event.target.innerHTML;
          this.shi=this.area.provinces[index].cities;

          this.dianji(1)
        },
        chshi(index){
          let s=document.getElementsByClassName("shi");
          for(let i=0;i<s.length;i++){
            s[i].style.border="1px solid #97979e";
          }
          event.target.style.border="1px solid #b50064";
          this.myshi=event.target.innerHTML;
          this.qu=this.shi[index].areas;
          // console.log(this.shi[index].areas)
          this.dianji(2)
        },
        chqu(index){
          let s=document.getElementsByClassName("qu");
          for(let i=0;i<s.length;i++){
            s[i].style.border="1px solid #97979e";
          }
          event.target.style.border="1px solid #b50064";
          this.myqu=event.target.innerHTML;
          this.jiedao=this.qu[index].streets
          this.dianji(3)
        },
        chjiedao(index){
          let s=document.getElementsByClassName("jiedao");
          for(let i=0;i<s.length;i++){
            s[i].style.border="1px solid #97979e";
          }
          event.target.style.border="1px solid #b50064";
          this.myjiedao=event.target.innerHTML;
          this.$emit('getaddress', this.mysheng+this.myshi+this.myqu+this.myjiedao)
          this.$emit('hide', false)
        }
      }
    }
</script>

<style scoped>
  .box{
    position: fixed;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .clickTop{
    flex: 1;
  }
  .address{
    width: 100%;
    height: 4.45rem;
    background: white;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
  }
  .title{
    font-size: .18rem;
    font-weight: 100;
    line-height: .57rem;
    text-align: center;
  }
  .uls{
    width: 100%;
    display: flex;
    height: .27rem;
    margin-bottom: .15rem;
  }
  .uls li{
    flex: 1;
    text-align: center;
    font-size: .14rem;
    line-height: .27rem;
    height: .27rem;
    background: white;
  }
  .clearfix::after {
    content: ".";
    clear: both;
    display: block;
    overflow: hidden;
    font-size: 0;
    height: 0;
  }
  .noclick{
    border-bottom: 1px solid #cbcbcb;
    color: #585c64;
  }
  .isclick{
    border-bottom: 1px solid #b50064;
    color: #b50064;
  }
  .addressBox{
    flex: 1;
    padding: .1rem .1rem;
    overflow: scroll;
  }
  .sheng,.shi,.qu,.jiedao{
    width: 1rem;
    height: .3rem;
    border:1px solid #97979e;
    font-size: .14rem;
    border-radius: 3px;
    text-align: center;
    line-height: .3rem;
    margin: .08rem .08rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .yoursheng{
    border:1px solid #e33593;
  }
  .notyoursheng{
    border:1px solid #97979e;
  }
  .innerBox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow-y: scroll;
  }
</style>
