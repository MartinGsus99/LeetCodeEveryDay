/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n == 0) {
        return null
    }
    let root = new TreeNode(1, null, null)
    for (let i = 2; i <= n; i++) {
        insertNumberToBST(root, i)
    }
    return root
}

var insertNumberToBST = function (root, num) {
    if (root == null) {
        let newNode = new TreeNode(num)
        return newNode
    }

    if (root.val > num) {
        insertNumberToBST(root.left, num)
    }
    if (root.right < num) {
        insertNumberToBST(root.right, num)
    }
}