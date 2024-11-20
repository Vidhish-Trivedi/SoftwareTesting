import Sorting from './algorithms/sorting.js';
import Searching from './algorithms/searching.js';

function main() {
    // Example usage of the algorithms
    const sorting = new Sorting();
    const searching = new Searching();

    const array = [5, 2, 9, 1, 5, 6];
    const sortedArray = sorting.bubbleSort(array);
    console.log(`Sorted array: ${sortedArray}`);

    const index = searching.binarySearch(sortedArray, 5);
    console.log(`Index of element '5': ${index}`);
}

main();