/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
//递归法
//每次先访问孩子节点，在访问根节点
const helper = (root, res) => {
    if (root == null) {
        return
    }

    for (const ch of root.children) {
        helper(ch, res)
    }
    res.push(root.val)
}

var postorder = function (root) {
    let res = []
    helper(root, res)
    return res

}

//迭代法
var postorder = function (root) {
    const res = []
    if (root == null) {
        return res
    }
    const map = new Map()
    const stack = []
    let node = root
    while (stack.length || node) {
        while (node) {
            stack.push(node)
            const children = node.children
            if (children && children.length > 0) {
                map.set(node, 0)
                node = children[0]
            } else {
                node = null
            }
        }
        node = stack[stack.length - 1]
        const index = (map.get(node) || 0) + 1
        const children = node.children
        if (children && children.length > index) {
            map.set(node, index)
            node = children[index]
        } else {
            res.push(node.val)
            stack.pop()
            map.delete(node)
            node = null
        }
    }
    return res
}

//前序遍历优化
var postorder = function (root) {
    const res = []
    if (root == null) {
        return res
    }

    const stack = []
    stack.push(root)
    while (stack.length) {
        const node = stack.pop()
        res.push(node.val)
        for (const ch of node.children) {
            stack.push(ch)
        }
    }
    res.reverse()

    return res
}
