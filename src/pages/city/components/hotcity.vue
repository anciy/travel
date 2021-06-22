<template>
<div style="background:	#F5F5F5;">
    <div class="messg1">热门城市</div>
    <div class="container">
        <div v-for="item of hotcitylist" :key="item.id" @click="handleClick(item.cityname)">{{item.cityname}}</div>
    </div>
    <div class="messg1">字母排序</div>
    <div class="content">
        <div v-for="item of hotapllist" :key="item.id">{{item.apl}}</div>
    </div>
    <div class="messg1">A</div>
    <div class="contentcity">
    <div v-for="item of citylist" :key="item.id">{{item.city}}</div>
    </div>
    <div class="messg1">B</div>
    <div class="contentcity">
    <div v-for="item of citylist" :key="item.id">{{item.city}}</div>
    </div>
    <div class="messg1">C</div>
    <div class="contentcity">
    <div v-for="item of citylist" :key="item.id">{{item.city}}</div>
    </div>
    <div class="messg1">D</div>
    <div class="contentcity">
    <div v-for="item of citylist" :key="item.id">{{item.city}}</div>
    </div>
</div>
</template>
<script>
export default {
    name:"CityHot",
    props:{
        citydata:Array
    },
    data () {
        return {
            hotcitylist:[],
            hotapllist:[],
            citylist:[]
        }
    },
    methods:{
        handleClick(city){
            this.$store.commit("changCity",city)
           //不需要转发直接调用conmmit    this.$store.dispatch("changCity",city)
            this.$router.push('/')
        }
    },
    watch:{
        citydata:function () {
            this.hotcitylist=this.citydata[0];
            this.hotapllist=this.citydata[1];
            this.citylist=this.citydata[2]
        }
    }
}
</script>
<style scoped>
.messg1{
    font-size: 12px;
    color: #212121;
    padding-top: 12px;
    padding-left: 12px;
    padding-bottom: 12px;
}
.container{
    background: #fff;
    width: 375px;
    height: 180px;
    display: flex;
    flex-wrap: wrap;
}
.container div{
    height: 25%;
    width: 33%;
    text-align: center;
    line-height: 45px;
    border-bottom: 1px #cdcdcd solid;
    border-left: 1px #cdcdcd solid;
}
.container div:hover{
    background: #00bcd4; 
}
.content{
    height: 216px;
    width: 375px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    align-content:flex-start;
    margin: 0px;
}
.content div{
    height: 25%;
    width: 16%;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
    color: #212121;
}
.content div:hover{
    background: #00bcd4;
}
.contentcity{
    width: 375px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    align-content:flex-start;
}
.contentcity div{
    height: 50px;
    width: 24.73%;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #212121;
    border-bottom: 1px #cdcdcd solid;
    border-right: 1px #cdcdcd solid;
}
.contentcity div:hover{
    background: #00bcd4;
}
</style>