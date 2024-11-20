import { expect } from 'chai';
import Searching from '../algorithms/searching.js';

describe('Searching', () => {
    it('should find the index of the element using binary search', () => {
        const searching = new Searching();
        const array = [1, 2, 5, 5, 6, 9];
        const index = searching.binarySearch(array, 5);
        expect(index).to.equal(2);
    });

    it('should return -1 if the element is not found', () => {
        const searching = new Searching();
        const array = [1, 2, 5, 5, 6, 9];
        const index = searching.binarySearch(array, 10);
        expect(index).to.equal(-1);
    });

    it('should find the index of the first element', () => {
        const searching = new Searching();
        const array = [1, 2, 5, 5, 6, 9];
        const index = searching.binarySearch(array, 1);
        expect(index).to.equal(0);
    });

    it('should find the index of the last element', () => {
        const searching = new Searching();
        const array = [1, 2, 5, 5, 6, 9];
        const index = searching.binarySearch(array, 9);
        expect(index).to.equal(5);
    });

    it('should handle an empty array', () => {
        const searching = new Searching();
        const array = [];
        const index = searching.binarySearch(array, 5);
        expect(index).to.equal(-1);
    });

    it('should handle an array with one element (element found)', () => {
        const searching = new Searching();
        const array = [5];
        const index = searching.binarySearch(array, 5);
        expect(index).to.equal(0);
    });

    it('should handle an array with one element (element not found)', () => {
        const searching = new Searching();
        const array = [1];
        const index = searching.binarySearch(array, 5);
        expect(index).to.equal(-1);
    });

    it('should handle an array with duplicate elements', () => {
        const searching = new Searching();
        const array = [1, 2, 5, 5, 5, 6, 9];
        const index = searching.binarySearch(array, 5);
        expect(index).to.be.oneOf([2, 3, 4]);
    });
});