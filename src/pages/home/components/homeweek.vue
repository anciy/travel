<template>
<div style="background:	#F5F5F5">
  <div class="head">周末去哪儿</div>
  <div class="container" v-for="item of weeklist" :key="item.id">
      <div><img :src="item.urlimag"/></div>
      <div class="messg1">{{item.messg1}}</div>
      <div class="messg2">{{item.messg2}}</div>
  </div>
</div>    
</template>
<script>
export default {
    name:"HomeWeek",
    props:{
        weeklist:Array
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