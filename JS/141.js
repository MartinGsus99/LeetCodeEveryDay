// 141. 环形链表
// 给你一个链表的头节点 head ，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast=head.next;
    let slow=head;

    while(fast!==null && slow!==null)
    {
        fast=fast.next.next;
        slow=slow.next;

        if(fast===slow)
        {
            return true;
        }
    }

    return false;
};

//解法2：
// 列举几个从天而降的掌法：
// JSON.stringify(head) 秒杀法😃
// 除非不报错，报错就是有环！！


var hasCycle = function (head) {
    try {
        JSON.stringify(head)
    } catch{
        return true
    }
    return false
};

// 作者：chen-feng-11
// 链接：https://leetcode.cn/problems/linked-list-cycle/solution/shi-chuan-yi-jiu-de-javsscripttian-xiu-j-u8kv/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

//打记号
const hasCycle = function(head) {
    while (head) {
      if (head.tag) {
        return true;
      }
      head.tag = true;
      head = head.next;
    }
    return false;
  };
  
//   作者：chen-feng-11
//   链接：https://leetcode.cn/problems/linked-list-cycle/solution/shi-chuan-yi-jiu-de-javsscripttian-xiu-j-u8kv/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

//没看懂的解法
// 鸡贼法
// 题目说了范围不超过100000，没超过size能发现空节点就是没有环， 超过了就是有环！！！
const hasCycle = function(head) {
  let i = 0, size = 100000
  let node = head
  while (++i <= size) {
    if(!node) return false
    node = node.next
  }
  return true;
};

// 作者：chen-feng-11
// 链接：https://leetcode.cn/problems/linked-list-cycle/solution/shi-chuan-yi-jiu-de-javsscripttian-xiu-j-u8kv/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。