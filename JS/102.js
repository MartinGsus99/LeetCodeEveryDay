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
 * @return {number[][]}
 */
var levelOrder = function (root) {

    const result = []
    if (!root) {
        return result;
    }
    const queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        const currentLevelLength = queue.length;
        result.push([]);
        for (let i = 0; i < currentLevelLength; i++) {
            const node = queue.shift();
            result[result.length-1].push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    };

    let mid=(result.length-1)/2;
    for(let i=0;i<mid;i++){
        let temp=result[0];
        result[0]=result[result.length-i];
        result[result.length-i]=temp;
    }

    return result;
};

//Note:leetcode返回类型需要和示例一致不然会报错；