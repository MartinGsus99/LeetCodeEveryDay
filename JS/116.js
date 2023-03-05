/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
//广度优先，设置队列，将每一层的结点保存到队列中，然后遍历队列，设置next指针；
//52.36 6.08
var connect = function (root) {
    let result=new Array();
    if(!root){
        return result;
    }
    let q=new Array();
    q.push(root);
    while(q.length!=0){
        let size=q.length;
        console.log("size:",size);
        for(let i=0;i<size;i++){
            if(i==size-1){
                let cur=q.shift();
                cur.next=null;
                if(cur.left){
                    q.push(cur.left);
                }
                if(cur.right){
                    q.push(cur.right);
                }
                result.push(cur);
                result.push('#');
            }else
            {
                let cur=q.shift();
                cur.next=q[0];
                result.push(cur);
                if(cur.left){
                    q.push(cur.left);
                }
                if(cur.right){
                    q.push(cur.right);
                }
            }
        }
    }
    return root;
};