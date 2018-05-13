<template>
  <div id="app">
    <top />
    <home-title />
    <hero />
    <div class="columns">
      <sidebar />
      <router-view :key="$route.path"></router-view>
    </div>
    <bottom />
  </div>
</template>

<script>
import Top from './mainComponents/Top.vue'
import HomeTitle from './mainComponents/HomeTitle.vue'
import Hero from './mainComponents/Hero.vue'
import Sidebar from './mainComponents/Sidebar.vue'
import Bottom from './mainComponents/Bottom.vue'

export default {
  name: 'app',
  components: {
    Top,
    HomeTitle,
    Hero,
    Sidebar,
    Bottom
  }
}
</script>

<style></style>
