<template>
    <div id='pcMenu'>
        
        <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect"
        id="pcMenu" :span="24" menu-trigger="click">




        <el-submenu index="2" class="nav-submenu">
            <template slot="title">更多</template>

            <el-menu-item index="2-1" @click="jumpToAbout()">测试页面About</el-menu-item>
            <el-menu-item index="2-2" @click="jumpToCanvas()">CanvasDemo</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>

        <el-menu-item index="3">测试</el-menu-item>

        <el-menu-item index="4">
            <el-button type="text" @click="jumpToGithub">Github</el-button>
        </el-menu-item>
    </el-menu>

    </div>
</template>

<script>
export default {
    name: 'pcMenu'

}
</script>

<style scoped>

</style>