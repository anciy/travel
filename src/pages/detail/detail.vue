<template>
<div>
    <detail-header></detail-header>
    <detail-nav></detail-nav>
    <div style="height:130vh"></div>
</div>
</template>
<script>
import DetailHeader from './components/detailheader'
import DetailNav from './components/detailnav'
export default {
    name:'Detail',
    components:{
        DetailHeader,
        DetailNav,
    }
}
</script>