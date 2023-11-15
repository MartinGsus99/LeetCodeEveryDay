/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  if (index < 0 || index >= this.nums.length) {
    return
  }
  this.nums[index] = val
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left < 0 || right > this.nums.length) {
    return
  }
  let sum = 0
  for (let i = left; i < right + 1; i++) {
    sum += this.nums[i]
  }
  return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */