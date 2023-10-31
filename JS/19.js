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
  if (head === null) {
    return head
  }

  if (head.next === null && n === 1) {
    return null
  }
  let L = 0, pos = head
  while (head) {
    L++
    head = head.next
  }

  let preOne = head
  let index = L - n + 1
  while (index > 0) {
    console.log(preOne.val)
    preOne = preOne.next
    index--
  }

  if (preOne.next !== null) {
    let nexOne = preOne.next
    preOne.next = preOne.next.next
    nexOne = null

  } else {
    preOne.next = null

  }
  return head

}