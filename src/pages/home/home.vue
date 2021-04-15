<template>
<div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperlist="swiperlist"></home-swiper>
    <home-hot :hotlist="hotlist"></home-hot>
    <home-love :lovelist="lovelist"></home-love>
    <home-week :weeklist="weeklist"></home-week>
    <home-bottom></home-bottom>
</div>
</template>
<script>
import HomeHeader from './components/homeheader'
import HomeSwiper from './components/homeswiper'
import HomeHot from './components/homehot'
import HomeLove from './components/homelove'
import HomeWeek from './components/homeweek'
import HomeBottom from './components/homebottom'
import axios from 'axios'
export default {
 name:"Home",
 components:{
    HomeHeader,
    HomeSwiper,
    HomeHot,
    HomeLove,
    HomeWeek,
    HomeBottom
 },
 data (){
     return{
         city:" ",
         hotlist:[],
         lovelist:[],
         swiperlist:[],
         weeklist:[]
     }
 },
 methods:{
     getHomeData (){
         axios.get("/static/imooc.json").then((res)=>{
             res=res.data.data
             this.city=res.city;
             this.hotlist=res.hotlist;
             this.lovelist=res.lovelist;
             this.swiperlist=res.swiperlist;
             this.weeklist=res.weeklist;
         })
     }
 },
 mounted (){
     this.getHomeData()
 }   
}

</script>
<style scoped>

</style>