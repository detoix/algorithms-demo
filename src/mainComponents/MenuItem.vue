<template>
  <div class="tile is-parent">
    <article class="tile is-child notification" v-bind:class="[active ? 'is-success' : 'is-info', '']">
      <router-link :to="{ path: '/' + menuItem.path }">{{menuItem.name}}</router-link>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'menuItem',
    props: ['menuItem', 'active'],
  }
</script>

<style></style>
