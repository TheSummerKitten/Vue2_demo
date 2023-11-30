<template>
  <div class="app">
    <!-- <h2>搜索关键字:{{ $route.query.key }}</h2>
    <p>您已经搜索了{{ $route.query.count }}次</p> -->
    <h2>搜索关键字:{{ $route.params.key }}</h2>
    <p>您已经搜索了{{ $route.params.count }}次</p>
  </div>
</template>

<script>
export default {
    beforeRouteEnter(to,from,nextTick){
        nextTick(vm=>{
            vm.key = to.params.key
            vm.count = to.params.count
        })
    }
}
</script>

<style>
h2{
    text-align: center;
}
p{
    text-align: center;
}
</style>