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

//创建一个全局变量，变量除了根节点外的所有结点
//原题很傻逼，根节点只有左右两个子结点，完全不用考虑其他的

var checkTree = function (root) {
    if(!root){
        return null;
    }
    var sum = 0;
    var traverse = function (root) {
        if (!root) {
            return 0;
        }
    
        sum =sum+root.val;
        traverse(root.left);
        traverse(root.right);
    }

    traverse(root.left);
    traverse(root.right);

    if(sum==root.val){
        return true;
    }else
    {
        return false;
    }
};



var checkTree = function(root) {
    return root.val===root.left.val+root.right.val;
};