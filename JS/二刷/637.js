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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (!root) {
        return [0]
    }
    let res = []
    let queue = []
    queue.push(root)

    while (queue.length != 0) {
        let size = queue.length
        let count = 0

        for (let i = 0; i < size; i++) {
            let cur = queue.shift()
            count += cur.val
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
        }
        res.push(count / size)

    }

    return res
}