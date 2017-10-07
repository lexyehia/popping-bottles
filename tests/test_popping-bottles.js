const assert = require('chai').assert;
const MarketCustomer = require('../index');

describe("The Market Customer class", () => {
    it("should output 15 total bottles with input of $10", () => {
        let newCustomer = new MarketCustomer(10)
        newCustomer.maximizeBottles()
        assert.equal(newCustomer.totalBottles, 15);
    })

    it("should output 35 with input of 20", () => {
        let newCustomer = new MarketCustomer(20)
        newCustomer.maximizeBottles()
        assert.equal(newCustomer.totalBottles, 35);
    })

    it("should output 55 with input of 30", () => {
        let newCustomer = new MarketCustomer(30)
        newCustomer.maximizeBottles()
        assert.equal(newCustomer.totalBottles, 55);
    })

    it("should output 75 with input of 40", () => {
        let newCustomer = new MarketCustomer(40)
        newCustomer.maximizeBottles()
        assert.equal(newCustomer.totalBottles, 75);
    })

    it("should provide a string as a totals output if true-flagged", () => {
        let newCustomer = new MarketCustomer(10)
        newCustomer.maximizeBottles()
        assert.equal(typeof newCustomer.provideTotals(true), 'string');
    })

    it("should provide an array as a totals output if false-flagged", () => {
        let newCustomer = new MarketCustomer(10)
        newCustomer.maximizeBottles()
        assert(Array.isArray(newCustomer.provideTotals(false)));
    })

    it("should provide an array of valid numbers as totals output", () => {
        let newCustomer = new MarketCustomer(10)
        newCustomer.maximizeBottles()
        newCustomer.provideTotals().forEach((n) => {
            assert.isAtLeast(n, 0);
        })
    })
})