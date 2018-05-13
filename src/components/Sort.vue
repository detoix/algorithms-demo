<template>
  <div class="column section">
    <div class="tile is-parent">
      <article class="tile is-child notification">
        <h1 class="title is-spaced">Title</h1>
        <h2 class="subtitle is-spaced">Description</h2>
        <div class="field is-grouped">
          <div class="control is-expanded">
            <input 
              class="input"
              :class="{ 'is-danger': !validInput }" 
              type="text" 
              v-model="input" 
              placeholder="5, 2, 4, 6, 1, 3"
              @keyup.enter="sort">
          </div>
          <p class="control">
            <a class="button is-info" @click="sort">
              Sort
            </a>
          </p>
        </div>
        <input 
          v-if="sortedVisible" 
          v-model="step" 
          @change="updateChart()"
          class="slider is-fullwidth is-success"
          step="1" 
          min="0" 
          :max="numberOfSteps" 
          type="range">
        <chart 
          v-if="sortedVisible" 
          :chartData="chartData"
          :height="200" />
      </article>
    </div>
  </div>
</template>

<script>
  import Chart from './Chart.vue'
  import { default as bubbleSort } from './Mixins/bubbleSort.js'
  import { default as insertionSort } from './Mixins/insertionSort.js'

  export default {
    components: {
      Chart 
    },
    mixins: [bubbleSort, insertionSort],
    data () {
      return {
        input: "",
        chartData: undefined,
        step: 0,
        sorted: []
      }
    },
    methods: {
      parseInput() {
        return this.input.split(", ").map(e => parseInt(e))
      },
      sort () {
        if (!this.validInput) {
          this.chartData = undefined
          this.sorted = []
        }
        else {
          this[this.$route.name]()
          this.updateChart()
        }
      },
      updateChart () {
        let min = Math.min.apply(Math, this.sorted[this.step])
        let max = Math.max.apply(Math, this.sorted[this.step])
        let minBarHeight = Math.ceil((max - min) / 10)

        this.chartData = {
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  display: false,
                  min: min
                }
              }]
            }
          },
          labels: this.sorted[this.step],
          datasets: [{
            backgroundColor: '#734375',
            label: 'Move the slider to see how it gets sorted!',
            data: this.sorted[this.step].map(e => e + minBarHeight)
          }]
        }
      }
    },
    computed: {
      inputFormat () {
        return /^(([0-9]+, )+)?[0-9]+$/
      },
      sortedVisible () {
        return this.sorted.length > 0 && this.chartData != undefined
      },
      validInput () {
        return this.input.match(this.inputFormat)
      },
      numberOfSteps () {
        return this.sorted.length - 1
      }
    },
  }
</script>

<style>
  .slider {
    width: 100%
  }
</style>