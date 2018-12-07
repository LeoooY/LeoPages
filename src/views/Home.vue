<template>
  <div class="home">
    <div  id="home-pic" >
      <el-carousel interval="7000" trigger="click" arrow="always" height="500px">
        <el-carousel-item  :key="1">
          <img alt="HomePic"  width="100%" height="500px" src="../assets/tinified/arid-barren-daylight.jpg">
        </el-carousel-item>
        <el-carousel-item  :key="2">
          <img alt="HomePic"  width="100%" height="500px" src="../assets/tinified/astronomy-constellation-constellations.jpg">
        </el-carousel-item>
        <el-carousel-item  :key="3">
          <img alt="HomePic"  width="100%" height="500px" src="../assets/tinified/beautiful-cold-dawn-.jpg">
        </el-carousel-item>
        <el-carousel-item  :key="4">
          <img alt="HomePic"  width="100%" height="500px" src="../assets/tinified/sunset.jpg">
        </el-carousel-item>
      </el-carousel>
    </div>
        
    
    
    <el-button @click="showBox = !showBox">Move</el-button>
    <transition name="showBox" mode="out-in">
      <el-row style="margin: 0 45px 20px 45px" :gutter="10" id="box-two" v-if="showBox">
        <el-col :span="12" :xs="24" >
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Title 标题</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
            </div>
            <div v-for="o in 7" :key="o" class="text item">
              {{'内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="12" :xs="24" >
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Title 标题</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
            </div>
            <div v-for="o in 7" :key="o" class="text item">
              {{'内容 ' + o }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </transition>
    
    <el-row>
      <el-col :span="24" id="box-one">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Title 标题</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
          </div>
          <div v-for="o in 8" :key="o" class="text item">
            {{'内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row id="footer" style="background: rgb(54, 50, 50);height: 300px; padding: 0;margin: 0;color: #FFF;">
        <p><strong>This is a Footer</strong></p>
    </el-row>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    data() {
      return {
        showBox:false,
      }
    },
    components: {
      
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 300px;

  }

  #box-two{
    margin: 0 45px 20px 45px;
  }
  #box-two .box-card{
    margin-top: 30px;
  }
  #box-one{
    padding: 10px 50px;
    margin-bottom: 50px;
    
  }
  #box-one .box-card{
    height: 400px;
  }
  #home-pic{
    height: 500px;
    margin-bottom: 30px;
    border-radius: 1%;
    
    box-shadow: 0px 2px 5px 3px #110c0c;
  }
 

  .showBox-enter-active, .showBox-leave-active {
  transition: all 0.3s;
}
.showBox-enter, .showBox-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100px);
}
</style>