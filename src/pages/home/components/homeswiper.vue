<template>
<div class="container">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperlist" :key="item.id">
      <img :src="item.imgUrl"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <div class="position">
    <div class="content" style="border-right:1px #dcdcdc solid"><div class="iconfont icon">&#xe61b;定位失败</div></div>
    <div class="content"><div class="iconfont icon">&#xe844;旅游必备</div></div>
  </div>
</div>
</template>
<script>
export default {
    name:"HomeSwiper",
    data (){
        return{
            swiperOption:{
              pagination:'.swiper-pagination',
              loop:true,
             autoplay:3000
            },
            swiperlist:[
            {id:"0001",imgUrl:"http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg"},
            {id:"0002",imgUrl:"http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg"},
            {id:"0003",imgUrl:"http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg"}]
        }
    }
}
</script>
<style scoped>
.container{
  width: 375px;
  height: 200px;
}
.container >>> .swiper-pagination-bullet-active{
  background: #fff  !important
}
.position{
  height: 55px;
  width: 375px;
  display: flex;
  flex-direction: wrap;
  border-top: 2px #dcdcdc solid;
  border-bottom: 2px #dcdcdc solid;
  margin-top: -3px;
}
.content{
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content div {
  width: 100px;
}
.icon{
  width:25px;
  font-size: 100%;
  color: #666;
}
</style>