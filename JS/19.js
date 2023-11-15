/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next === null && n === 1) {
    return null
  }

  let slow = head, fast = head

  while (n > 0) {
    fast = fast.next
    n--
  }

  if (!fast) {
    return head.next
  }


  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next
  return head
}