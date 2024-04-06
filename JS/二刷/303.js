/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.processedNums = []
    let tempTotal = 0
    for (let i = 0; i < nums.length; i++) {
        tempTotal += nums[i]
        this.processedNums[i] = tempTotal
    }
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.processedNums[right] - this.processedNums[left]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

//浅醉和

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    const n = nums.length
    this.processedNums = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {

        this.processedNums[i + 1] = this.processedNums[i] + nums[i]
    }
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {

    return this.processedNums[right + 1] - this.processedNums[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */