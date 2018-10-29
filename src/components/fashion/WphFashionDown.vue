<template>
    <div v-show="showSelect">
      <div class="shopBox" v-for="item in lists">
        <router-link :to="{path:'/listpage'}">
          <img v-bind:src="item.banner" alt="">
          <div class="shopBoxDown">
            <div class="shopBoxDownOne">
              <div class="sbdLeft">
                <div class="discount">
                  <span>{{item.discount}}</span>
                  <span>折起</span>
                </div>
                <div class="shopName">
                  <p>{{item.name}}</p>
                </div>
              </div>
              <div class="sbdRight">
                剩<span>{{item.days}}</span>天
              </div>
            </div>
            <div class="shopBoxDownTwo" v-if="item.more.length>1">
              <img src="../../../static/img/fashion/icon-pms-11e8ab1678.png" alt="">
              <p>{{item.more}}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WphFashionDown",
      data() {
        return {
          lists:[],
          showSelect: true
        }
      },
      watch: {
      },
      created() {
        this.res()
      },
      mounted() {
        this.togle()
      },
      methods: {
        res() {
          this.$http.get('../../../static/fashion.json').then(response => {
            this.lists = response.data
            console.log(this.lists)
          }, response => {
            console.log('数据加载失败')
          })
        },
        togle() {
          this.$root.Bus.$on('showSelect', showSelect => {
            this.showSelect = showSelect
          })
        }
      }
    }
</script>

<style scoped>
.shopBox{
  width: 100%;
  padding-top: 0.1rem;
  background: #f3f4f5;
}
.shopBox img{
  width: 100%;
  height: 1.8rem;
  display: block;
}
.shopBoxDown{
  padding: 0.1rem 0.1rem 0.15rem 0.1rem ;
  background: white;
}
.shopBoxDownOne{
  display: flex;
  justify-content: space-between;
}
.sbdLeft{
  font-weight: 700;
  color: #222;
  display: flex;
  font-size: 0.14rem;
}
.sbdLeft span{
  display: block;
}
.shopName{
  width: 2.4rem;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.discount{
  display: flex;
  margin-right: 0.1rem;
}
.sbdRight{
  font-size: 0.12rem;
  color: #98989f;
  line-height: 0.19rem;
}
  .shopBoxDownTwo{
    display: flex;
    margin-top: 0.07rem;
  }
  .shopBoxDownTwo img{
    width: 0.19rem;
    height: 0.19rem;
    display: block;
    margin-right: 0.05rem;
  }
.shopBoxDownTwo p{
  font-size: 0.12rem;
  color:#5771a8;
}
</style>
