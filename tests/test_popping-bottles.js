const assert = require('chai').assert;
const MarketCustomer = require('../index');

describe("The Market Customer class", () => {
    it("should output 15 total bottles with input of $10", () => {
        let newCustomer = new MarketCustomer(10)
        assert.equal(newCustomer.totalBottles, 15);
    })

    it("should output 35 with input of 20", () => {
        let newCustomer = new MarketCustomer(20)
        assert.equal(newCustomer.totalBottles, 35);
    })

    it("should output 55 with input of 30", () => {
        let newCustomer = new MarketCustomer(30)
        assert.equal(newCustomer.totalBottles, 55);
    })

    it("should output 75 with input of 40", () => {
        let newCustomer = new MarketCustomer(40)
        assert.equal(newCustomer.totalBottles, 75);
    })

    it("should provide a string as a totals output if true-flagged", () => {
        let newCustomer = new MarketCustomer(10)
        assert.equal(typeof newCustomer.provideTotals(true), 'string');
    })

    it("should provide an array as a totals output if false-flagged", () => {
        let newCustomer = new MarketCustomer(10)
        assert(Array.isArray(newCustomer.provideTotals(false)));
    })

    it("should provide an array of valid numbers as totals output", () => {
        let newCustomer = new MarketCustomer(40)
        const arr = newCustomer.provideTotals(false)
        assert.equal(arr[1], 75)
        assert.equal(arr[2], 1)
        assert.equal(arr[3], 3)
        assert.equal(arr[4], 37)
        assert.equal(arr[5], 18)
    })
})