export default {
    methods: {
      buildHeap (data) {
        for (let i = data.length / 2 - 1; i >= 0; i--) {
          this.heapify(data, i, data.length)
        }
      },
      heapify (data, i, max) {
        let largest = i
        let left = 2 * i + 1
        let right = 2 * i + 2

        if (left < max && data[left] > data[i]) {
          largest = left
        }
        if (right < max && data[right] > data[largest]) {
          largest = right
        }
        if (largest != i) {
          let swap = data[i]
          data[i] = data[largest]
          data[largest] = swap
          this.heapify(data, largest, max)
        }
      },
      heapSort () {
        let data = this.parseInput()
        let results = [data.slice()]
        this.buildHeap(data)
        for (let i = data.length - 1; i > 0; i--) {
          let swap = data[0]
          data[0] = data[i]
          data[i] = swap
          this.heapify(data, 0, i)
          results.push(data.slice())
        }
        this.sorted = results
      }
    }
  }