import { expect } from 'chai';
import Sorting from '../algorithms/sorting.js';

describe('Sorting', () => {
    it('should sort the array using bubble sort', () => {
        const sorting = new Sorting();
        const array = [5, 2, 9, 1, 5, 6];
        const sortedArray = sorting.bubbleSort(array);
        expect(sortedArray).to.deep.equal([1, 2, 5, 5, 6, 9]);
    });

    it('should handle an already sorted array', () => {
        const sorting = new Sorting();
        const array = [1, 2, 3, 4, 5];
        const sortedArray = sorting.bubbleSort(array);
        expect(sortedArray).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle a reverse sorted array', () => {
        const sorting = new Sorting();
        const array = [5, 4, 3, 2, 1];
        const sortedArray = sorting.bubbleSort(array);
        expect(sortedArray).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle an array with all identical elements', () => {
        const sorting = new Sorting();
        const array = [5, 5, 5, 5, 5];
        const sortedArray = sorting.bubbleSort(array);
        expect(sortedArray).to.deep.equal([5, 5, 5, 5, 5]);
    });

    it('should handle an empty array', () => {
        const sorting = new Sorting();
        const array = [];
        const sortedArray = sorting.bubbleSort(array);
        expect(sortedArray).to.deep.equal([]);
    });

    it('should handle an array with one element', () => {
        const sorting = new Sorting();
        const array = [1];
        const sortedArray = sorting.bubbleSort(array);
        expect(sortedArray).to.deep.equal([1]);
    });

    it('should handle an array with negative numbers', () => {
        const sorting = new Sorting();
        const array = [3, -2, -1, 0, 2, 1];
        const sortedArray = sorting.bubbleSort(array);
        expect(sortedArray).to.deep.equal([-2, -1, 0, 1, 2, 3]);
    });
});