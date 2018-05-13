export default {
  methods: {
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
    }
  }
}