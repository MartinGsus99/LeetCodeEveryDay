// 746. 使用最小花费爬楼梯
// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
// 请你计算并返回达到楼梯顶部的最低花费。

/**
* @param {number[]} cost
* @return {number}
*/

//经典的动态规划算法；
var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    var dp = new Array(n + 1);
    dp[0] = dp[1] = 0;

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];
};

//空间复杂度优化，因为只需要前两个数据所以不需要用数组存数据；
var minCostClimbingStairs = function (cost) {
    var n = cost.length;
    var dp = new Array(n + 1);
    var pre=next=now=0;

    for (let i = 2; i <= n; i++) {
        now=Math.min([pre+cost[i-1],next+cost[i-2]]);
        pre=next;
        next=now;
    }
    return now;
};


