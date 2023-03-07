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
var isBalanced = function(root) {
    if(!root){
        return false;
    }

    var traverse=function(node,height){
        console.log("访问结点：",node.val);
        if(!node.left && !node.gith){
            return 1+height;
        }

        let leftHeight=traverse(node.left,1+height);
        let rightHeight=traverse(node.right,1+height);
        if(Math.abs(leftHeight-rightHeight)>1){
            return false;
        }
    }

    return traverse(root,1);
};