<template>
<div class="container">
    <div class="messgecity">
        城市选择
        <router-link to="/"><span class="iconfont icon">&#xe743;</span></router-link>
    </div>
    <div class="content">
        <div> <div id="messg">境内</div></div>
        <div>境外·港澳台</div>
    </div>
</div>    
</template>
<script>
export default {
    name:"CityHeader"
}
</script>
<style scoped>
.container {
    height: 70px;
    width: 375px;
    background: #00bcd4;

}
.messgecity {
    text-align: center;
    position: relative;
    padding-top: 10px;
    color: #fff;
}
.icon {
    width: 20px;
    font-size: 30px;
    position: absolute;
    color: #fff;
    top: 5px;
    left: 5px;
}
.content {
    margin: 3px auto;
    width: 275px;
    height: 25px;
    display: flex;
    justify-content: center;
}
.content div{
    width: 50%;
    background: #fff;
    text-align: center;
    line-height: 25px;
    color: #00bcd4;
    font-size: 14px;
}
#messg{
    margin: 1.8px auto;
    width:130px;
    height:22px;
    background: #00bcd4;
    line-height: 22px;
    color: #fff;
}
</style>