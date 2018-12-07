<template>
  <div id="app">
    <myNav></myNav>

    <div id="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import myNav from './components/myNav.vue'

  export default {
    name: 'app',
    data() {
      return {
        // bodyOverFlow:this.$store.state.bodyOverFlow,
      }
    },
    computed: {
      // bodyOverFlow(){
      //   console.log('log...');
      //   console.log(this.$store.state.bodyOverflow)
      //   return this.$store.state.bodyOverflow;
      // }
    },
    components: {
      myNav,

    },
    beforeCreate () {
      // alert("beforeCreate");
    },
    created () {
      
      
    },
    beforeMount () {
      // alert("beforeMount");
    },
    mounted () {
      // alert("mounted");
    },
    beforeUpdate () {
      // alert("beforeUpdate");
      
    },
    updated () {
      // alert("updated");
      this.$message({
          showClose: true,
          message: 'welcome,这是一条测试消息，页面正在开发中...'
        });
    },
    beforeDestroy () {
      // alert("beforeDestroy");
    },
    destroyed () {
      // alert("destroyed");
    },

  }
</script>

<style>
  body,
  html {
    padding: 0;
    margin: 0;
    overflow: hidden;
    height: 100%;
    width: 100%
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: auto;
    height: 100%;
    width: 100%
  }

  #main {
    position: relative;
    top: 50px;

  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>