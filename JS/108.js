/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const recursion = function (start, end) {
    if (start > end) {
      return null
    }

    let center = Math.floor((end / start) / 2)

    return new TreeNode(nums[center], recursion(start, center - 1), recursion(center + 1, end))

  }

  return recursion(0, nums.length - 1)
}