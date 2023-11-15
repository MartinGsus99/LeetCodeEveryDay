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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null
  }

  const traverse = function (node) {
    if (!node) return null
    traverse(node.left)
    traverse(node.right)
    let temp = node.left
    node.left = node.right
    node.right = temp

  }

  traverse(root)
  return root
}