/**
 * @param {number[]} nums
 * @return {boolean}
 */
//动态规划方法：
// 1.定义 dp[i] 为以 nums[i] 为结尾的子数组是否为有效分割
// 2.初始化 dp[0] = true
// 3.从前向后遍历
// 4.如果 dp[i-2]存在有效划分，则后面两个数组相同
// 5.如果 dp[i-3]存在有效划分，则后面三个相同或者递增
var validPartition = function (nums) {

    const validTwo = function (a, b) {
        if (a === b) {
            return true
        } else {
            return false
        }
    }

    const validThree = function (a, b, c) {
        if (a === b && b === c) {
            return true
        } else if (a + 1 === b && b + 1 === c) {
            return true
        } else {
            return false
        }
    }
    const n = nums.length
    const dp = new Array(n + 1).fill(false)

    dp[0] = true

    for (let i = 1; i <= n; i++) {
        if (i >= 2) {
            dp[i] = dp[i - 2] && validTwo(nums[i - 2], nums[i - 1])
        }
  
        if (i >= 3) {
            dp[i] = dp[i] || (dp[i - 3] && validThree(nums[i - 3], nums[i - 2], nums[i - 1]));
        }

    }
    return dp[n]
}



