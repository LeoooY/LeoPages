<template>
    <!-- <div id='mobileMenu' v-if="showMenu"> -->
    <div id='mobileMenu'>
            <el-col :span="24">
                    <el-menu
                      default-active="2"
                      class="el-menu-vertical-demo"
                      @open="handleOpen"
                      @close="handleClose">
                      <el-submenu index="1">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>更多</span>
                        </template>
                        <el-menu-item-group>
                          <template slot="title">分组一</template>
                          <el-menu-item index="1-1">测试页面About</el-menu-item>
                          <el-menu-item index="1-2">CanvasDemo</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                          <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                          <template slot="title">选项4</template>
                          <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                      </el-submenu>
                      <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">测试</span>
                      </el-menu-item>
                      <!-- <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                      </el-menu-item> -->
                      <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">
                            <el-button type="text" @click="jumpToGithub">Github</el-button>
                        </span>
                      </el-menu-item>
                    </el-menu>
                  </el-col>
            
    </div>
</template>

<script>
export default {
    name: 'mobileMenu',
    props: ["showMenu"],
    created () {
        console.log(this.showMenu);
    },
    updated () {
        console.log(this.showMenu);
    }
}
</script>

<style scoped>
#mobileMenu{
    position: fixed;
    min-height: 150px;
    width: 150px;
    background: #fff;
    z-index:99;
    top:50px;
    right: 0%;
}
</style>