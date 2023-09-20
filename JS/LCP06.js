/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  const n = coins.length
  let result = 0
  for (let i = 0; i < n; i++) {
    let temp = parseInt(coins[i] / 2)
    if (coins[i] % 2 === 1) { temp += 1 }
    result = result + temp
  }
  return result
}