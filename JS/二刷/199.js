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
var rightSideView = function (root) {
    if (!root) {
        return []
    }

    let res = []
    let queue = []
    queue.push(root)


    while (queue.length != 0) {
        let size = queue.length

        for (let i = 0; i <size; i++) {
            let cur = queue.shift()
            console.log(cur)
            if (i == 0) {
                res.push(cur.val)
            }
            if (cur.right) {
                queue.push(cur.right)
            }

            if (cur.left) {
                queue.push(cur.left)
            }
        }
    }

    return res
}