import { expect } from 'chai';
import Determinant from '../src/determinant.js';

describe('Determinant', () => {
    let determinant;

    beforeEach(() => {
        determinant = new Determinant();
    });

    describe('subMatrix', () => {
        it('should return the correct submatrix', () => {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];
            const expectedSubMatrix = [
                [4, 6],
                [7, 9]
            ];
            expect(determinant.subMatrix(matrix, 0, 1)).to.deep.equal(expectedSubMatrix);
        });
    });

    describe('isMatrixSquare', () => {
        it('should return true for a square matrix', () => {
            const matrix = [
                [1, 2],
                [3, 4]
            ];
            expect(determinant.isMatrixSquare(matrix)).to.be.true;
        });

        it('should return false for a non-square matrix', () => {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6]
            ];
            expect(determinant.isMatrixSquare(matrix)).to.be.false;
        });
    });

    describe('determinant', () => {
        it('should throw an error for an invalid matrix', () => {
            expect(() => determinant.determinant([])).to.throw('Input is not a valid 2D matrix.');
            expect(() => determinant.determinant([1, 2, 3])).to.throw('Input is not a valid 2D matrix.');
        });

        it('should throw an error for a non-square matrix', () => {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6]
            ];
            expect(() => determinant.determinant(matrix)).to.throw('Square matrix is required.');
        });

        it('should return the correct determinant for a 1x1 matrix', () => {
            const matrix = [
                [5]
            ];
            expect(determinant.determinant(matrix)).to.equal(5);
        });

        it('should return the correct determinant for a 2x2 matrix', () => {
            const matrix = [
                [1, 2],
                [3, 4]
            ];
            expect(determinant.determinant(matrix)).to.equal(-2);
        });

        it('should return the correct determinant for a 3x3 matrix', () => {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];
            expect(determinant.determinant(matrix)).to.equal(0);
        });

        it('should return the correct determinant for a 4x4 matrix', () => {
            const matrix = [
                [1, 0, 2, -1],
                [3, 0, 0, 5],
                [2, 1, 4, -3],
                [1, 0, 5, 0]
            ];
            expect(determinant.determinant(matrix)).to.equal(30);
        });
    });
});