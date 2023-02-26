// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 /**
 * @param {number} n
 * @return {number}
 */


// //思路：每次的选择是1或者2；判定是否达到n阶；相当于到达前两节的方法+1或+2
// var climbStairs = function(n) {
//     const dp=new Array(n+1)                 //用来存放到该层的方法有多少种；
//     dp[1]=1;
//     dp[2]=2;

//     for(i=3;i<n;i++)
//     {
//         dp[i]=dp[i-1]+dp[i-2];
//     }

//     return dp[n];
// };

// //空间复杂度优化
// var climbStairs = function(n) {
   
//     pre=1;
//     next=2;
//     now=0;                //用来存放到该层的方法有多少种；

//     for(i=3;i<n;i++)
//     {
//        now=pre+next;
//        pre=next;
//        next=now;
//     }

//     return now;
// };


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //使用备忘录
    var dp=[];
    dp[0]=0;
    dp[1]=1;
    dp[2]=2;

    for(let i=3;i<n;i++)
    {
        dp[i]=dp[i-1]+dp[i-2];
    }

    return dp[n];
};

//优化存储空间，只需要记录前两个数
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //使用备忘录
    var a=1;
    var b=2;
    var temp=0;
    for(let i=3;i<n+1;i++)
    {
        temp=a+b;
        a=b;
        b=temp;
    }

    return temp;
};

