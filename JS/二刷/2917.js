/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
    let ans = 0
    for (let i = 0; i < 31; i++) {
        let count = 0

        for (const num of nums) {
            if ((num >> i) & 1) {
                count++
            }
        }

        if (count >= k) {
            ans |= 1 << i
        }
    }
    return ans
}