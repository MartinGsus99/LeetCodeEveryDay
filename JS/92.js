/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const dummyNode = new ListNode(-1)

    dummyNode.next = head

    let pre = dummyNode

    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }

    let rightNode = pre
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next
    }

    let leftNode = pre.next
    let cur = rightNode.next

    pre.next = null
    rightNode.next = null

    const reverse = function (node) {
        let pre = null
        let cur = node

        while (cur) {
            const next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
    }

    reverse(leftNode)

    pre.next = rightNode
    leftNode.next = cur
    return dummyNode.next


}


var reverseBetween = function (head, left, right) {
    const dummy_node = new ListNode(-1)

    dummy_node.next = head
    let pre = dummy_node

    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }

    let cur = pre.next

    for (let i = 0; i < right - left; i++) {
        const next = cur.next
        cur.next = next.next
        next.next = pre.next
        pre.next = next
    }

    return dummy_node.next
}

