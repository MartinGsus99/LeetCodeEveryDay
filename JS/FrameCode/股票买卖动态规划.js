//每天有三种选择：买入、卖出、无操作
//限制：持有股票：可以卖出、无操作；没持有股票：可以买入、无操作；

//只买卖一次，无法通过leetcode
var stocksChange0 = function (prices) {
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
var stocksChange1 = function (prices) {
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
var stocksChange2 = function (prices) {
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

//case3:k=+infinity with cooldown
//每次sell以后需要等一天，将这个特点加入以上的状态转移方即可
// dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
// dp[i][1] = max(dp[i - 1][1], dp[i - 2][0] - prices[i])    //从上一次卖出之后的第二天

var stocksChange3 = function (prices) {
  const n = prices.length
  let dp_i_0 = 0
  let dp_i_1 = -Infinity
  let dp_pre_0 = 0 //代表dp[i-2][0]

  for (let i = 0; i < n; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i])
    dp_pre_0 = temp
  }

  return dp_i_0
}

//case4:每次交易需要手续费，只需要从利润中减去手续费就行
// dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
// dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee)  //买入需要手续费
var stocksChange4 = function (prices, fee) {
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


//case5:k=2
//和前面的情况不太一样，因为上面的情况和K的关系不大
//k为正无穷时，状态转移就和k没有关系了；要么k=1，跟k=0base case 很近
// dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
// dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])

var stocksChange6 = function (prices) {
  const n = prices.length
  let dp_i10 = 0
  let dp_i11 = -Infinity
  let dp_i20 = 0
  let dp_i21 = -Infinity

  for (let i = 0; i < n; i++) {
    dp_i20 = Math.max(dp_i20, dp_i21 + prices[i])
    dp_i21 = Math.max(dp_i21, dp_i10 - prices[i])
    dp_i10 = Math.max(dp_i10, dp_i11 + prices[i])
    dp_i11 = Math.max(dp_i11, -prices[i])
  }
  return dp_i20
}


let prices = [7, 1, 5, 3, 6, 4]
console.log(stocksChange6(prices))

