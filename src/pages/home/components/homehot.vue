<template>
<div style="background:	#F5F5F5">
    <div class="container">
        <div class="iconfont hot"><span style="color:red">&#xe629;</span><span class="messge1">本周热门榜单</span></div>
        <div class="messge2 list"><span>全部榜单</span><span class="iconfont" style="margin-left:1px">&#xe797;</span></div>
    </div>
    <div class="content">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of listdata" :key="item.id">
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
    data (){
        return{
           swiperOption:{
                slidesPerView : 3.5,
           },
           listdata:[
           {urlimage:"http://img1.qunarzz.com/wugc/p224/201207/13/f40f8a9e4327658c93835fbb.jpg_250x250_d11dc56f.jpg",
           name:"成都大熊猫繁育基地",
           pirce:"￥52.0",
           common:"起",
           id:"001"},
           {urlimage:"http://img1.qunarzz.com/sight/p0/1704/dc/dcc530fecc5e41c3a3.img.jpg_250x250_dafb6d04.jpg",
           name:"国色天乡·陆地乐园",
           pirce:"￥99.5",
           common:"起",
           id:"002"},
           {urlimage:"http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_250x250_419e0690.jpg",
           name:"青城山",
           pirce:"￥78.0",
           common:"起",
           id:"003"},
           {urlimage:"http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_250x250_986e4594.jpg",
           name:"都江堰",
           pirce:"￥40.0",
           common:"起",
           id:"004"},
           {urlimage:"http://img1.qunarzz.com/sight/p0/201307/23/1d34f4bb7dc4cad3c8d65eac.jpg_250x250_cdffd3ff.jpg",
           name:"成都动物园",
           pirce:"￥25.0",
           common:"起",
           id:"005"},
           {urlimage:"http://img1.qunarzz.com/sight/p0/1907/e0/e0e2a3fdbe478eaba3.img.jpg_250x250_3844e028.jpg",
           name:"黄龙溪欢乐田园",
           pirce:"￥90.0",
           common:"起",
           id:"006"},
           {urlimage:"http://img1.qunarzz.com/sight/p0/1810/64/64d283f7f29499bda3.img.jpg_250x250_6543a497.jpg",
           name:"成都大熊猫繁育基地",
           pirce:"￥44.0",
           common:"起",
           id:"007"},
           {urlimage:"http://img1.qunarzz.com/sight/p0/2009/7b/7b3ed00b25af6e01a3.img.jpg_250x250_9f10ce44.jpg",
           name:"成都融创乐园",
           pirce:"￥148.0",
           common:"起",
           id:"008"}]
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