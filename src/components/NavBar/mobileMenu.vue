<template>
    <div id='mobileMenu' v-if="showMenu">
        
    </div>
</template>

<script>
export default {
    name: 'mobileMenu',
    props: ["showMenu"],
    created () {
        console.log(this.showMenu);
    },
    updated () {
        console.log(this.showMenu);
    }
}
</script>

<style scoped>
#mobileMenu{
    position: fixed;
    height: 150px;
    width: 150px;
    background: #fff;
    z-index:999;
    top:50px;
    right: 0%;
}
</style>