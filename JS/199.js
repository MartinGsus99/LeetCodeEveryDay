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
 * @return {number[]}
 */

//解题思路：中序遍历，使用一个数组来存放所有的结点，然后记录他的层数，如果同一层有两个，则取最右边的结点
//5.02 37.02
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
 * @return {number[]}
 */

//解题思路：中序遍历，使用一个数组来存放所有的结点，然后记录他的层数，如果同一层有两个，则取最右边的结点
//84.85 6.81
var rightSideView = function (root) {
  const arr = []
  const traverse = function (root, dep) {
    if (!root) {
      return
    }

    traverse(root.left, dep + 1)
    let newNode = {
      val: root.val,
      dep: dep
    }
    arr.push(newNode)
    traverse(root.right, dep + 1)

  }
  traverse(root, 0)

  //遍历数组，如果有相同层的放到一起
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].dep] = arr[i].val
  }
  return result
}

//广度优先解法：每次先访问左子树，最后访问的一定是每层的最右边的结点
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
 * @return {number[]}
 */

//解题思路：中序遍历，使用一个数组来存放所有的结点，然后记录他的层数，如果同一层有两个，则取最右边的结点
//68.85 47.49
var rightSideView = function (root) {
  const res = []
  const queue = []
  if (!root) {
    return res
  }
  queue.push(root)
  while (queue.length != 0) {
    let size = queue.length
    res.push(queue[size - 1].val)
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
  }
  return res
}
