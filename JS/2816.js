/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
  const nums = []

  while (head != null) {
    nums.push(head.val)
    head = head.next
  }

  let flag = 0
  let resHead = null

  while (nums.length || flag > 0) {
    let sum = (nums.pop() * 2 || 0) + flag

    if (sum >= 10) {
      flag = 1
      sum -= 10
    } else {
      flag = 0
    }

    const newNode = {
      val: sum,
      next: resHead
    }
    resHead = newNode
  }
  return resHead
}