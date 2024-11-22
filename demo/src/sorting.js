class Sorting {
    bubbleSort(items) {
        const length = items.length
        let noSwaps

        for (let i = length; i > 0; i--) {
            noSwaps = true
            for (let j = 0; j < i - 1; j++) {
                if (items[j] > items[j + 1]) {
                    [items[j], items[j + 1]] = [items[j + 1], items[j]]
                    noSwaps = false
                }
            }
            if (noSwaps) {
                break
            }
        }

        return items
    }

    secondLargestElement = (array) => {
        const largestElement = Math.max(...array)
        let element = -Number.MAX_VALUE
      
        for (let i = 0; i < array.length; i++) {
          if (element < array[i] && array[i] !== largestElement) {
            element = array[i]
          }
        }
      
        return element
      }
    
}

export default Sorting;
