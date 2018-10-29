import Vue from 'vue'
import Router from 'vue-router'
import WphPublic from '../page/WphPublic'
import appliances from '../page/appliances'
import WphShopCars from '../page/WphShopCars'
import WphFransnana from '../page/WphFransnana'
import WphListPage from '../page/WphListPage'
import Wphxiangqing from "../page/particulars"
import pages from "../page/page"
import goodsSort from "../page/goodsSort"
import goodsSearch from "../page/goodsSearch"
import wphGoodsBrand from "../components/tao/WphGoodsBrand"
import wphGoodsSort from  "../components/tao/WphGoodsSort"
import childFiltr from "../page/childFiltr"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/fashion',
      name: 'WphPublic',
      component: WphPublic
    },
    {
      path: '/appliances',
      name: 'appliances',
      component: appliances
    },
    {
      path: '/car',
      name: 'WphShopCars',
      component: WphShopCars
    },
    {
      path: '/mother',
      name: 'WphFransnana',
      component: WphFransnana
    },
    {
      path: '/listpage',
      name: 'WphListPage',
      component: WphListPage
    },
    {
      path: '/xiangqing',
      name: 'Wphxiangqing',
      component: Wphxiangqing
    },
    {
      path: '/',
      name: 'pages',
      component: pages
    },
    {
      path: '/sorts',
      // name: 'goodsSort',
      component: goodsSort,
      children:[{
        path:"/",
        name:"wphGoodsSort",
        component:wphGoodsSort
      },{
        path:"/brand",
        name:"wphGoodsbrand",
        component:wphGoodsBrand
      }]
    },
    {
      path: '/search',
      name: 'goodsSearch',
      component: goodsSearch
    },
    {
      path:'/childFiltr',
      name:'childFiltr',
      component:childFiltr
    }
  ]
})
