<template>
<div>
    <city-header></city-header>
    <city-hot></city-hot>
</div>    
</template>
<script>
import CityHeader from "./components/cityheader"
import CityHot from "./components/hotcity"
export default {
    name:"City",
    components:{
    CityHeader,
    CityHot
  }
}
</script>
<style scoped>

</style>