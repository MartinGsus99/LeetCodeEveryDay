\/**
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

//31.16 83.05
var sumNumbers = function (root) {
  if (root == null) {
    return 0
  }
  let path = ""

  let res = []
  let sum = 0
  var DFS = function (node, path) {

    if (node == null) {
      return
    }
    path = path + node.val
    DFS(node.left, path)
    DFS(node.right, path)
    if (node.left == null && node.right == null) {
      res.push(path)
      sum += parseInt(path)
    }
  }

  DFS(root, path)

  return sum
}
