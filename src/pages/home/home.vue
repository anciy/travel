<template>
<div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-hot></home-hot>
    <home-love></home-love>
    <home-week></home-week>
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
export default {
 name:"Home",
 components:{
    HomeHeader,
    HomeSwiper,
    HomeHot,
    HomeLove,
    HomeWeek,
    HomeBottom
 }    
}
</script>
<style scoped>

</style>