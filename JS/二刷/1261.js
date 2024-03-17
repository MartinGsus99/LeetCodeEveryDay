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
 */
var FindElements = function (root) {
    this.valSet = new Set()
    if (!root) {
        return
    }

    root.val = 0

    const recover =  (node, val) =>{
        if (!node) {
            return
        }

        node.val = val
        this.valSet.add(val)
        recover(node.left, 2 * val + 1)
        recover(node.right, 2 * val + 2)

    }
    this.root = root
    recover(root, 0)
}

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.valSet.has(target)
};

