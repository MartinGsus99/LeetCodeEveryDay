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

//BFS
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let depth = 0
    const queue = []
    queue.push(root)
    while (queue.length) {
        let size = queue.length
        depth++
        console.log(depth, size)
        for (let i = 0; i < size; i++) {
            let cur = queue.shift()

            if (cur.left) {
                console.log("left")
                queue.push(cur.left)
            }
            if (cur.right) {
                console.log("right")
                queue.push(cur.right)
            }

        }

    }

    return depth
}

const maxDepth = (root) => {
    if (root == null) return 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};
