<template>
  <div class="home">
    
        <img alt="Vue logo"  width="100%" height="500px" id="homePic" src="../assets/tinified/arid-barren-daylight.jpg">
    
    
    
    <el-row style="margin: 0 45px 20px 45px" :gutter="10" id="box-two">
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
  #homePic{
    margin-bottom: 30px;
    border-radius: 1%;
    
    box-shadow: 0px 2px 5px 3px #110c0c;
  }
</style>