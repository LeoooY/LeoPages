<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome " />
    <el-row :gutter="15">
      <el-col :span="8" v-for="c in 3">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Title</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>

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
  }
</style>