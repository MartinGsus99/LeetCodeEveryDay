/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let maxVal = Math.max.apply(null, nums)
    const sum = new Array(maxVal + 1).fill(0)

    for (let val of nums) {
        sum[val] += val
    }

    console.log(sum)
    const rob = function (nums) {

        const n = nums.length

        const dp = Array(n).fill(0)

        dp[0] = nums[0]

        let first = nums[0], second = Math.max(nums[0], nums[1])
        for (let i = 2; i < n; i++) {

            let temp = second
            second = Math.max(first + nums[i], second)
            first = temp
        }
        return second

    }

    return rob(sum)
}

let nums = [3, 4, 2]
console.log(deleteAndEarn(nums))