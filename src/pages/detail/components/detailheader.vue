<template>
<div>
    <div class="container" @click="gallaryShow" >
        <swiper :options='swiperOption'>
            <swiper-slide>
                <div class="content-image"><img src="//img1.qunarzz.com/wugc/p224/201207/13/f40f8a9e4327658c93835fbb.jpg_600x330_d02d40d4.jpg" alt="图片加载中">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="content-image"><img src="http://img1.qunarzz.com/wugc/p216/201207/16/40e62ea907230da393835fbb.jpg_r_800x800_949f826e.jpg" alt="图片加载中">
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>           
        </swiper>
        <div class="content-text">
        <div class="messge1">成都大熊猫繁育研究基地(AAAA景区)</div>
        <div class="messge2">39</div>
        </div>
    </div>
      <common-gallary v-show="showw" @close="handclose"></common-gallary>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/gallary'
export default {
    name:'DetailHeader',
    data(){
        return{
            swiperOption:{
              loop:true,
              autoplay:3000
            },
            showw:false
        }
    },
    components:{
        CommonGallary
    },
    methods:{
        gallaryShow(){
        this.showw=true
        },
        handclose(){
        this.showw=false
        console.log(this.showw)
        }
    }
}
</script>
<style scoped>
.container{
    position: relative;
}
.content-image{
    overflow: hidden;
    width:375px;
    height: 200px;
    background-image: linear-gradient(top,rgba(0,0,0,0,),rgba(0,0,0,1));
}
.content-image img{
    width: 375px;
    height: 200px;
}
.content-text{
    width: 375px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
    top: 180px;
    padding-left: 10px;
}
.messge1{
    font-size: 14px;
    color: #fff;
    width: 275px;
}
.messge2{
    width:40px;
    color: #fff;
}
</style>