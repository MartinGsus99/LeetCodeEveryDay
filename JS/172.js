// 172. 阶乘后的零
// 给定一个整数 n ，返回 n! 结果中尾随零的数量。
// 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1

//思路1：遍历，2*5=10，求2*5的数量；


/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    var ans=0;

    while(n!=0){
        n=Math.floor(n/5);
        ans+=n;
    }
    return ans;
 }

console.log(trailingZeroes(130));

