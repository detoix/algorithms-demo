export default {
    methods: {
      findMax (data, left, right) {
        let maxPos = left
        let i = left
        while (++i <= right) {
          if (data[i] > data[maxPos]) {
            maxPos = i
          }
        }
        return maxPos
      },
      selectionSort () {
        let data = this.parseInput()
        let results = [data.slice()]
        for (let i = data.length - 1; i > 0; i--) {
          let maxPos = this.findMax(data, 0, i)
          if (maxPos != i) {
            let swap = data[i]
            data[i] = data[maxPos]
            data[maxPos] = swap
            results.push(data.slice())
          }
        }
        this.sorted = results
      }
    }
  }