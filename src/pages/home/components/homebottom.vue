<template>
<div class="container">
    <div class="messg1">票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</div>
    <div>
        <a href="">登录</a><a href="">我的订单</a><a href="">最近浏览</a><a href="">关于我们</a>
    </div>
    <div class="messg2"><span>触屏版</span><span>电脑版</span></div>
    <div class="messg3">Qunar 京ICP备05021087意见反馈</div>
</div>    
</template>
<script>
export default {
    name:"HomeBottom"
}
</script>
<style scoped>
.container {
    height: 160px;
    background:	#F5F5F5;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    text-align: center;
}
.messg1{
    font-size: 12px;
    color: #616161;
}
.container a{
    margin-left: 10px;
    color: #25a4bb;
}
.messg2 span{
    margin-right: 10px;
    font-size :14px;
}
.messg3 {
    font-size: 14px;
    color: #949494;
}
</style>