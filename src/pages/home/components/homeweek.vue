<template>
<div style="background:	#F5F5F5">
  <div class="head">周末去哪儿</div>
  <div class="container" v-for="item of listdata" :key="item.id">
      <div><img :src="item.urlimag"/></div>
      <div class="messg1">{{item.messg1}}</div>
      <div class="messg2">{{item.messg2}}</div>
  </div>
</div>    
</template>
<script>
export default {
    name:"HomeWeek",
    data (){
        return{
            listdata:[
                {
                urlimag:"http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg",
                messg1:"成都必打卡",
                messg2:"成都的标志，也是现代人对老成都的记忆",
                id:"001"
                },
                {
                urlimag:"http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg",
                messg1:"摩崖石刻造像",
                messg2:"诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选",
                id:"002"},
                {
                urlimag:"http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg",
                messg1:"成都文艺范儿",
                messg2:"《成都》唱火了这里，其实这儿不只有酒馆，还有很多文艺爆棚的地方",
                id:"003"},
                {
                urlimag:"http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg",
                messg1:"玩转主题乐园",
                messg2:"乐园，与青春作伴",
                id:"004"},
                {
                urlimag:"http://img1.qunarzz.com/sight/source/1507/e8/7afdd7b86bf778.jpg_r_640x214_c70adb31.jpg",
                messg1:"我的周末我做主",
                messg2:"在成都Hold各种长假短假",
                id:"005"}]
        }
    }
}
</script>
<style scoped>
.head{
    height: 30px;
    width: 100%;
    line-height: 30px;
    padding-left: 30px;
    font-size: 14px;
    color: #212121;
}
.container img{
    width: 375px;
    height: 140px;
}
.messg1 {
    font-size: 14px;
    color: #212121;
    padding-left: 15px;
    margin-bottom: 5px;
}
.messg2{
    font-size: 12px;
    color: #616161;
    padding-left: 15px;
    margin-bottom: 20px;
    margin-left: 0;
    width: 240px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
}
</style>