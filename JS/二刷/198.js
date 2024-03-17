/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length
    const income = new Array(n).fill(
        0
    )
    income[0] = nums[0]
    income[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < n; i++) {
        income[i] = Math.max(income[i - 1], income[i - 2] + nums[i])
    }
    return income[n - 1]
}