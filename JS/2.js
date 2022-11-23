// 2. 两数相加
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

//思路1：分别从两个列表的头部开始，如果相加大于10，则下一位加1；

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var ans=[];
    var flag=0;     //进制位，若进位则设置为1

    //取较短的数组长度做遍历相加对应位
    for(var i=0;i<Math.min(l1.length,l2.length);i++)
    {
        if(ans[i]=l1[i]+l2[i]+flag>=10)
        {
            ans[i]=l1[i]+l2[i]+flag-10;
            flag=1;
        }
        else
        {
            ans[i]=l1[i]+l2[i]+flag;
            flag=0;
        }
    }

    //最后一位还会产生进位；
    if(l1.length>l2.length)
    {
        for(let j=i;j<l1.length;j++)
        {
            if(l1[j]+flag>=10)
            {
                ans[j]=l1[j]+flag-10;
                flag=1;
            }
            else
            {
                ans[j]=l1[j]+flag;
                flag=0;
            }
        }
    }
    else
    {
        for(let j=i;j<l2.length;j++)
        {
            if(l2[j]+flag>=10)
            {
                ans[j]=l2[j]+flag-10;
                flag=1;
            }
            else
            {
                ans[j]=l2[j]+flag;
                flag=0;
            }
        }
    }

    if(flag==1)
    {
        ans.push(1);
    }

    return ans;
};

a=[0]
b=[0]

console.log(addTwoNumbers(a,b));

//以上代码未通过leetcode测试，报错为需要返回的是listnode,而不是[];
//官方代码如下：
var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};
