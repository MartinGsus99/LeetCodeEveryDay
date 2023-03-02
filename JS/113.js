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
 * @param {number} targetSum
 * @return {number[][]}
 */
//采用深度优先遍历，如果到了叶子结点就将当前的sum与target比较，符合则加入结果数组；
//95.02 77.66
var pathSum = function(root, targetSum) {
    const result=[];
    const traverse=function(node,sum,path){
        if(!node){
            return;
        }
        //path放在前面
        path.push(node.val);
        if(!node.left && !node.right){
            if(sum+node.val===targetSum){
                //list这样子加
                result.push([...path]);
            }
        }
        sum=sum+node.val;
        traverse(node.left,sum,path);
        traverse(node.right,sum,path);
        path.pop();

    }
    var path=[];
    var tempSum=0;
    traverse(root,tempSum,path);
    return result;
};
var pathSum = function(root, sum) {
    let arr = [];
    let path = [];
    dfs(root,  path, arr, sum);
    return arr;
};

function dfs(root, path, arr, sum) {
    if(!root) return;
    path.push(root.val);

    if(root.val == sum && root.left == null && root.right == null) {
        arr.push([...path]);
    }

    dfs(root.left, path, arr, sum - root.val);
    dfs(root.right, path, arr, sum - root.val);
    path.pop();
}

