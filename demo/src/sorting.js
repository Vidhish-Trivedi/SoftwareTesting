class Sorting {
    // https://the-algorithms.com/algorithm/bubble-sort?lang=javascript
    bubbleSort(items) {
        const length = items.length
        let noSwaps

        for (let i = length; i > 0; i--) {
            // flag for optimization
            noSwaps = true
            // Number of passes
            for (let j = 0; j < i - 1; j++) {
                // Compare the adjacent positions
                if (items[j] > items[j + 1]) {
                    // Swap the numbers
                    ;[items[j], items[j + 1]] = [items[j + 1], items[j]]
                    noSwaps = false
                }
            }
            if (noSwaps) {
                break
            }
        }

        return items
    }

    // https://the-algorithms.com/algorithm/find-second-largest-element?lang=javascript
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
