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
var isSymmetric = function (root) {
  if (!root) return
  const traverse = function (left, right) {
    if (!left && !right) {
      return true
    }
    if (!left || !right) {
      return false
    }
    if (left.val != right.val) {
      return false
    }

    return traverse(left.left, right.right) && traverse(left.right, right.left)


  }
  return traverse(root.left, root.right)
}