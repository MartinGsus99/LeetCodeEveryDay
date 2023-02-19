/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

//出现了测试用例和提交不一致的问题，原因是在主函数的外边声明了两个数组；
// var ArrayA = [];             //在函数外声明是不对的，leetcode只会产生一个实例，因此每次都没有初始化数组；
// var ArrayB = [];

var leafSimilar = function (root1, root2) {
    var ArrayA = [];
    var ArrayB = [];

    var traverseA = function (rootA) {
        if (!rootA) {
            return null;
        }

        if (rootA.left == null && rootA.right == null) {
            ArrayA.push(rootA.val);
            return;
        }
        traverseA(rootA.left);
        traverseA(rootA.right);
    }

    var traverseB = function (rootB) {
        if (!rootB) {
            return null;
        }

        if (rootB.left == null && rootB.right == null) {
            ArrayB.push(rootB.val);
            return;
        }
        traverseB(rootB.left);
        traverseB(rootB.right);
    }
    traverseA(root1);
    traverseB(root2);

    return ArrayA.join()==ArrayB.join();
};

