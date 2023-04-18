/**
 * @param {number[]} prices
 * @return {number}
 */
//97.55 44.19
var maxProfit = function (prices) {
  let n = prices.length
  dp_i_0 = 0
  dp_i_1 = -Infinity
  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i])
  }
  if (dp_i_0 < 0) {
    return 0
  } else {
    return dp_i_0
  }
}