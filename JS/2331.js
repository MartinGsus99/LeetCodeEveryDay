/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//先前序遍历获取列表，然后按表计算；不符合计算结果；
//未能通过全部测试用例
var evaluateTree = function (root) {
    var data = [];

    if (!root.left && !root.right) {
        return root.val;
    }

    var traverse = function (root) {
        if (!root) {
            return;
        }
        traverse(root.left);
        data.push(root.val);
        traverse(root.right);
    };

    var operate = function (dataArr) {
        var result = dataArr[0];
        for (let i = 0; i < dataArr.length; i += 2) {
            if (dataArr[i + 1] == 2) {
                result = result || dataArr[i + 2];
            }
            else if (dataArr[i + 1] == 3) {
                result = result && dataArr[i + 2];
            }
        }
        return result;
    }
    traverse(root);
    console.log(data);
    return operate(data);
};

//官方写法  58.66   16.30
//如果是只有一个结点，就返回根节点；
//如果不是根节点，返回左右子结点的计算之和；
var evaluateTree = function (root) {
    if (!root.left) {
        return root.val;
    }

    if (root.val == 2) {
        return evaluateTree(root.left) || evaluateTree(root.right);
    } else if (root.val == 3) {
        return evaluateTree(root.left) && evaluateTree(root.right);
    }
};

//社区解法，使用后序遍历 36.16  91.43
var evaluateTree = function (root) {
    if(!root.left){
        return root.val;
    }
    var postOrder=function(root){
        if(!root){
            return true;
        }

        var left=postOrder(root.left);
        var right=postOrder(root.right);

        if(root.val==2){
            return left || right;
        }else if(root.val==3){
            return left && right;
        }else if(root.val==1){
            return true;
        }else{
            return false;
        }

    }

    return postOrder(root);
};

