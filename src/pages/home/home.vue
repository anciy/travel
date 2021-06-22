<template>
<div>
    <home-header></home-header>
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
import { mapState } from 'vuex'
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
         lastcity:'',
         hotlist:[],
         lovelist:[],
         swiperlist:[],
         weeklist:[]
     }
 },
 computed:{
     ...mapState(['city'])
 },
 methods:{
     getHomeData (){
         axios.get("/static/imooc.json?city="+this.city).then((res)=>{
             res=res.data.data
             this.hotlist=res.hotlist;
             this.lovelist=res.lovelist;
             this.swiperlist=res.swiperlist;
             this.weeklist=res.weeklist;
         })
     }
 },
 activated(){
     if(this.lastcity!=this.city){
         this.lastcity=this.city
         this.getHomeData()
     }
 },

 mounted (){
     this.getHomeData();
     this.lastcity=this.city
 }   
}

</script>
<style scoped>

</style>