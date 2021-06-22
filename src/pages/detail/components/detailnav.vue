<template>
<div class="container">
    <router-link tag="div" to="/" class="navback1 iconfont" v-show="showback">&#xe743;</router-link>
    <div class="navback2" v-show="!showback" :style="opacityStyle">
        <router-link tag="div" to="/" class="nav-icon iconfont">&#xe743;</router-link>
        <div class="nav-world">景点详情</div>
    </div>
</div>
</template>
<script>
export default {
    name:'DetailNav',
    data(){
        return{
            showback:true,
            opacityStyle:{
                 opacity:0
            }
        }
    },
    methods:{
        controlShow (e){
            let scrollHeigth=e.path[0].scrollingElement.scrollTop;
            if(scrollHeigth>=60){
                this.showback=false
                if(scrollHeigth<=180){
                   let opacity = scrollHeigth / 180
                   opacity= opacity>1 ? 1:opacity
                   this.opacityStyle={opacity}
                }
            }else{
                this.showback=true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.controlShow)
    },
    deactivated(){
        window.removeEventListener('scroll',this.controlShow)
    }
}
</script>
<style scoped>
.navback1{
    margin-left: 5px;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 35px;
    color: #fff;
    position: fixed;
    top: 15px;
    z-index: 1;
}
.navback2{
    position: fixed;
    top: 0px;
    height: 40px;
    display: flex;
    background:#00BFFF;
    z-index: 1;
}
.nav-icon{
    text-align: center;
    line-height: 40px;
    font-size: 30px;
    width: 80px;
    color: #fff;
}
.nav-world{
    padding-left:20px ;
    text-align: center;
    line-height: 40px;
    width: 180px;
    color: #fff;
}
</style>