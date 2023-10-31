/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//hash表
var detectCycle = function (head) {

  const visited = new Set()
  while (head != null) {
    if (visited.has(head)) {
      return head
    }
    visited.add(head)
    head = head.next
  }


  return null
}

//快慢指针
var detectCycle = function (head) {
  if(head===null){
    return null
  }

  let slow=head,fast=head
  while(fast!==null){
    slow=slow.next
    if(fast.next!=null){
      fast=fast.next.next
    }else{
      return null
    }

    if(fast===slow){
      let ptr=head
      while(ptr!==slow){
        ptr=ptr.next
        slow=slow.next
      }
      return ptr
    }
  }
  return null
}