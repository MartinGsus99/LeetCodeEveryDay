/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    if (!root) {
        return
    }

    let nums = []

    const traverse = function (node) {
        if (!node) {
            return
        }

        traverse(node.left)
        nums.push(node.val)
        traverse(node.right)

    }

    traverse(root)

    return nums[k - 1]


}