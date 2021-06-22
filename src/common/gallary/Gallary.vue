<template>
    <div class="container" @click="handleclose">
        <div class="item-swiper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img src="http://img1.qunarzz.com/wugc/p59/201207/27/762b530b2ed2288293835fbb.jpg_r_800x800_7b6da46c.jpg"/>
                </swiper-slide>
                <swiper-slide>
                    <img src="http://img1.qunarzz.com/wugc/p59/201207/27/762b530b2ed2288293835fbb.jpg_r_800x800_7b6da46c.jpg"/>
                </swiper-slide>
            </swiper>
        </div>
        <div class="swiper-pagination"  slot="pagination"></div>  
    </div>
</template>
<script>
export default {
    name:'CommonGallary',
    data () {
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        handleclose (){
        this.$emit('close')
            console.log(1)
        }
    }
}
</script>
<style scoped>
.container{
    position: fixed;
    top: 3px;
    z-index: 2;
    background: #000;
    height: 60vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
}
.swiper-pagination{
    color: #fff;
}
</style>