//快指针一次走两步，慢指针一次走一步，相遇则存在环
var findCycle=function(head){
    let slow=head;
    let fast=head;

    while(slow.next!=null && fast.next!=null){
        fast=fast.next.next;
        slow=slow.next;
        if(fast=slow){
            return true;
        }
    }
    return false;
}

//找到链表中环的起始位置
var findStartPoint=function(head){
    let slow=head;
    let fast=head;

    while(slow.next!=null && fast.next!=null){
        fast=fast.next.next;
        slow=slow.next;
        if(fast=slow){
            break;
        }
    }

    //将慢指针恢复到起点；
    slow=head;
    while(slow.next!=null && fast.next!=null){
        fast=fast.next
        slow=slow.next;
        if(fast=slow){
            return slow;
        }
    }


    return false;
}

//寻找无环链表的中点
var findMidNode=function(head){
    var slow=head;
    var fast=head;

    while(slow.next && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}

//寻找倒数第K个元素
var findKthNode=function(head,k){
    var slow=head;
    var fast=head;
    while(k!=0){
        fast=fast.next;
        k--;
    }
    while(slow.next && fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    return slow;
}