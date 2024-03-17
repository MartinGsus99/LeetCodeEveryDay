"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxProduct(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    const dp = new Array(nums.length).fill(1);
    dp[0] = nums[0];
    for (let i = 0; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] * nums[i]);
    }
    let max = dp[0];
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(dp[i], max);
    }
    return max;
}
let nums = [2, 3, -2, 4];
console.log(maxProduct(nums));
