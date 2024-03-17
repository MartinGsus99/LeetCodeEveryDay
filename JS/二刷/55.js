/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length
    const canJump = new Array(n).fill(false)

    canJump[0] = true
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i]

        if (canJump[i]) {
            for (let j = 1; j <= temp; j++) {
                canJump[i + j] = true
            }
        }
    }

    return canJump[n - 1]
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 必须到达end下标的数字
    let end = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (end - i <= nums[i]) {
            end = i;
        }
    }

    return end == 0;
};
