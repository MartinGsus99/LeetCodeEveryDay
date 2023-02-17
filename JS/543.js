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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let left=tarverse(root.left);
    let right=tarverse(root.right);

    return left+right+1;
};

var tarverse=function(root){
    if(!root)
    {
        return 0;
    }
    return Matn.max(tarverse(root.left)+1,tarverse(root.right+1));
}