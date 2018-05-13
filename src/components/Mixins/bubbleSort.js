export default {
  methods: {
    bubbleSort () {
      let data = this.parseInput()
      let results = [data.slice()]
      for (let i = 0; i < data.length; i++) {
        for (let j = data.length - 1; j > 0; j--) {
          if (data[j] < data[j - 1]) {
            let swap = data[j];
            data[j] = data[j - 1];
            data[j - 1] = swap;  
            results.push(data.slice())
          }
        }
      }
      this.sorted = results
    }
  }
}