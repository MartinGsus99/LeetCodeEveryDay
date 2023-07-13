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
 * @param {number} targetSum
 * @return {number}
 */
//向下搜索，root，path
var pathSum = function (root, targetSum) {
  if (root == null) {
    return 0
  }
  let res = 0

  var dfs = function (root, sum) {
    if (root == null) {
      return 0
    }

    sum += root.val.toString()
    if (sum = targetSum) {
      res += 1
      dfs(root.left, 0)
      dfs(root.right, 0)
    }
    dfs(root.left, sum)
    dfs(root.right, sum)

  }

  dfs(root, 0)
  return res
}