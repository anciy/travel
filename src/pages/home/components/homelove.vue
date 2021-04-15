<template>
    <div style="background:	#F5F5F5;">
        <div class="head"><span class="iconfont" style="color:red;width:15px">&#xe621;</span>猜你喜欢</div>
        <div v-for="item of listdata" :key="item.id">
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
    data () {
        return {
            listdata:[
                {urlimg:"http://img1.qunarzz.com/wugc/p224/201207/13/f40f8a9e4327658c93835fbb.jpg_200x200_484bc04f.jpg",
                 name:"成都大熊猫繁育研究基地",
                 diss:"311410条评论",
                 cost:"￥52.0",
                 common:"起",
                 place:"成华区",
                 text:"看！熊猫宝宝在向你招手呢",
                 id:"001"},
                {urlimg:"http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_200x200_c26fb243.jpg",
                 name:"都江堰",
                 diss:"81804条评论",
                 cost:"￥40.0",
                 common:"起",
                 place:"都江堰市",
                 text:"气势磅礴的“世界水利文化鼻祖”",
                 id:"002"},
                {urlimg:"http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg",
                 name:"青城山",
                 diss:"40975条评论",
                 cost:"￥78",
                 common:"起",
                 place:"都江堰市",
                 text:"青城山下白素贞，洞中千年修此身",
                 id:"003"},
                {urlimg:"http://img1.qunarzz.com/sight/p0/1704/dc/dcc530fecc5e41c3a3.img.jpg_200x200_c0f73841.jpg",
                 name:"国色天乡·陆地乐园",
                 diss:"21296条评论",
                 cost:"￥89.7",
                 common:"起",
                 place:"国色天乡",
                 text:"镇园之宝眼镜蛇过山车",
                 id:"004"},
                {urlimg:"http://img1.qunarzz.com/sight/p0/1901/18/18a13d3f2c02668a3.img.jpg_200x200_16e09455.jpg",
                 name:"天堂岛海洋乐园",
                 diss:"10805条评论",
                 cost:"￥135",
                 common:"起",
                 place:"武侯区",
                 text:"世界上超大的室内人造海洋",
                 id:"005"},
                {urlimg:"http://img1.qunarzz.com/sight/p0/201307/23/1d34f4bb7dc4cad3c8d65eac.jpg_200x200_fc255152.jpg",
                 name:"成都动物园",
                 diss:"41065条评论",
                 cost:"￥20",
                 common:"起",
                 place:"成华区",
                 text:"",
                 id:"006"},
                {urlimg:"http://img1.qunarzz.com/sight/p64/201211/04/9173ff9f33e97f3193835fbb.jpg_200x200_bfc9ee53.jpg",
                 name:"杜甫草堂",
                 diss:"32004条评论",
                 cost:"￥47",
                 common:"起",
                 place:"青羊区",
                 text:"万里桥西一草堂，百花潭水即沧浪",
                 id:"007"},
                {urlimg:"http://img1.qunarzz.com/sight/p0/2006/24/24a5b9220b71f93ca3.img.jpg_200x200_2b95f509.jpg",
                 name:"成都融创雪世界",
                 diss:"3721条评论",
                 cost:"433",
                 common:"起",
                 place:"3721条评论",
                 text:"",
                 id:"008"}]
        }
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