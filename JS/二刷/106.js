/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

//9 3 15 20 7
//9 15 7 20 3
var buildTree = function (inorder, postorder) {
    if (!postorder.length) {
        return null
    }
    let root = new TreeNode(postorder[postorder.length - 1])
    let mid = inorder.findIndex((number) => number === root.val)

    root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
    root.right = buildTree(inorder.slice(mid + 1, inorder.length), postorder.slice(mid, postorder.length-1))
    return root
}

var buildTree = function(inorder, postorder) {
    if (!postorder.length) return null
    
    let root = new TreeNode(postorder[postorder.length - 1])
    
    let index = inorder.findIndex(number => number === root.val)
    
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    root.right = buildTree(inorder.slice(index + 1, inorder.length), postorder.slice(index, postorder.length - 1))
    
    return root
};
