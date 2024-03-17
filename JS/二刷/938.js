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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {

    let sum = 0
    const midOrder = function (node) {
        if (!node) {
            return
        }
        midOrder(node.left)

        if (node.val <= high && node.val >= low) {
            console.log(node.val)
            sum += node.val
        }

        midOrder(node.right)
    }

    midOrder(root, sum)
    return sum
}