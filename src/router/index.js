//1.下载vue-router插件
//2.引入
import VueRouter from "vue-router"

import MyMusic from "../views/MyMusic.vue"   //这里必须带上文件名后缀
import FindMusic from "../views/FindMusic.vue"
import MyFriends from "../views/MyFriends.vue"
import NotFound from "@/views/NotFind.vue"
import searchPage from "@/views/searchPage.vue"
import searchContent from "@/views/searchContent.vue"


import Vue from 'vue'
//3.安装注册
Vue.use(VueRouter)  //插件初始化


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}




//4.创建路由对象
//核心步骤一:配置路由
const router = new VueRouter({
    routes:[
        {path : '/' ,redirect: '/FindMusic'},
        {path : '/FindMusic' , component: FindMusic},
        {path : '/MyFriends' , component: MyFriends},
        {path : '/MyMusic' , component: MyMusic},
        {name:'searchContent', path : '/searchContent',component: searchContent},
        //命名式路由
        {name : 'search' , path : '/searchPage',component: searchPage},
        {path : '*' , component: NotFound}
    ],
    mode:"history"
})

export default router