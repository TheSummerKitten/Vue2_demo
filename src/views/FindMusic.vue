<template>
    <div class="table-case">
        <MyTable :data="goods">
            <template #head>
                <th>编号</th>
                <th>名称</th>
                <th>图片</th>
                <th width="100px">歌姬</th>
            </template>

            <template #body="{ item, index }">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>
                    <img :src="item.picture" />
                </td>
                <td>
                    <MyTag v-model="item.tag"></MyTag>
                </td>
            </template>
        </MyTable>
    </div>
</template>
  
<script>
// my-tag 标签组件的封装
// 1. 创建组件 - 初始化
// 2. 实现功能
//    (1) 双击显示，并且自动聚焦
//        v-if v-else @dbclick 操作 isEdit
//        自动聚焦：
//        1. $nextTick => $refs 获取到dom，进行focus获取焦点
//        2. 封装v-focus指令

//    (2) 失去焦点，隐藏输入框
//        @blur 操作 isEdit 即可

//    (3) 回显标签信息
//        回显的标签信息是父组件传递过来的
//        v-model实现功能 (简化代码)  v-model => :value 和 @input
//        组件内部通过props接收, :value设置给输入框

//    (4) 内容修改了，回车 => 修改标签信息
//        @keyup.enter, 触发事件 $emit('input', e.target.value)

// ---------------------------------------------------------------------

// my-table 表格组件的封装
// 1. 数据不能写死，动态传递表格渲染的数据  props
// 2. 结构不能写死 - 多处结构自定义 【具名插槽】
//    (1) 表头支持自定义
//    (2) 主体支持自定义

import MyTag from '../components/MyTag.vue'
import MyTable from '../components/MyTable.vue'
export default {
    name: 'TableCase',
    components: {
        MyTag,
        MyTable
    },
    data() {
        return {
            // 测试组件功能的临时数据
            tempText: '水杯',
            tempText2: '钢笔',
            goods: [
                { id: 101, picture: require('../assets/Angel.jpg'), name: '天使', tag: '鳴花ミコト' },
                { id: 102, picture: require('../assets/泰勒斯托望远镜.jpg'), name: '泰勒斯托望远镜', tag: '初音ミク' },
                { id: 103, picture: require('../assets/Beat_Eater.jpg'), name: 'Beat_Eater', tag: '初音ミク' },
                { id: 104, picture: require('../assets/Boi_Police_Piccadilly.jpg'), name: 'Boi', tag: '可不' },
            ]
        }
    }
}
</script>
  
<style lang="less" scoped>
.table-case {
    width: 1000px;
    margin: 50px auto;

    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        vertical-align: middle;
    }
}
</style>