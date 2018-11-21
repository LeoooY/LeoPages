<template>
  <div id="app">
    <myNav></myNav>

    <div id="main">
      <div>
        <img src="./assets/logo.png">
        <p>
          If Element is successfully added to this project, you'll see an
          <code v-text="'<el-button>'"></code>
          below
        </p>
        <el-button>el-button</el-button>
      </div>

      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import myNav from './components/myNav.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      myNav
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

  #main {
    position: relative;
    top: 60px;
  }
</style>