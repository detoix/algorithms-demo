<script>
  import { Bar, mixins } from 'vue-chartjs'
 
  export default {
    name: 'Chart',
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: ['chartData'],
    mounted () {
      this.renderChart(this.chartData, this.chartData.options)
    }
  }
</script>

<style></style>
