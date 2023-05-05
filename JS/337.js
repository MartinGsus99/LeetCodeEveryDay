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
//5.46 5.02
var rob1 = function (root) {
  if (!root) {
    return 0
  }
  let memo = new Map()
  var traverse = function (node) {
    if (!node) {
      return 0
    }
    if (memo.has(node)) {
      return memo.get(node)
    }
    console.log('node', node)
    let robIt = node.val + (node.left == null ? 0 : traverse(node.left.left) + traverse(node.left.right)) + (node.right == null ? 0 : traverse(node.right.left) + traverse(node.right.right))
    let notRob = traverse(node.left) + traverse(node.right)

    let res = Math.max(robIt, notRob)
    memo.set(node, res)
    return res
  }
  return traverse(root)
}

//44.76 63.75
var rob = function (root) {
  if (!root) {
    return 0
  }

  var dp = function (node) {
    if (!node) {
      return [0, 0]
    }
    let left = dp(node.left)
    let right = dp(node.right)
    let robIt = node.val + left[1] + right[1]
    let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    return [robIt, notRob]
  }

  let res = dp(root)
  return Math.max(res[0], res[1])
}