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

//解法1：
//step1：遍历记录所有的二进制数存到数组种；
//step：遍历数据数组，添加一个二进制转移函数；

var sumRootToLeaf = function (root) {

    if (!root) {
        return 0;
    }

    var dataArr = [];
    var str = '';
    var sum = 0;

    var traverse = function (node, str) {
        str = str + node.val;
        if (!node.left && !node.right) {
            dataArr.push(str);
            return;
        }

       
        if (node.left) {
            traverse(node.left, str);
        }
        if (node.right) {
            traverse(node.right, str);
        }
    }

    traverse(root, str);

    for (let i = 0; i < dataArr.length; i++) {
        sum = sum + parseInt(dataArr[i], 2);
    }

    return sum;
};

//解法2：DFS leetcode解法
var sumRootToLeaf = function(root) {
    let res = 0
    const dfs = (root,sum) => {
        // 判断了再走节点，所以这里的 root 节点可定存在
        const temp=(sum<<1)+root.val
        if(!root.left && !root.right){
            // 到达叶子节点
            res+=temp
            return 
        }
        if(root.left) dfs(root.left,temp)
        if(root.right) dfs(root.right,temp)
    }
    dfs(root,0)
    return res
};