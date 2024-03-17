/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let minLength = Infinity
    const n = nums.length
    let sum = new Array(n + 1).fill(0)
    sum[0] = 0
    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + nums[i]
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (sum[j] - sum[i] >= target) {
                minLength = Math.min(minLength, j - i)
                break
            }
        }
    }

    return minLength === Infinity ? 0 : minLength

}