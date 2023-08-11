/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head
}

/**
* @return {number}
*/
Solution.prototype.getRandom = function () {
  let i = 1, ans = 0
  for (let node = this.head; node != null; node = node.next) {
    if (Math.floor(Math.random() * i) === 0) {
      ans = node.val
    }

    ++i
  }
  return ans
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/