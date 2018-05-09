<template>
  <div class="column is-narrow">
    <div
      is="menu-item"
      v-for="menuItem in menuItems"
      v-bind:key="menuItem.name"
      v-bind:menuItem="menuItem" />
  </div>
</template>

<script>
  import MenuItem from './MenuItem.vue'

  export default {
    name: 'sidebar',
    components: {
      MenuItem
    },
    data () {
      return {
        menuItems: [
          {
            path: "",
            name: "Home"
          },
          {
            path: "sort/bubble",
            name: "Bubble Sort"
          },
          {
            path: "sort/insertion",
            name: "Insertion Sort"
          }
        ]
      }
    }
  }
</script>

<style></style>
