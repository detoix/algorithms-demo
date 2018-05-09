<template>
  <div class="column">
    <div class="tile is-parent">
      <article class="tile is-child notification">
        <h1 class="title is-spaced">Title</h1>
        <h2 class="subtitle is-spaced">Description</h2>
        <div class="content">
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input" type="text" v-model="input" placeholder="5, 2, 4, 6, 1, 3">
            </p>
            <p class="control">
              <a class="button is-info" @click="sort()">
                Sort
              </a>
            </p>
          </div>
          <p v-if="outputVisible">{{output}}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InsertionSort',
    data () {
      return {
        output: null,
        input: ""
      }
    },
    methods: {
      sort () {
        if (!this.validateInput(this.input)) {
          this.output = "Invalid input!"
        }
        else {
          this.output = [1, 2]
        }
      },
      validateInput (input) {
        return input.match(/^(([0-9], )+)?[0-9]$/)
      }
    },
    computed: {
      outputVisible () {
        return this.output != null
      }
    },
  }
</script>

<style></style>
