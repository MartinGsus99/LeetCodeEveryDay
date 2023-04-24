/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
//66.14 94.17
var maxProfit = function (prices, fee) {
  const n = prices.length

  let dp_i_0 = 0
  let dp_i_1 = -Infinity

  for (let i = 0; i < n; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i] - fee)
  }
  return dp_i_0
}

let prices = [1, 3, 7, 5, 10, 3]
console.log(maxProfit(prices, 3))