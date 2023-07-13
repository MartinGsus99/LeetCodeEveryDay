/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//逆中序结点并拼接为链表
var convertBiNode = function (root) {
  let minNode = new TreeNode()

  var reverseInOrderTraverse = function (root) {
    if (root == null) {
      return
    }
    reverseInOrderTraverse(root.right)
    root.right = minNode
    minNode = root
    reverseInOrderTraverse(root.left)
    root.left = null
  }
  reverseInOrderTraverse(root)
  return minNode
}