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
 * @return {void} Do not return anything, modify root in-place instead.
 */

//先先序遍历将所有的结点放到一个list，然后遍历list；
//94.76  39.01
var flatten = function(root) {
    const NodeList=[];

    var traverse=(node)=>{
        if(!node){
            return;
        }
        NodeList.push(node);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);

    for(let i=1;i<NodeList.length;i++){
        let pre=NodeList[i-1];
        let cur=NodeList[i];
        pre.left=null;
        pre.right=cur;
    }

};