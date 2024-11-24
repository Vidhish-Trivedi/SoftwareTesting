// @ts-nocheck
import { expect } from 'chai';
import add from '../src/add.js';

describe('add', () => {
    it('add test', () => {
        expect(add(1, 4)).to.equal(5);
    })});