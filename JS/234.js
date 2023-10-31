/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null) {
    return true
  }

  let length = 0
  let slow = head, fast = head
  let stack = []
  while (slow != null && fast != null) {
    length++
    stack.push(slow.val)
    slow = slow.next

    fast = fast.next.next
  }
  console.log(data)
  while (slow != null) {
    let data = stack.pop()
    console.log(data, slow.val)
    if (data === slow.val) {
      slow = slow.next
    } else {
      return false
    }
  }
  return true
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = []
  while (head != null) {
    arr.push(head.val)
    head = head.next
  }
  const n = arr.length

  let left = 0, right = n - 1
  while (left <= right) {
    if (arr[left] !== arr[right]) {
      return false
    }
    left++
    right--
  }
  return true

}