/**
 * @param {number[]} prices
 * @return {number}
 */
//93.52 78.61
var maxProfit = function (prices) {
  const n = prices.length
  let dp_i_0 = 0
  let dp_i_1 = -Infinity

  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i])
  }
  return dp_i_0
}

let prices = [1, 2, 3, 4, 5]
console.log(maxProfit(prices))