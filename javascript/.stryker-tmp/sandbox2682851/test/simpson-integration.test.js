// @ts-nocheck
import { expect } from 'chai';
import { integralEvaluation } from '../src/simpson-integration.js';

describe('integralEvaluation', () => {
    it('should throw TypeError if N is not an integer', () => {
        expect(() => integralEvaluation(2.5, 0, 1, Math.sin)).to.throw(TypeError);
    });

    it('should throw TypeError if a or b is NaN', () => {
        expect(() => integralEvaluation(2, NaN, 1, Math.sin)).to.throw(TypeError);
        expect(() => integralEvaluation(2, 0, NaN, Math.sin)).to.throw(TypeError);
    });

    it('should throw Error if N is not even', () => {
        expect(() => integralEvaluation(3, 0, 1, Math.sin)).to.throw(Error, 'N is not an even number');
    });

    it('should throw Error if N is less than or equal to 0', () => {
        expect(() => integralEvaluation(0, 0, 1, Math.sin)).to.throw(Error, 'N has to be >= 2');
        expect(() => integralEvaluation(-2, 0, 1, Math.sin)).to.throw(Error, 'N has to be >= 2');
    });

    it('should throw Error if a is greater than b', () => {
        expect(() => integralEvaluation(2, 2, 1, Math.sin)).to.throw(Error, 'a must be less or equal than b');
    });

    it('should return 0 if a is equal to b', () => {
        expect(integralEvaluation(2, 1, 1, Math.sin)).to.equal(0);
    });

    it('should correctly evaluate the integral of sin(x) from 0 to pi', () => {
        const result = integralEvaluation(100, 0, Math.PI, Math.sin);
        expect(result).to.be.closeTo(2, 0.01);
    });

    it('should correctly evaluate the integral of x^2 from 0 to 1', () => {
        const result = integralEvaluation(100, 0, 1, x => x * x);
        expect(result).to.be.closeTo(1 / 3, 0.01);
    });

    // !TODO
    // it('should throw Error if result is NaN', () => {
    //     expect(() => integralEvaluation(2, 0, 1, x => Math.log(x))).to.throw(Error, "Result is NaN. The input interval doesn't belong to the functions domain");
    // });
});