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
//寻找每个节点的最大祖先和最小祖先，计算差值
var maxAncestorDiff = function (root) {
    const dfs = function (root, mi, ma) {
        if (root === null) {
            return 0
        }

        let diff = Math.max(Math.abs(root.val - mi), Math.abs(root.val - ma))
        mi = Math.min(mi, root.val)
        ma = Math.max(ma, root.val)
        diff = Math.max(diff, dfs(root.left, mi, ma))
        diff = Math.max(diff, dfs(root.right, mi, ma))
        return diff
    }

    return dfs(root, root.val, root.val)


}