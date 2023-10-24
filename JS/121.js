/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let cost = Infinity, profit = 0

  for (let price of prices) {
    cost = Math.min(cost, price)
    profit = Math.max(profit, price - cost)
  }
  return profit
}