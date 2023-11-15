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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    if (!root) {
        return 0
    }

    let max = 0
    const traverse = function (node) {
        if (!node) return 0

        const leftDep = traverse(node.left)
        const rightDep = traverse(node.right)

        max = Math.max(max, (leftDep + rightDep))
        return Math.max(leftDep, rightDep) + 1
    }


    traverse(root)

    return max

}