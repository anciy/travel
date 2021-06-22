<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style scoped>
 #app{
   border: 1px #dcdcdc solid;
 }
</style>