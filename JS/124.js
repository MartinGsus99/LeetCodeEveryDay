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
var maxPathSum = function (root) {
  if (root.left === null && root.right === null) {
    return root.val
  }
  let max = -Infinity
  const traverse = function (node) {
    if (node === null) {
      return 0
    }

    let left_max = traverse(node.left)
    let right_max = traverse(node.right)

    if (node.val >= 0 && left_max >= 0 && right_max >= 0) {
      node.max = left_max + right_max + node.val
    } else if (node.val < 0) {
      node.max = Math.max(left_max, right_max)
    } else if (left_max >= 0 && node.val >= 0) {
      node.max = node.val + left_max
    } else if (right_max >= 0 && node.val >= 0) {
      node.max = right_max + node.val
    } else if (node.val >= 0 && left_max <= 0 && right_max <= 0) {
      node.max = Math.max(node.val + left_max, node.val + right_max)
    }
    console.log(node.max)
    if (node.max >= max) {
      max = node.max
    }
    return node.max
  }

  traverse(root)

  return max
}

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
//88.96 97.16
var maxPathSum = function (root) {
  if (root.left === null && root.right === null) {
    return root.val
  }
  let max = -Infinity
  const traverse = function (node) {
    if (node === null) {
      return 0
    }

    let left_max = traverse(node.left)
    let right_max = traverse(node.right)

    const innerMax = left_max + node.val + right_max
    max = Math.max(max, innerMax)

    const outputMax = node.val + Math.max(0, left_max, right_max)

    //如果结点的max为负，那必然不选择这路
    return outputMax < 0 ? 0 : outputMax
  }

  traverse(root)

  return max
}