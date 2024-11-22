import { validateCreditCard } from './src/validate-credit-card.js';


function main() {
    // Example usage of the algorithms
    // const sorting = new Sorting();
    // const searching = new Searching();

    // const array = [5, 2, 9, 1, 5, 6];
    // const sortedArray = sorting.bubbleSort(array);
    // console.log(`Sorted array: ${sortedArray}`);

    // const index = searching.binarySearch(sortedArray, 5);
    // console.log(`Index of element '5': ${index}`);

    console.log(validateCreditCard('371449635398431'));
}

main();
//  find . -type f -exec wc -l {} + | awk '{total += $1} END {print total}'