//每天有三种选择：买入、卖出、无操作
//限制：持有股票：可以卖出、无操作；没持有股票：可以买入、无操作；

//只买卖一次，无法通过leetcode
var stocksChange1 = function (prices) {
  const n = prices.length
  if (n == 0) {
    return 0
  }
  for (let i = 0; i < n; i++) {
    //base case
    if (i - 1 == -1) {
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  console.log(dp)
  return dp[n - 1][0]
}

//Pass：74.49 19.72
var stocksChange2 = function (prices) {
  let n = prices.length
  dp_i_0 = 0
  dp_i_1 = -Infinity
  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i])
  }
  return dp_i_0
}


//case2:k=+Infinity
//如果K为正无穷，可以认为k和k-1是一样的
//dp[i][k][0]=max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
//dp[i][k][1]=max(dp[i-1][k][1],dp[i-1][k][0]-prices[i])=max(dp[i-1][k][1],dp[i-1][k][0]-prices[i])
//由上可见，此时不需要记录k
//dp[i][0] = max(dp[i - 1][], dp[i - 1][1] + prices[i])
//dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i])
var stocksChange = function (prices) {
  const n = prices.length
  let dp_i_0 = 0
  let dp_i_1 = -Infinity
  for (let i = 0; i < n; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i])
  }
  return dp_i_0
}


let prices = [7, 1, 5, 3, 6, 4]
console.log(stocksChange(prices))

