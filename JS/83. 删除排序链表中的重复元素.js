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
 var deleteDuplicates = function(head) {
    let index=head;

    if(index==null || index.next==null){
        return head;
    }

    while(index.next!=null)
    {
        let i=index.next;
        
    }
};