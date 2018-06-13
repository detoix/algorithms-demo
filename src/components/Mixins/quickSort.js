export default {
    methods: {
      doQuickSort (data, left, right, results) {
        if (left < right) {
          let partitionIndex = this.partition(data, left, right)
          this.doQuickSort(data, left, partitionIndex - 1, results)
          results.push(data.slice())
          this.doQuickSort(data, partitionIndex + 1, right, results)
          results.push(data.slice())
        }
      },
      partition (data, left, right){
        let pivotValue = data[right]
        let partitionIndex = left
        for (let i = left; i < right; i++) {
          if (data[i] < pivotValue) {
            this.swap(data, i, partitionIndex);
            partitionIndex++;
          }
        }
        this.swap(data, right, partitionIndex);
        return partitionIndex;
      },
      swap (data, i, j) {
        let tmp = data[i];
        data[i] = data[j];
        data[j] = tmp;
      },
      quickSort () {
        let data = this.parseInput()
        let results = [data.slice()]
        this.doQuickSort(data, 0, data.length - 1, results)



        // for (let i = 0; i < data.length; i++) {
        //   for (let j = data.length - 1; j > 0; j--) {
        //     if (data[j] < data[j - 1]) {
        //       let swap = data[j];
        //       data[j] = data[j - 1];
        //       data[j - 1] = swap;  
        //       results.push(data.slice())
        //     }
        //   }
        // }

        this.sorted = results
      }
    }
  }