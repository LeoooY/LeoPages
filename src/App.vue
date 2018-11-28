<template>
  <div id="app" >
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
    data () {
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

    }
  }
</script>

<style>
  body,html{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    overflow: auto;
  }

  #main {
    position: relative;
    top: 50px;
    
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>