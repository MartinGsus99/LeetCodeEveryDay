/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopy = function (original, cloned, target) {
    if (!clone) {
        return null;
    }

    console.log("对比：", original.val, cloned.val, target.val)

    if (cloned.val == target.val) {
        return cloned;
    }
    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target);
};


var getTargetCopy = function (original, cloned, target) {
    if (!original || !cloned) return null;
    if (original === target) return cloned;
    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target);
}

// 作者：adrestios
// 链接：https://leetcode.cn/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solution/di-gui-zhao-dao-deng-tong-yu-targetde-ji-wud9/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。