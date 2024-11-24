// @ts-nocheck
import { expect } from 'chai';
import Islands from '../src/number-of-islands.js';

describe('Islands', () => {
    let islands;

    beforeEach(() => {
        islands = new Islands();
    });

    it('should return 0 for an empty grid', () => {
        const grid = [];
        const result = islands.islands(grid);
        expect(result).to.equal(0);
    });

    it('should return 0 for a grid with no islands', () => {
        const grid = [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"]
        ];
        const result = islands.islands(grid);
        expect(result).to.equal(0);
    });

    it('should return 1 for a grid with one island', () => {
        const grid = [
            ["1", "1", "0"],
            ["0", "1", "0"],
            ["0", "0", "0"]
        ];
        const result = islands.islands(grid);
        expect(result).to.equal(1);
    });

    it('should return 4 for a grid with four islands', () => {
        const grid = [
            ["1", "0", "0", "1"],
            ["0", "0", "0", "0"],
            ["0", "1", "0", "1"]
        ];
        const result = islands.islands(grid);
        expect(result).to.equal(4);
    });

    it('should return 1 for a grid with one large island', () => {
        const grid = [
            ["1", "1", "1", "1"],
            ["1", "1", "1", "1"],
            ["1", "1", "1", "1"]
        ];
        const result = islands.islands(grid);
        expect(result).to.equal(1);
    });
});