/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//全部翻转，然后分两个区间进行翻转
var rotate = function (nums, k) {

    const reverse = (nums, left, right) => {
        while (left < right) {
            const temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right--
        }
    }

    //关键，不然不通过
    k = k % nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)

    return nums

}