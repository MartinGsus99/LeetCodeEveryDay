//完全二叉树：最下面一层的结点从左到右一次排列
//满二叉树：节点数量为2^N

//普通二叉树
var sumNodesOfCommonTree = function (root) {
  if (root == null) {
    return 0
  }

  return 1 + sumNodesOfCommonTree(root.left) + sumNodesOfCommonTree(root.right)
}

//满二叉树
var sumNodesOfFullBinaryTree = function (root) {
  let h = 0
  while (root != null) {
    h++
    root = root.left
  }
  return Math.pow(2, h) - 1
}

//完全二叉树:O（lgN*lgN）
var sumNodesOfPerfectBinaryTree = function (root) {
  let l = root
  let r = root

  let hl = 0, hr = 0

  while (l != null) {
    l = l.left
    hl++
  }

  while (r != null) {
    r = r.right
    hr++
  }

  if (hl == hr) {
    return Math.pow(2, h) - 1
  }

  return 1 + sumNodesOfPerfectBinaryTree(root.left) + sumNodesOfPerfectBinaryTree(root.right)
}