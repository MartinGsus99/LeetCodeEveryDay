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

//中序遍历二叉树，检测结果是否为单调递增的数组；
//通过：51.21 14.16；   71.36 11.35
var isValidBST = function(root) {

    var nums=[];
    var traverse=function(node){
        if(!node){
            return;
        }

        traverse(node.left);
        nums.push(node.val);
        traverse(node.right);
    }

    traverse(root);

    for(let i=0;i<nums.length;i++){
        //加上等于号避免相同数值的问题；
        if(nums[i]>=nums[i+1])
        {
            return false;
        }
    }
    return true;
};