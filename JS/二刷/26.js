/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0, right = 0
    let k = 0
    while (right < nums.length) {
        if (nums[left] != nums[right + 1]) {
            left++
            k++
            nums[left] = nums[right + 1]
        } else {
            right++
        }
    }
    return k
}