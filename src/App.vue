<template>
    <div id="app">
        <header>
            <button @click="goHome">首页</button>
            <button @click="goSearch">搜索页</button>
        </header>
        <div class="nav">
            <!-- <a href="#/FindMusic">发现音乐</a>
            <a href="#/MyMusic">我的音乐</a>
            <a href="#/MyFriends">朋友</a> -->
            <router-link to="/FindMusic">发现音乐</router-link>
            <router-link to="/MyMusic">我的音乐</router-link>
            <router-link to="/MyFriends">朋友</router-link>

        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>


export default {
    name: 'App',
    components: {
        
    },
    methods:{
        goSearch(){
             //两种写法
            // this.$router.push('/searchPage')
            // this.$router.push({
            //     path:'/searchPage'
            // })
            this.$router.push({
                name: 'search'
            })
        },
        goHome(){
            //这里如果是在主页的话点击会报错,需要修改router的对象原型
            this.$router.push('/')
        }
    }
}
</script>

<style>
header{
    width: 100%;
    height: 40px;
    border: 1px solid #333;
}
header > button{
    float: left;
    border: 1px solid #287e8a;
    width: 50px;
    height: 40px;
    background-color: blueviolet;
}

.nav {
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    text-align: center;
    background-color: #333;
    color: #ccc;
}

.nav>a {
    flex: 1;
    text-decoration: none;
    padding: 20px 0;
    line-height: 20px;
    background-color: #333;
    color: #ccc;
    border: 1px solid black;
}
.nav > a.router-link-active{
    background-color: purple!important;;
}
.nav>a:hover{
    background-color: #555;
}
</style>
