<template>
    <div id='myNav'>

        <div id="header">
            <el-row>
                <el-col id="head-more" :span="18">


                    <el-col :span="2">
                        <span class="el-icon-more" id="nav-more-dot" @click="showDrawer =! showDrawer"></span>
                    </el-col>
                    <el-col :span="1">
                        <span @click="jumpToHome()" id="nav-home-pages">
                            <strong>LEO</strong>Pages
                        </span>

                    </el-col>
                </el-col>

                <el-col :span="6" class="hidden-md-and-down" id="pcMenu-container">
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
                </el-col>

                <el-col class=" hidden-lg-only" 
                        id="mobileMenu-container" 
                        :span="5" :push="2">
                        <span class="el-icon-menu" @click="showMenu = ! showMenu"></span>
                </el-col>
                
            </el-row>
        </div>

        <transition name="MaskShow" mode="out-in">
            <div id="mask" v-if="showDrawer" @click="showDrawer =! showDrawer"></div>
        </transition>
        <transition name="DrawerShow" mode="out-in">
            <div id="Drawer" v-if="showDrawer" :span="8"></div>
        </transition>

        <transition name="MobileMenu" mode="out-in">
            <mobileMenu :showMenu="showMenu" v-if="showMenu"></mobileMenu>    
        </transition>
        

    </div>

    
</template>

<script>
    import 'element-ui/lib/theme-chalk/display.css'
    import mobileMenu from './mobileMenu.vue'

    export default {
        name: 'myNav',
        data() {
            return {
                showDrawer: false,
                activeIndex: '',
                showMenu:false,
            }
        },
        components: {
            mobileMenu,
        },
        methods: {
            // showMenu(){
                
            //     console.log('点击');
            // },
            changeShowDrawer() {
                
                console.log("mask")
                this.showDrawer = !this.showDrawer;
            },
            jumpToGithub() {

                window.open("https://github.com/LeoooY/LeoPages");
            },
            jumpToCanvas(){
                window.open('https://leoooy.github.io/CanvasDemo');
            },
            jumpToHome() {
                this.$router.push('/');
            },
            jumpToAbout() {
                this.$router.push('/about');
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);

            }
        }
    }
</script>


<style scope>
    #header {
        position: fixed;
        width: 100%;
        height: 50px;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 100;

        /* border-bottom: solid 1px #a1a1a1;
        box-shadow: 0 1px 4px #bbb */
        /* google shadow */
        box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
    }

    #header div {
        height: 100%;
    }

    #pcMenu {
        border-bottom: solid 1px #a1a1a1;
        height: 50px;
        /* width: 100% */
    }

    #pcMenu li {
        height: 50px;
    }

    #pcMenu-container {
        height: 50px;
        overflow: hidden;
    }

    #mobileMenu-container {
        padding: 20px;
        height: 50px;
    }

    #mobileMenu-container:hover {
        cursor: pointer;
        padding: 20px;
        height: 50px;
    }

    #head-more {
        display: inline-block;
    }

    #head-more div {
        height: 10px;
        padding: 20px;
    }

    #nav-more-dot:hover {
        cursor: pointer;
    }

    #nav-home-pages:hover {
        cursor: pointer;
    }

    #mask {
        position: fixed;
        background: rgba(55, 55, 55, .6);
        height: 1500px;
        width: 1600px;
        z-index: 1000;
        top: 0;
         
    }

    #Drawer {
        position: fixed;
        height: 1500px;
        width: 300px;
        background: #fff;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
    }

    .DrawerShow-enter-active,
    .DrawerShow-leave-active {
        transition: all 0.3s;
    }
    .DrawerShow-enter,
    .DrawerShow-leave-to

    /* .list-leave-active for below version 2.1.8 */
        {
        /* opacity: .1s; */
        transform: translateX(-300px);
    }

    .MaskShow-enter-active,
    .MaskShow-leave-active {
        transition: all  0.2s;               
    }
    .MaskShow-enter,
    .MaskShow-leave-to
    /* .fade-leave-active below version 2.1.8 */
    {
        /* 透明度 */
        opacity: .1;
        
    }

    .MobileMenu-enter-active,
    .MobileMenu-leave-active {
        transition: all 0.3s;
    }
    .MobileMenu-enter,
    .MobileMenu-leave-to

    /* .list-leave-active for below version 2.1.8 */
        {
        /* opacity: .1s; */
        transform: translateY(-200px);
    }
    
    
</style>