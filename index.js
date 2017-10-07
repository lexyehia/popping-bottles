class MarketCustomer {

    constructor(argv) {
        this.cash = argv
    }

    buyBottles() {
        const newBottles = Math.trunc(this.cash / 2)
        const cost = newBottles * 2

        this.cash -= cost
        this.totalBottles = this.remainingBottles = this.remainingCaps = newBottles
    }

    recycleBottles() {
        const newBottles = Math.trunc(this.remainingBottles / 2)
        const usedBottles = newBottles * 2

        this.totalBottles += newBottles
        this.bottlesToBottles = (this.bottlesToBottles || 0) + newBottles
        this.remainingBottles += newBottles - usedBottles
        this.remainingCaps += newBottles
    }

    recycleCaps() {
        const newBottles = Math.trunc(this.remainingCaps / 4)
        const usedCaps = newBottles * 4

        this.totalBottles += newBottles
        this.capsToBottles = (this.capsToBottles || 0) + newBottles
        this.remainingBottles += newBottles
        this.remainingCaps += newBottles - usedCaps
    }

    maximizeBottles() {
        const self = this

        self.buyBottles()
        recursiveRecycling()

        function recursiveRecycling() {
            if (self.remainingBottles >= 2) {
                self.recycleBottles()
            }

            if (self.remainingCaps >= 4) {
                self.recycleCaps()
            }

            if (self.remainingBottles < 2 && self.remainingCaps < 4) {
                return
            } else {
                recursiveRecycling()
            }
        }
    }

    provideTotals(withText) {
        if (!withText) {
            return [
                this.cash,
                this.totalBottles,
                this.remainingBottles,
                this.remainingCaps,
                this.bottlesToBottles,
                this.capsToBottles
            ];

        } else {
            return  "TOTAL BOTTLES: " + this.totalBottles + "\n" +
                    "REMAINING BOTTLES: " + this.remainingBottles + "\n" +
                    "REMAINING CAPS: " + this.remainingCaps + "\n" +
                    "TOTAL EARNED:" + "\n" +
                    "  BOTTLES: " + this.bottlesToBottles + "\n" +
                    "  CAPS: " + this.capsToBottles;
        }
    }
}

module.exports = MarketCustomer