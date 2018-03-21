<template>
  <div id="app">
    <router-view @openSidebar="open_navbar=true"/>
    <div class="sidebar-div" :class="{'active-nav':open_navbar}">
      <Sidebar @closeBar="open_navbar=false">
      </Sidebar>
    </div>
  </div>
</template>

<script>
  import Sidebar from "./components/sidebar/Sidebar.vue";
  export default {
    name: 'App',
    components:{Sidebar},
    data() {
      return{
        open_navbar:false
      }
    }
  }

</script>

<style>
  body {
    font-family: 'Roboto', sans-serif;
    background: #f3f3f3;
    font-size: 14px;
  }

  .sidebar-div {
    position: fixed;
    top: 0;
    left: -100%;
    transition:0.3s;
    z-index: 3;
  }

  .active-nav {
    left:0;
  }
</style>
