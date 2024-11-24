// @ts-nocheck
import { expect } from 'chai';
import { convexHull } from '../src/convex-hull-graham-scan.js';

describe('convexHull', () => {
    it('should throw an error if less than 3 points are provided', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 1, y: 1 }
        ];
        expect(() => convexHull(points)).to.throw('Minimum of 3 points is required to form closed polygon!');
    });

    it('should return the correct convex hull for a set of points', () => {
        const points = [
            { x: 0, y: 3 },
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 4, y: 4 },
            { x: 0, y: 0 },
            { x: 1, y: 2 },
            { x: 3, y: 1 },
            { x: 3, y: 3 }
        ];
        const expectedHull = [{ x: 0, y: 3 }, { x: 4, y: 4 }, { x: 3, y: 1 }, { x: 0, y: 0 }];
        const hull = convexHull(points);
        expect(hull).to.deep.equal(expectedHull);
    });

    it('should handle collinear points correctly', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 }
        ];
        const expectedHull = [
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 2, y: 2 },
            { x: 1, y: 1 },
            { x: 0, y: 0 }
        ];
        const hull = convexHull(points);
        expect(hull).to.deep.equal(expectedHull);
    });

    it('should handle points forming a triangle', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 0 }
        ];
        const expectedHull = [{ x: 1, y: 1 }, { x: 2, y: 0 }, { x: 0, y: 0 }];
        const hull = convexHull(points);
        expect(hull).to.deep.equal(expectedHull);
    });

    it('should handle points forming a square', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 0 },
            { x: 1, y: 1 }
        ];
        const expectedHull = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 0 }, { x: 0, y: 0 }];
        const hull = convexHull(points);
        expect(hull).to.deep.equal(expectedHull);
    });
});