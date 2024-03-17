/**
 * Definition for a binary tree temp.
 * function Treetemp(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {Treetemp} target
 * @param {Treetemp} p
 * @param {Treetemp} q
 * @return {Treetemp}
 */

const getPath = function (node, target) {
    let path = []
    while (node != target) {
        path.push(node)
        if (node.val > target.val) {
            node = node.left
        } else {
            node = node.right
        }
    }
    path.push(node)
    return path
}

//根据二叉搜索树的性质，其查找过程如果为共同祖先，则查找过程相同
var lowestCommonAncestor = function (root, p, q) {
    if (root == null) {
        return null
    }

    let queue_p = []
    let queue_q = []

    queue_p = getPath(root, p)
    queue_q = getPath(root, q)
    console.log("p", queue_p, "q", queue_q)
    let res = null
    for (let i = 0; i < Math.min(queue_p.length, queue_q.length); i++) {

        if (queue_p[i] == queue_q[i]) {
            console.log(queue_p[i], queue_q[i])
            res = queue_p[i]
        }

    }
    return res


}