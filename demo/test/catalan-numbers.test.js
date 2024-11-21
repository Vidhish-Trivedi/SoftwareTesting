import { expect } from 'chai';
import catalanNumbers from '../src/catalan-numbers.js';

describe('Catalan Numbers Tests', () => {
    it('should return [1] for n = 0', () => {
        const result = catalanNumbers(0);
        expect(result).to.deep.equal([1]);
    });

    it('should return [1, 1] for n = 1', () => {
        const result = catalanNumbers(1);
        expect(result).to.deep.equal([1, 1]);
    });

    it('should return correct catalan numbers for n = 2', () => {
        const result = catalanNumbers(2);
        expect(result).to.deep.equal([1, 1, 2]);
    });

    it('should return correct catalan numbers for n = 3', () => {
        const result = catalanNumbers(3);
        expect(result).to.deep.equal([1, 1, 2, 5]);
    });

    it('should return correct catalan numbers for n = 4', () => {
        const result = catalanNumbers(4);
        expect(result).to.deep.equal([1, 1, 2, 5, 14]);
    });

    it('should return correct catalan numbers for n = 5', () => {
        const result = catalanNumbers(5);
        expect(result).to.deep.equal([1, 1, 2, 5, 14, 42]);
    });

    it('should return correct catalan numbers for n = 6', () => {
        const result = catalanNumbers(6);
        expect(result).to.deep.equal([1, 1, 2, 5, 14, 42, 132]);
    });

    it('should return correct catalan numbers for n = 7', () => {
        const result = catalanNumbers(7);
        expect(result).to.deep.equal([1, 1, 2, 5, 14, 42, 132, 429]);
    });

    it('should return correct catalan numbers for n = 8', () => {
        const result = catalanNumbers(8);
        expect(result).to.deep.equal([1, 1, 2, 5, 14, 42, 132, 429, 1430]);
    });

    it('should return correct catalan numbers for n = 9', () => {
        const result = catalanNumbers(9);
        expect(result).to.deep.equal([1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862]);
    });

    it('should return correct catalan numbers for n = 10', () => {
        const result = catalanNumbers(10);
        expect(result).to.deep.equal([1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796]);
    });
});