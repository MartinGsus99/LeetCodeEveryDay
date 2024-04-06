/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
//使用hash表来暂存节点位置
var copyRandomList = function (head) {
  let map = new Map()
  let pointer = head
  while (pointer) {
    map.set(pointer, new Node(pointer.val))
    pointer = pointer.next
  }

  let cur = head
  while (cur) {
    map.get(cur).next = map.get(cur.next) || null
    map.get(cur).random = map.get(cur.random) || null
    cur = cur.next
  }
  return map.get(head)
}


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const map = new Map()

  let pointer = head
  while (pointer) {
    map.set(pointer, new Node(pointer.val))
    pointer = pointer.next
  }

  let cur = head
  while (cur) {
    map.get(cur).next = map.get(cur.next) || null
    map.get(cur).random = map.get(cur.random) || null
    cur = cur.next
  }

  return map.get(head)

};


