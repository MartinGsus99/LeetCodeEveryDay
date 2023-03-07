/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
//86.06 62.83
var preorder = function(root) {
    let result=[];
    if(!root){
        return result;
    }
    let queue=[];
    queue.push(root);
    
    while(queue.length!=0){
        let size=queue.length;
        for(let i=0;i<size;i++){
            let curNode=queue.shift();
            result.push(curNode.val);
            for(let j=curNode.children.length-1;j>=0;j--){
                queue.unshift(curNode.children[j]);
            }
        }
    }

    return result;

};