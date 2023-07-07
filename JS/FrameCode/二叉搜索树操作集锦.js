//基础框架
var Traverse = function (root) {
  //something need to do

  Traverse(root.left)
  Traverse(root.right)
}

//所有结点+1
var plusOne = function (root) {
  if (root == null) {
    return
  }
  root.val += 1
  plusOne(root.left)
  plusOne(root.right)
}

//判断两个二叉树是否完全相同
var isSameTree = function (root1, root2) {
  if (root1 == null && root2 == null) {
    return true
  }
  if (root1 == null || root2 == null) {
    return false
  }
  if (root1.val != root2.val) {
    return false
  }

  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
}

//二叉搜索树：任意结点的值大于等于左子树所有结点的值
//判断二叉搜索树的合法性BST
var isValidBST = function (root) {
  return isValidBSTAux(root, null, null)
}

var isValidBSTAux = function (root, min, max) {
  if (root == null) {
    return true
  }

  if (min !== null && root.val <= min.val) {
    return false
  }
  if (max != null && root.val >= max.val) {
    return false
  }

  return isValidBSTAux(root.left, min, root) && isValidBSTAux(root.right, root, max)
}

//查找一个数是否存在BST
var isInBST = function (root, target) {
  if (root == null) {
    return false
  }
  if (root.val == target) {
    return true
  }

  return isInBST(root.left) || isInBST(root.right)
}

//优化
var betterIsInBST = function (root, target) {
  if (root == null) {
    return false
  }

  if (root.val == target) {
    return true
  }

  if (root.val < target) {
    betterIsInBST(root.right, target)
  }

  if (root.val > target) {
    betterIsInBST(root.left, target)
  }
}

//在BST插入一个数
var insertNumberToBST = function (root, num) {
  if (root == null) {
    let newNode = new TreeNode(num)
    return newNode
  }

  if (root.val > num) {
    insertNumberToBST(root.left, num)
  }
  if (root.right < num) {
    insertNumberToBST(root.right, num)
  }
}

//在BST删除一个数
var getMin = function (root) {
  while (root.left != null) {
    root = root.left
  }
  return root
}

var deleteNodeFromBST = function (root, key) {
  if (root == null) {
    return null
  }
  if (root.val == key) {
    //delete
    if (root.left == null) {
      return root.right
    }
    if (root.right == null) {
      return root.left
    }
    let minNode = getMin(root.right)
    //为具体应⽤中，val域可能会很⼤，修改起来很耗时，⽽链表操作⽆⾮改⼀改指针，⽽不会去碰
    //内部数据。
    root.val = minNode.val
    root.right = deleteNodeFromBST(root.right, minNode.val)
  } else if (root.val > key) {
    root.left = deleteNodeFromBST(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNodeFromBST(root.right, key)
  }
  return root
}