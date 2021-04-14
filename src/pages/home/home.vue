<template>
<div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-hot></home-hot>
</div>
</template>
<script>
import HomeHeader from './components/homeheader'
import HomeSwiper from './components/homeswiper'
import HomeHot from './components/homehot'
export default {
 name:"Home",
 components:{
    HomeHeader,
    HomeSwiper,
    HomeHot,
 }    
}
</script>
<style scoped>

</style>