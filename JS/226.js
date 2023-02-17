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
 * @return {TreeNode}
 */

//思路1，遍历原始的树，然后在相反的方向建立新的树；
//访问root结点，root存在，新建一个结点赋值给root；
//访问root的左结点，root.left存在，新建一个结点赋值给root.left;


 var invertTree = function(root) {
    if(!root){
        return null;
    }

    var newRoot=new TreeNode(root.val);

    if(root.left){
        let newRightNode=new TreeNode(root.left.val);
        newRoot.right=newRightNode;
        traverse(root.left,newRoot.right);
    }

    if(root.right){
        let newLeftNode=new TreeNode(root.right.val);
        newRoot.left=newLeftNode;
        traverse(root.right,newRoot.left);
    }

    return newRoot;
};

var traverse=function(root,newNode){
    if(!root){
        return null;
    }

    if(root.left){
        let newRightNode=new TreeNode(root.left.val);
        newNode.right=newRightNode;
        tarverse(root.left,newNode.right);
    }

    if(root.right){
        let newLeftNode=new TreeNode(root.right.val);
        newNode.left=newLeftNode;
        tarverse(root.right,newNode.left);
    }
}


