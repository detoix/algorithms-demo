export default {
    methods: {
      insertionSort () {
        let data = this.parseInput()
        let results = [data.slice()]
        for (let j = 1; j < data.length; j++) {
          let key = data[j]
          let i = j - 1
          while (i >= 0 && data[i] > key) {
            data[i + 1] = data[i]
            i -= 1
          }
          data[i + 1] = key
          results.push(data.slice())
        }
        this.sorted = results
      }
    }
  }