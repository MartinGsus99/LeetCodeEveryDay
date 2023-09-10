/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    return null
  }

  const construct = function (start, end) {
    if (start > end) {
      return [null]
    }

    let nodeList = []

    for (let i = start; i <= end; i++) {
      let leftNodes = construct(start, i - 1)
      let rightNodes = construct(i + 1, end)
      for (let left of leftNodes) {
        for (let right of rightNodes) {
          nodeList.push(new TreeNode(i, left, right))
        }
      }
    }
    
    return nodeList
  }

  return construct(1, n)
}