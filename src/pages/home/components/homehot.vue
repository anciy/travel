<template>
<div>
    <div class="container">
        <div class="iconfont hot"><span style="color:red">&#xe629;</span><span class="messge1">本周热门榜单</span></div>
        <div class="messge2 list"><span>全部榜单</span><span class="iconfont" style="margin-left:1px">&#xe797;</span></div>
    </div>
    <div class="content">
        <swiper :options="swiperOption">
            <swiper-slide data-history="slide1">
               <img src="http://img1.qunarzz.com/wugc/p224/201207/13/f40f8a9e4327658c93835fbb.jpg_250x250_d11dc56f.jpg"/>
            </swiper-slide>
            <swiper-slide data-history="slide1">
               <img src="http://img1.qunarzz.com/sight/p0/1704/dc/dcc530fecc5e41c3a3.img.jpg_250x250_dafb6d04.jpg"/>
            </swiper-slide>
            <swiper-slide data-history="slide1">
               <img src="http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_250x250_419e0690.jpg"/>
            </swiper-slide>
            <swiper-slide data-history="slide1">
               <img src="http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_250x250_986e4594.jpg"/>
            </swiper-slide>
            <swiper-slide data-history="slide1">
               <img src="http://img1.qunarzz.com/sight/p0/1907/e0/e0e2a3fdbe478eaba3.img.jpg_250x250_3844e028.jpg"/>
            </swiper-slide>
            <swiper-slide data-history="slide1">
               <img src="http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_250x250_427ee986.jpg"/>
            </swiper-slide>
            <swiper-slide data-history="slide1">
               <img src="http://img1.qunarzz.com/sight/p64/201211/04/9173ff9f33e97f3193835fbb.jpg_250x250_9b1fc434.jpg"/>
            </swiper-slide>
            <swiper-slide data-history="slide1">
               <img src="http://img1.qunarzz.com/sight/p0/2009/7b/7b3ed00b25af6e01a3.img.jpg_250x250_9f10ce44.jpg"/>
            </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</div>
</template>
<script>
export default {
    name:"HomeHot",
    data (){
        return{
           swiperOption:{
                slidesPerView : 3.5,
           },
        }
    }
}
</script>
<style scoped>
.container{
    height:35px;
    margin-top: 10px;
    width: 375px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.hot{
    width: 140px;
    height: 35px;
    margin: 0px;
    padding-left: 20px;
}
.list{
    width: 65px;
    height: 35px;
    margin: 0px;
    padding-right: 10px;
}
.messge1{
    font-size: 16px;
}
.messge2{
    font-size: 10px;
}
.content{
    height: 170px;
    width: 375px;
 
}
.content swiper-slide{
    height: 165px;
    width: 115px;
}
.content img {
    width: 100px;
    height: 100px;
}
.item img {
    width: 100px;
    height: 100px;
}
</style>