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
var getMinimumDifference = function (root) {
    let arr = []

    if (!root) {
        return 0
    }

    const midOrderTeaverse = function (node) {
        if (!node) {
            return
        }

        midOrderTeaverse(node.left)
        arr.push(node.val)
        midOrderTeaverse(node.right)
    }
    midOrderTeaverse(root)
    console.log(arr)

    let minAbs = Infinity
    for (let i = 0; i < arr.length - 1; i++) {
        minAbs = Math.min(minAbs, arr[i + 1] - arr[i])
    }
    return minAbs
}