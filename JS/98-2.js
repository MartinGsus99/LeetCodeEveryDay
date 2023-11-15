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
var isValidBST = function (root) {
  if (root == null) {
    return true
  }

  let res = []
  const traverse = function (node) {
    if (node === null) {
      return
    }
    traverse(node.left)
    res.push(node.val)
    traverse(node.right)

  }
  traverse(root)
  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] >= res[i + 1]) {
      return false
    }
  }
  return true
}

var isValidBST = function (root) {
  let stack = []
  let inorfer = -Infinity

  while (stack.length || root != null) {
    while (root != null) {
      stack.push(root)
      root = root.left
    }
    root=stack.pop()
    if(root.val<=inorfer){
      return false
    }
    inorfer=root.val
    root=root.right
  }
  return true
}