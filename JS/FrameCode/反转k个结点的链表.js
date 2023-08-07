/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseKNodes = function (head, k) {
  if (head === null) {
    return null
  }

  let start = end = head

  for (let i = 0; i < k; i++) {
    if (end === null) {
      return head
    }
    end = end.next
  }

  const reverseList = function (start, end) {
    let pre, cur, next = new ListNode()
    pre = null, cur = start, next = start
    while (cur != end) {
      next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }

  let newHead = reverseList(start, end)
  start.next = reverseKNodes(end, k)
  return newHead
}