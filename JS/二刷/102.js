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
    if (!root) {
        return []
    }

    let queue = []
    queue.push(root)

    let res = []


    while (queue.length != 0) {
        let size = queue.length
        let cur_queue = []
        for (let i = 0; i < size; i++) {
            let cur = queue.shift()
            cur_queue.push(cur.val)

            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
        }

        res.push(cur_queue)

    }
    return res
}