<template>
  <div class="column">
    <div class="tile is-parent">
      <article class="tile is-child notification">
        <h1 class="title is-spaced">Title</h1>
        <h2 class="subtitle is-spaced">Description</h2>
        <div class="field is-grouped">
          <p class="control is-expanded">
            <input 
              class="input" 
              type="text" 
              v-model="input" 
              placeholder="5, 2, 4, 6, 1, 3">
          </p>
          <p class="control">
            <a class="button is-info" @click="sort()">
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

  export default {
    name: 'BubbleSort',
    components: {
      Chart
    },
    data () {
      return {
        input: "",
        chartData: undefined,
        step: 0,
        sorted: []
      }
    },
    methods: {
      validateInput (input) {
        return input.match(this.inputFormat)
      },
      parseInput() {
        return this.input.split(", ").map(e => parseInt(e))
      },
      sort () {
        if (!this.validateInput(this.input)) {
          this.chartData = undefined
          this.sorted = []
          alert(this.invalidMessage)
        }
        else {
          this.bubbleSort()
          this.updateChart()
        }
      },
      bubbleSort () {
        let data = this.parseInput()
        let result = []
        result.push(data.slice())
        for (let i = 0; i < data.length; i++) {
          for (let j = data.length - 1; j > 0; j--) {
            if (data[j] < data[j - 1]) {
              let swap = data[j];
              data[j] = data[j - 1];
              data[j - 1] = swap;  
              result.push(data.slice())
            }
          }
        }
        this.step = 0
        this.sorted = result
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
      invalidMessage () {
        return 'Invalid input!'
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