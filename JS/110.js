// 110. 平衡二叉树
// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

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
 * @return {boolean}
 */
//48.08 73.47
var isBalanced = function(root) {
    var flag=true;
    var traverse=function(node){
        if(node==null){
            return 0;
        }
        let leftH=1+traverse(node.left);
        let rightH=1+traverse(node.right);
        if(Math.abs(leftH-rightH)>1){
            flag=false;
            return;
        }else{
            return Math.max(leftH,rightH);
        }
        
    }

    traverse(root);

    return flag;
};