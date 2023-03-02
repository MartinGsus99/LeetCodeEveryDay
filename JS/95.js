/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

//创建一个数组，存放从1-n的所有结点，再加上一个null结点；
//每次生成取一个结点
var generateTrees = function(n) {
    
    //初始化使用列表，已经使用则对应位设置为1；
    var used=[];
    for(let i=0;i<n;i++){
        used.push(0);
    }
    //生成树
    var createTree=function(used,root){
        
    }


    //判定是否为二叉搜索树
    var checkSearchTree=function(root){
        if(!root){
            return;
        }

        if(root.left.val>root.right.val || root.left.val >root.val ||root.val>root.right.val){
            return false;
        }

        checkSearchTree(root.left);
        checkSearchTree(root.right);
    }
};