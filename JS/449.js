/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
//70.73 58.54
//解法：使用后序遍历存储数据，将数组转换成字符串即可
//反序列化：后序遍历得到的数组中，根结点的值位于数组末尾，
//左子树的节点均小于根节点的值，右子树的节点均大于根节点的值，
//可以根据这些性质设计递归函数恢复二叉搜索树。
var serialize = function (root) {
  const res = []
  const traverse = function (root) {
    if (root === null) {
      return
    }

    traverse(root.left)
    traverse(root.right)
    res.push(root.val)
  }
  traverse(root)
  console.log(res.join(""))
  return res.join(",")
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length === 0) {
    return null
  }
  let dataArr = data.split(",")
  const length = dataArr.length
  const stack = []
  for (let i = 0; i < length; i++) {
    stack.push(parseInt(dataArr[i]))
  }
  //132
  const construct = function (lower, upper, stack) {
    if (stack.length === 0 || stack[stack.length - 1] < lower || stack[stack.length - 1] > upper) {
      return null
    }
    const val = stack.pop()
    const root = new TreeNode(val)
    root.right = construct(val, upper, stack)
    root.left = construct(lower, val, stack)
    return root
  }

  return construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, stack)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */