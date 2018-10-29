import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
let mytimer=null
let store = new Vuex.Store({
    state:{
      mtimes:20,
      stimes:0,
      carshop:[],
      showTranspond:false,
      scrollTop:0,
      path:"/"
    },
  mutations:{
      TIMEDONW:(stage,args)=>{
        if(mytimer==null){
          mytimer=setInterval(()=>{
            stage.stimes--;
            if(stage.stimes.toString().length<=1){
              stage.stimes="0"+stage.stimes;
            }
            if(stage.mtimes.toString().length<=1){
              stage.mtimes="0"+stage.mtimes;
            }
            if(stage.stimes<0){
              stage.stimes=59;
              stage.mtimes--;
            }
            if(stage.mtimes<0){
              stage.mtimes=59;
            }
            if(stage.carshop.length<1){
              window.clearInterval(mytimer)
              stage.mtimes=20
              stage.stimes=0
              mytimer=null
            }
            if(stage.mtimes<1){
              window.clearInterval(mytimer)
              stage.mtimes="连100块都不给我"
              stage.stimes=""
            }
          },1000);
        }else{
          return
        }
      },
      ADDNUM:(state)=>{
        if(state.showTranspond==false){
          state.showTranspond=true
        }else if(state.showTranspond==true){
          state.showTranspond=false
        }
      },
      CHANGESCROLL:(state)=>{
        state.scrollTop=100
      },
      ADDCARS:(stage,args)=>{
        let aa=0
        for(let i=0;i<stage.carshop.length;i++){
          if(stage.carshop[i].goodsname==args.goodsname){
            stage.carshop[i].goodsnumber++
            aa++
          }
        }
        if(aa==0){
          stage.carshop.push(args)
        }
      }
  },
  actions:{
      INCTIME:(store,args)=>{
        store.commit("TIMEDONW")
      },
      INCNUM:(store)=>{

        store.commit("ADDNUM")

      },
      INSCROLL:(store)=>{
        store.commit("CHANGESCROLL")
      },
      ADDCARSS:(store,args)=>{
        store.commit("ADDCARS",args)
      }
  },
  getters:{
      GETTIME:(stage)=>{
        return stage
      },
      GETNUM:(state)=>{
        return state.showTranspond
      },
      GESCROLL:(state)=>{
        return state.scrollTop
      },
      ADDCARCAR:()=>{
        return
      }
  }
})
export default store;
