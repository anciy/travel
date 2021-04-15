<template>
<div style="background:	#F5F5F5">
    <div class="container">
        <div class="iconfont hot"><span style="color:red">&#xe629;</span><span class="messge1">本周热门榜单</span></div>
        <div class="messge2 list"><span>全部榜单</span><span class="iconfont" style="margin-left:1px">&#xe797;</span></div>
    </div>
    <div class="content">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of hotlist" :key="item.id">
               <img :src="item.urlimage"/>
               <div class="messge3">{{item.name}}</div>
               <div class="messge4">
                   <span style="width:70px;font-size:14px"><span style="color:rgb(255,206,155);margin-right:3px">{{item.pirce}}</span>{{item.common}}</span>
                </div>
            </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</div>
</template>
<script>
export default {
    name:"HomeHot",
    props:{
        hotlist:Array
    },
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
    padding-top: 15px;
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
    height: 155px;
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
.messge3 {
    font-size: 14px;
    width: 100px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    text-align: center;
}
.messge4{
    width: 100px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>