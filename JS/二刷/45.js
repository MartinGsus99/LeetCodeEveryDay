/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let count = 0

    const n = nums.length

    let left = 0, right = 1

    while (right < n) {
        let maxPos = 0
        for (let i = start; i < right; i++) {
            maxPos = max(maxPos, i + nums[i])
        }
        left=end
        right=maxPos+1
        count++
    }
    return count
}