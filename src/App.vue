<template>
  <div id="app">
    <top />
    <div class="columns">
      <sidebar />
      <router-view :key="$route.path"></router-view>
    </div>
    <bottom />
  </div>
</template>

<script>
import Top from './mainComponents/Top.vue'
import Sidebar from './mainComponents/Sidebar.vue'
import Bottom from './mainComponents/Bottom.vue'

export default {
  name: 'app',
  components: {
    Top,
    Sidebar,
    Bottom
  }
}
</script>

<style></style>
