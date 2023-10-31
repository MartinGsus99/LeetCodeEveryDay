/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pointerA = headA, pointerB = headB

  let countA = 1, countB = 1

  while (pointerA.next != null) {
    countA++
    pointerA = pointerA.next
  }

  while (pointerB.next != null) {
    countB++
    pointerB = pointerB.next
  }

  console.log(countA, countB, countA - countB)
  if (countA > countB) {
    let minus = countA - countB
    while (minus > 0) {
      headA = headA.next
      minus--
    }
  } else if (countB > countA) {
    let minus = countB - countA

    while (minus > 0) {
      headB = headB.next
      minus--
    }
  }
  if (headA === headB) {
    return headA
  }

  while (headA != null && headB != null) {
    if (headA === headB) {
      return headA
    }
    console.log(headA.val, headB.val)
    headA = headA.next
    headB = headB.next

  }

  return null

}