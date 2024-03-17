"use strict";
function coinChange(coins, amount) {
    if (amount === 0) {
        return 0;
    }
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] < 0)
                continue;
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
let coins = [1, 2, 5], amount = 11;
console.log(coinChange(coins, amount));
