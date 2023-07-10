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
//48.70 72.69
var countNodes = function (root) {
  if (root == null) {
    return 0
  }
  let l = root
  let r = root
  let hl = 0, hr = 0

  while (l != null) {
    l = l.left
    hl++
  }

  while (r != null) {
    r = r.right
    hr++
  }

  if (hl === hr) {
    return Math.pow(2, hl) - 1
  }

  return 1 + countNodes(root.left) + countNodes(root.right)
}