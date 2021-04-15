<template>
    <div style="background:	#F5F5F5;">
        <div class="head"><span class="iconfont" style="color:red;width:15px">&#xe621;</span>猜你喜欢</div>
        <div v-for="item of lovelist" :key="item.id">
            <div class="container">
                <div style="width:105px;height:105px;position: relative;"><img  :src="item.urlimg"/><div class="expl">随买随用</div></div>
                <div style="width:235px;height:105px;display:flex;flex-direction:column;justify-content: space-around;">
                    <div class="name">{{item.name}}</div>
                    <div class="number">{{item.diss}}</div>
                    <div class="price">
                        <div><span style="font-size:18px;color:#ff8300">{{item.cost}}</span><span style="font-size:12px;color:#616161">{{item.common}}</span></div>
                        <div style="font-size:12px;color:#616161">{{item.place}}</div>
                    </div>
                </div>
            </div>
            <div class="bottom">{{item.text}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeLove",
    props:{
        lovelist:Array
    }
}
</script>
<style scoped>
.head{
    margin-top:10px; 
    
}
.container{
    width: 350px;
    height: 120px;
    display: flex;
    flex-direction: row;
    margin-top:10px; 
}
.container img{
    width: 100px;
    height: 100px;
}
.number{
    font-size: 12px;
    color:#616161;
}
.name {
    font-size: 16px;
    color: #212121;
}
.price {
    display: flex;
}
.bottom {
    text-align: center;
    font-size: 12px;
    color: #ff5555;
    border-bottom: 1px #fff solid;
}
.expl{
    width: 55px;
    height: 20px;
    font-size: 12px;
    color: #fff;
    line-height: 20px;
    text-align: center;
    background:#ff8300;
    border-radius: 5px;
    position: absolute;
    left: 0px;
    top: 0px;
}
</style>