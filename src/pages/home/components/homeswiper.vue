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
    props:{swiperlist:Array},
    data (){
        return{
            swiperOption:{
              pagination:'.swiper-pagination',
              loop:true,
             autoplay:3000
            }}
    }
}
</script>
<style scoped>
.container{
  background:#F5F5F5;
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