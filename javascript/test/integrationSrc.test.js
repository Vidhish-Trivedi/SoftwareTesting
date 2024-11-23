import { expect } from 'chai';
import { add, subtract, multiply, divide, complexMathCalculation } from '../src/integrationSrc.js';

describe('Integration Tests', () => {
    it('should add two numbers correctly', () => {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });

    it('should subtract two numbers correctly', () => {
        const result = subtract(5, 3);
        expect(result).to.equal(2);
    });

    it('should multiply two numbers correctly', () => {
        const result = multiply(2, 3);
        expect(result).to.equal(6);
    });

    it('should divide two numbers correctly', () => {
        const result = divide(6, 3);
        expect(result).to.equal(2);
    });

    it('should perform a complex math calculation correctly', () => {
        const result = complexMathCalculation(2, 3, 4, 5);
        expect(result).to.equal(-0.5);
    });
});