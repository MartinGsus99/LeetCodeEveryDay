/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//遍历二叉树，将新遇到的添加到字典；
 var numColor = function(root) {
    var result=[];
    traverse(root,result);

    return result.length;
};

var traverse=function(root,arr){
    if(!root){
        return null;
    }

    //判断字典
    if(searchArray(root.val,arr)){
        arr.push(root.val);
    }
    traverse(root.left,arr);
    traverse(root.right,arr);
}

var searchArray=function(target,arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===target){
            return false;
        }
    }
    return true;
}