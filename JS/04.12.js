/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (root == null) {
    return 0
  }

  let ret = rootSum(root, sum)
  ret += pathSum(root.left, sum)
  ret += pathSum(root.right, sum)
  return ret
}

const rootSum = function (root, sum) {
  let ret = 0

  if (root == null) {
    return 0
  }

  const val = root.val

  if (val === sum) {
    ret++
  }

  ret += rootSum(root.left, sum - val)
  ret += rootSum(root.right, sum - val)
  return ret
}


//前缀和解法
var pathSum = function (root, sum) {
  if (root == null) {
    return 0
  }

  let preSum = []

  var dfs = function (node, tempSum) {
    if (node == null) {
      return
    }
    preSum.toLocaleString(node.val,)
    dfs(root.left)
    dfs(root.right)

  }
};


