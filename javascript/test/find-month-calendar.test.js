import { expect } from 'chai';
import Month from "../src/find-month-calendar.js"

describe('Month Calendar Tests', () => {
    let month;

    beforeEach(() => {
        month = new Month();
    });

    it('should parse date correctly', () => {
        const date = '12/2021';
        const parsedDate = month.parseDate(date);
        expect(parsedDate).to.deep.equal({ month: 12, year: 2021 });
    });

    it('should throw error for invalid date format', () => {
        const date = '12-2021';
        expect(() => month.parseDate(date)).to.throw('Improper string encoding');
    });

    it('should identify leap years correctly', () => {
        expect(month.isLeapYear(1900)).to.be.false;
        expect(month.isLeapYear(2000)).to.be.true;
        expect(month.isLeapYear(2020)).to.be.true;
    });

    it('should calculate day difference correctly', () => {
        const startDate = { month: 1, year: 1900 };
        const endDate = { month: 1, year: 1901 };
        const diff = month.getDayDiff(startDate, endDate);
        expect(diff).to.equal(365);
    });

    it('should correctly identify if start date is greater than end date', () => {
        const startDate = { month: 12, year: 2021 };
        const endDate = { month: 1, year: 2021 };
        const result = month.isGreater(startDate, endDate);
        expect(result).to.be.true;
    });

    it('should correctly identify if start date is not greater than end date', () => {
        const startDate = { month: 1, year: 2021 };
        const endDate = { month: 12, year: 2021 };
        const result = month.isGreater(startDate, endDate);
        expect(result).to.be.false;
    });
});