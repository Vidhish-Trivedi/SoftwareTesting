import { expect } from 'chai'
import { validateCreditCard } from '../src/validate-credit-card.js'

describe('validateCreditCard', () => {
    it('should return true for a valid Visa card number', () => {
        const validVisa = '4111111111111111'
        expect(validateCreditCard(validVisa)).to.be.true
    })

    it('should return true for a valid MasterCard number', () => {
        const validMasterCard = '5500000000000004'
        expect(validateCreditCard(validMasterCard)).to.be.true
    })

    // it('should return true for a valid American Express card number', () => {
    //     const validAmex = '371449635398431'
    //     expect(validateCreditCard(validAmex)).to.be.true
    // })

    it('should throw an error for a card number with non-numerical characters', () => {
        const invalidCard = '4111a11111111111'
        expect(() => validateCreditCard(invalidCard)).to.throw(TypeError, '4111a11111111111 is an invalid credit card number because it has nonnumerical characters.')
    })

    it('should throw an error for a card number with invalid length', () => {
        const invalidCard = '41111111111'
        expect(() => validateCreditCard(invalidCard)).to.throw(Error, '41111111111 is an invalid credit card number because of its length.')
    })

    it('should throw an error for a card number with invalid starting digits', () => {
        const invalidCard = '9111111111111111'
        expect(() => validateCreditCard(invalidCard)).to.throw(Error, '9111111111111111 is an invalid credit card number because of its first two digits.')
    })

    it('should throw an error for a card number that fails the Luhn check', () => {
        const invalidCard = '4111111111111112'
        expect(() => validateCreditCard(invalidCard)).to.throw(Error, '4111111111111112 is an invalid credit card number because it fails the Luhn check.')
    })
})