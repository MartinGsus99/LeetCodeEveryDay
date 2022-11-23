// 501. 二叉搜索树中的众数
// 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
// 如果树中有不止一个众数，可以按 任意顺序 返回。
// 假定 BST 满足如下定义：
// 结点左子树中所含节点的值 小于等于 当前节点的值
// 结点右子树中所含节点的值 大于等于 当前节点的值
// 左子树和右子树都是二叉搜索树


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
 * @return {number[]}
 */


//思路：因为是BST二叉搜索树，满足定义左孩子小于等于右孩子，那么中序遍历的结果就可以获得
//一个递增的数组；统计数组中数字的个数就可以获得最大值；
var findMode = function (root) {
    let nums = [];

    const traverse = function (root) {
        if (!root) {
            return;
        } else {
            traverse(root.left);
            nums.push(root.value);
            traverse(root.right);
        }
    }

    let getMax = function (nums) {
        count = 0;
        maxCount = 0;
        tempMaxArr = [];
        tempMax = nums[0];
        for (let i = 0; i < nums.length; i++) {
            temp = nums[0];
            for (j = i + 1; j < nums.length; j++) {
                if (nums[j] == temp) {
                    count++;
                } else {
                    if (count > maxCount) {
                        tempMaxArr.clear();
                        tempMaxArr.push(nums[i]);
                        count = 0;
                        i = j;
                        return;
                    } else if (count === maxCount) {
                        tempMaxArr.push(temp);
                        return;
                    } else {
                        i = j;
                        count = 0;
                    }
                }
            }
        }
        return tempMaxArr;
    }

    traverse(root);
    return getMax(nums);

};

//官方解法
var findMode = function (root) {

    let base = 0, count = 0, maxCount = 0;
    let answer = [];

    //因为中序遍历出来的数组就是递增的，所以直接用一个变量记录当前指针即可；
    const update = (x) => {
        if (x === base) {
            ++count;
        } else {
            count = 1;
            base = x;
        }

        if (count === maxCount) {
            answer.push(base);
        }
        if (count > maxCount) {
            maxCount = count;
            answer = [base];
        }
    }

    const dfs = (o) => {
        if (!o) {
            return;
        }
        dfs(o.left);
        update(o.val);              //不需要使用列表暂存结果，直接操作!!!!
        dfs(o.right);
    }

    dfs(root);
    return answer;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode.cn/problems/find-mode-in-binary-search-tree/solution/er-cha-sou-suo-shu-zhong-de-zhong-shu-by-leetcode-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    let answer = [];
    let count = 0;
    let base = 0;
    let maxCount = 0;

    const update = (x) => {
        if (x === base) {
            ++count;
        } else {
            count = 1;
            base = x;
        }

        if (count > maxCount) {
            maxCount = count;
            answer = [base];
        }

        if (count === maxCount) {
            answer.push(base);
        }
    }

    const traverse = (root) => {
        if (!root) {
            return;
        }
        traverse(root.left);
        update(root.val);               //注意：val 不是 value；
        traverse(root.right);
    }
    traverse(root);
    return answer;
}