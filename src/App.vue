<template>
  <div id="app">
    <myNav></myNav>

    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import myNav from './components/myNav.vue'

  export default {
    name: 'app',
    components: {      
      myNav,
      
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