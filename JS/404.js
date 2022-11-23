// 404. 左叶子之和
// 给定二叉树的根节点 root ，返回所有左叶子之和。

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

//前序遍历，加叶子的值
var sumOfLeftLeaves = function (root) {
    var sum = 0;
    const traverse = function (root) {
        if (!root) {
            return 0;
        }
        if (root.left && !root.left.left && !root.left.right)    //左叶子结点判定：是前一结点的左孩子，且为左右无结点；
        {
            sum = sum + root.left.val;
            traverse(root.right);
        }
        else {
            traverse(root.left);
            traverse(root.right);
        }
    }
    traverse(root);
    return sum;
};


// 作者：ityou-o
// 链接：https://leetcode.cn/problems/sum-of-left-leaves/solution/javascriptban-jie-ti-si-lu-by-ityou-o-jj04/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var sumOfLeftLeaves = function (root) {
    if (!root) return 0
    let val = 0;
    if (root.left && !root.left.left && !root.left.right) {
        val = root.left.val
    }
    return val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};


