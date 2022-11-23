// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 == null) {
        return list2;
    }

    if (list2 == null) {
        return list1;
    }
    var temp = new ListNode(-1);

    while (list1.next !== null && list2.next !== null) {
        if (list1.val >= list2.val) {
            temp.next = list2;
            list2 = list2.next
        } else {
            temp.next = list1.next;
            list1 = list1.next;
        }
        temp = temp.next;
    }

    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;

    return temp;
};


var mergeTwoLists = function(list1, list2) {

    const prehead=new ListNode(-1);
    
    let temp = prehead;

    while(list1!=null && list2!=null)
    {
      if(list1.val<=list2.val)
      {
        temp.next=list1;
        list1=list1.next
      }else
      {
        temp.next=list2.next;
        list2=list2.next;
      }
      temp=temp.next;
    }

    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    temp.next = list1 === null ? list2 : list1;
    return temp.next;
};


// 作者：LeetCode-Solution
// 链接：https://leetcode.cn/problems/merge-two-sorted-lists/solution/he-bing-liang-ge-you-xu-lian-biao-by-leetcode-solu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var mergeTwoLists = function (l1, l2) {
    const prehead = new ListNode(-1);

    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;

    return prehead.next;
};
