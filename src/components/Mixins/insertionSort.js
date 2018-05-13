export default {
    methods: {
      insertionSort () {
        let data = this.parseInput()
        let result = []
        result.push(data.slice())
        for (let j = 1; j < data.length; j++) {
          let key = data[j]
          let i = j - 1
          while (i >= 0 && data[i] > key) {
            data[i + 1] = data[i]
            i -= 1
          }
          data[i + 1] = key
          result.push(data.slice())
        }
        this.step = 0
        this.sorted = result
      }
    }
  }