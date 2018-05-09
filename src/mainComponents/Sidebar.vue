<template>
  <div class="column is-narrow">
    <div
      is="menu-item"
      v-for="menuItem in menuItems"
      v-bind:key="menuItem.id"
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
            id: 0,
            name: "Item"
          },
          {
            id: 1,
            name: "Item"
          }
        ]
      }
    }
  }
</script>

<style></style>
