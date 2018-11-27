<template>
    <div id='myNav'>

        <div id="header">
            <el-row>
                <el-col id="head-more" :span="18">


                    <el-col class="el-icon-more" :span="2" id="nav-more-dot" ></el-col>
                    <el-col :span="1" >
                        <span @click="toHome()" id="nav-home-pages">
                            <strong>LEO</strong>Pages
                        </span>
                        
                    </el-col>
                </el-col>
                <el-col :span="6" class="hidden-md-and-down" id="el-menu-demo">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                        id="pcMenu" :span="24">




                        <el-submenu index="2" class="nav-submenu">
                            <template slot="title">Menu</template>

                            <el-menu-item index="2-1" @click="toAbout()">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>

                        <el-menu-item index="3">消息中心</el-menu-item>

                        <el-menu-item index="4">
                            <el-button type="text" @click="jumpGithub">Github</el-button>
                        </el-menu-item>
                    </el-menu>
                </el-col>

                <el-col class="el-icon-menu hidden-lg-only" id="mobileMenu" :span="6">

                </el-col>
            </el-row>




        </div>

    </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/display.css'


    export default {
        name: 'myNav',
        data() {
            return {
                activeIndex: '',
            }
        },

        methods: {
            jumpGithub() {

                window.open("https://github.com/LeoooY/LeoPages");
            },
            toHome(){
                this.$router.push('/');
            },
            toAbout(){
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

        border-bottom: solid 1px #a1a1a1;
        box-shadow: 0 1px 4px #bbb
    }

    #header div {
        height: 100%;
    }

    #pcMenu {
        border-bottom: solid 1px #a1a1a1;
        height: 50px;
        /* width: 100% */
    }
    #pcMenu li{
        height: 50px;
    }
    
    #el-menu-demo {
        height: 50px;
        overflow: hidden;
    }

    #mobileMenu {
        padding: 20px;
        height: 50px;
    }
    #mobileMenu:hover {
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

    #nav-more-dot:hover{
        cursor: pointer;
    }
    #nav-home-pages:hover{
        cursor: pointer;
    }
</style>