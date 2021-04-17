<template>
<div style="background:	#F5F5F5;">
    <div class="messg1">热门城市</div>
    <div class="container">
        <div v-for="item of hotlist" :key="item.id">{{item.cityname}}</div>
    </div>
    <div class="messg1">字母排序</div>
    <div class="content">
        <div v-for="item of hotlistapl" :key="item.id">{{item.apl}}</div>
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
    data() {
        return{
            hotlist:[
                {cityname:"北京",
                id:"01"},
                {cityname:"上海",
                id:"02"},
                {cityname:"三亚",
                id:"03"},
                {cityname:"丽江",
                id:"04"},
                {cityname:"杭州",
                id:"05"},
                {cityname:"广州",
                id:"06"},
                {cityname:"成都",
                id:"07"},
                {cityname:"深圳",
                id:"08"},
                {cityname:"苏州",
                id:"09"},
                {cityname:"桂林",
                id:"010"},
                {cityname:"西安",
                id:"011"},
                {cityname:"厦门",
                id:"012"}],
            hotlistapl:[
                {apl:"A",id:"1"},{apl:"B",id:"2"},{apl:"C",id:"3"},{apl:"D",id:"4"},
                {apl:"E",id:"5"},{apl:"F",id:"6"},{apl:"G",id:"7"},{apl:"H",id:"8"},
                {apl:"I",id:"9"},{apl:"J",id:"10"},{apl:"K",id:"11"},{apl:"L",id:"12"},
                {apl:"M",id:"13"},{apl:"N",id:"14"},{apl:"O",id:"15"},{apl:"P",id:"16"},
                {apl:"Q",id:"17"},{apl:"R",id:"18"},{apl:"S",id:"19"},{apl:"T",id:"20"},
                {apl:"U",id:"21"},{apl:"V",id:"22"}],
            citylist:[
                {city:"阿克苏地区",id:"1"},{city:"阿拉尔",id:"2"},{city:"阿拉尔",id:"3"},{city:"阿拉尔",id:"4"},
                {city:"阿拉尔",id:"5"},{city:"阿拉尔",id:"6"},{city:"阿拉尔",id:"7"},{city:"阿拉尔",id:"8"}]
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