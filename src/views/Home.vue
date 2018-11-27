<template>
  <div class="home">
    
        <img alt="Vue logo" src="../assets/arid-barren-daylight.jpg" width="100%" height="500px" id="homePic">
    
    
    
    <el-row>
      <el-col :span="12" id="box-two1">
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
      <el-col :span="12" id="box-two2">
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
          <div v-for="o in 7" :key="o" class="text item">
            {{'内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row id="footer" style="background: rgb(54, 50, 50);height: 300px; padding: 0;margin: 0;color: #FFF;">
        <p><strong>This is Footer</strong></p>
    </el-row>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    data() {
      return {

      }
    },
    components: {
      HelloWorld
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

  #box-two1 {
    padding: 0 10px 10px 50px;
  }

  #box-two2 {
    padding: 0 50px 10px 10px;
  }
  #box-one{
    padding: 10px 50px;
    padding-bottom: 50px;
  }
  #homePic{
    margin-bottom: 30px;
    border-radius: 1%;
    
    box-shadow: 0px 2px 5px 3px #110c0c;
  }
</style>