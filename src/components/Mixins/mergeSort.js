export default {
    methods: {
      mergeSort () {
        let data = this.parseInput()
        let results = [data.slice()]
        this.mergeSortRecursive(data, 0, data.length - 1, results)
        this.sorted = results
      },
      mergeSortRecursive(data, leftBound, rightBound, results) {
        if (leftBound < rightBound) {
          let middle = Math.floor((leftBound + rightBound) / 2.0);
          this.mergeSortRecursive(data, leftBound, middle, results);
          this.mergeSortRecursive(data, middle + 1, rightBound, results);
          this.merge(data, leftBound, middle, rightBound, results);
        }
      },
      merge(data, leftBound, middle, rightBound, results) {
        let leftSize = middle - leftBound + 1
        let rightSize = rightBound - middle
        let leftPart = []
        let rightPart = []
        for (let i = 0; i < leftSize; i++) {
            leftPart.push(data[leftBound + i])
        }
        for (let j = 0; j < rightSize; j++) {
            rightPart.push(data[middle + j + 1])
        }
        leftPart[leftSize] = rightPart[rightSize] = Number.POSITIVE_INFINITY
        let leftIndex = 0, rightIndex = 0;
        for (let dataIndex = leftBound; dataIndex <= rightBound; dataIndex++) {
          if (leftPart[leftIndex] <= rightPart[rightIndex]) {
            data[dataIndex] = leftPart[leftIndex]
            leftIndex++
          }
          else {
            data[dataIndex] = rightPart[rightIndex]
            rightIndex++
          }
          results.push(data.slice())
        }
      }
    }
  }