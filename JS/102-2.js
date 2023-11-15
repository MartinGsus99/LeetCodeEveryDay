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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = []
  if (!root) {
    return res
  }

  const q = []
  q.push(root)

  while (q.length != 0) {
    let tempLength = q.length
    res.push([])
    for (let i = 0; i < tempLength; i++) {
      let cur = q.shift()
      res[res.length - 1].push(cur.val)
      if (cur.left) {
        q.push(cur.left)
      }
      if (cur.right) {
        q.push(cur.right)
      }
    }
  }
  return res
}