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
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) {
        return true
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

    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] >= nums[i + 1]) {
            return false
        }
    }
    return true

}