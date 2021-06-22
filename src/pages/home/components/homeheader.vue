<template>
    <div class="container">
        <div class="iconfont icon">&#xe743;</div>
        <div class="search">
            <div class="iconfont" style="color:#dcdcdc;width:35px">&#xe76c;</div>
           <div class="searchmessge">输入城市/景点/游玩主题</div>
        </div>
        <div class="iconchengdu">
            <router-link to="/city" class="messge">
            <span class="messge">{{this.city}}</span>
            <span class="iconfont">&#xe750;</span>
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:"HomeHeader",
    computed:{
        ...mapState(['city'])
    }
}
</script>
<style scoped>
 .container{
     height: 45px;
     width: 375px;
     background: rgb(0, 188, 212);
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
 .search{
     border-radius:5px;
     width: 260px;
     height: 30px;
     background: #fff;
     display: flex;
     justify-content: space-around;
     align-items: center;
 }
 .searchmessge{
     color: #dcdcdc;
     font-size: 14px;
     background-color: #fff;
 }
 .icon {
     width: 25px;
     padding-left: 10px;
 }
 .iconfont{
     font-size: 140%;
     color: #fff;
     line-height: 30px;
     
 }
 .iconchengdu{
     width: 60px;
     color: #fff;
     display: flex;
     align-items: center;
 }
 .messge{
     font-size: 14px;
     text-decoration: none;
     color: #fff;
 }
</style>