<template>
<div>
    <city-header></city-header>
    <city-hot :citydata="citydata"></city-hot>
</div>    
</template>
<script>
import CityHeader from "./components/cityheader"
import CityHot from "./components/hotcity"
import axios from "axios"
export default {
    name:"City",
    components:{
    CityHeader,
    CityHot
  },
  data(){
    return{
      citydata:[],
      hotcitylist:[],
      hotapllist:[],
      CityHot:[]
    }
  },
  methods: {
    getCityData (){
      axios.get("/static/imooc.json").then((res)=>{
        res=res.data.data;
        this.hotcitylist = res.hotcitylist;
        this.hotapllist=res.hotapllist;
        this.citylist=res.citylist;
        this.citydata=[this.hotcitylist,this.hotapllist,this.citylist]
      })
    }
  },
  mounted () {
    this.getCityData ();
  }
}
</script>
<style scoped>

</style>