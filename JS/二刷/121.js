/**
 * @param {number[]} prices
 * @return {number}
 */

//超时
var maxProfit = function (prices) {
    const n = prices.length
    const res = new Array(n).fill(0)

    for (let i = 0; i < n - 1; i++) {
        let max = 0
        for (let j = i + 1; j < n; j++) {
            let temp = prices[j] - prices[i]
            if (temp > max) {
                max = temp
            }
        }
        res[i] = max
    }

    return Math.max(...res)
}

var maxProfit = function (prices) {
    let inf = Number.MAX_SAFE_INTEGER
    let minPrice = inf, maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        minPrice = Math.min(minPrice, prices[i])
    }
    return maxProfit
}


