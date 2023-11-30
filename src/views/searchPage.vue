<template>
    <div id="searchContainer">
        <input class="search" v-model="inpValue" type="text">
        <div class="searchLabel" @click="search">搜索</div>
    </div>
</template>

<script>
window.localStorage.setItem("index",0 || window.localStorage.getItem("index"))

export default {
    data(){
        return{
            inpValue:'',
            searchIndex:window.localStorage.getItem("index")
        }
    },
    methods:{
        search(){
            // this.searchIndex+=1;这里不行,每次点击搜索后只会显示搜索一次,因为每次回到搜索页面searchIndex就会被data初始化为0
            this.searchIndex++
            console.log(this.searchIndex)
            window.localStorage.setItem("index",parseInt(this.searchIndex))
            console.log('h')
            // this.$router.push(`/searchContent?key=${this.inpValue}`)
            // this.$router.push({
            //     path:'/searchContent',
            //     query:{
            //         key: this.inpValue,
            //         count:this.searchIndex
            //     }
            // })
            this.$router.push({
                name:'searchContent',
                params:{
                    key:this.inpValue,
                    count:this.searchIndex
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
#searchContainer{
    width: 280px;
    height: 50px;
    margin: 20px auto;
}
.search{
    outline-style: none;
    border: 1px solid #c0c4cc;
    width: 230px;
    height: 100%;
    padding: 0;
    padding: 10px 15px;
    box-sizing: border-box;
    font-family: "Microsoft soft";
    &:focus {
        & + div{
            border: 1px solid #f07b00;
        }
        border-color: #f07b00;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px
                rgba(0, 0, 0, 0.075),
            #f07b00;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            #f07b00;
    }
}
.searchLabel{
    float: right;
    width: 50px;
    height:50px;
    text-align: center;
    line-height: 50px;
    user-select: none;
    box-sizing: border-box;
    border: 1px solid #c0c4cc;
}
</style>