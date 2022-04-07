<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <!--详情界面不用展示-->
    <main-tab-bar v-if="!/^\/detail/.test($route.path)"/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTaBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
