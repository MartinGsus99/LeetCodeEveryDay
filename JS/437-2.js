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
var pathSum = function (root, targetSum) {

  let res = 0
  const traverse = function (node, currentVal) {
    
    traverse(node.left, currentVal + node.val)
    traverse(node.right, currentVal + node.val)

  
  }
}