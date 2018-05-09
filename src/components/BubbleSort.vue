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
        <chart :chartData="chartData" />
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
        output: null,
        input: "",
        chartData: null,
      }
    },
    methods: {
      validateInput (input) {
        return input.match(/^(([0-9], )+)?[0-9]$/)
      },
      sort () {
        if (!this.validateInput(this.input)) {
          this.output = "Invalid input!"
        }
        else {
          this.output = this.bubbleSort(this.input.split(", "))
          this.fillData()
        }
      },
      bubbleSort (data) {
        for (let i = 0; i < data.length; i++) {
          for (let j = data.length - 1; j > 0; j--) {
            if (data[j] < data[j - 1]) {
              let tmp = data[j];
              data[j] = data[j - 1];
              data[j - 1] = tmp;
            }
          }
        }        
        return data
      },
      fillData () {
        this.chartData = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#a4f442',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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