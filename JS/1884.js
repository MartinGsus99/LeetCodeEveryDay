/**
 * @param {number} n
 * @return {number}
 */
//因为只有两个鸡蛋，所以第一个鸡蛋 100 95
var twoEggDrop = function (n) {
    let sum = 0;
    let i = 1;
    for (i = 1; i < n; i++) {
        sum += i;
        if (sum >= n) break;
    }
    return i;
};

//dp方法 28.57 19.05
var twoEggDrop = function (n) {

    let dp = new Array(2).fill(0).map(() => {//创建一个二维数组
        return Array(n + 1).fill(Infinity)
        //因为后面要比较最小值，所以要赋值为无穷大Infinity来比较
    });

    for (let j = 1; j <= n; j++) {
        dp[0][j] = j;  //一个鸡蛋的情况
    }
    dp[1][0] = 0;//初始base
    dp[1][1] = 1;

    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= i; k++) {
            dp[1][i] = Math.min(Math.max(dp[0][k - 1], dp[1][i - k]) + 1, dp[1][i])
            //本次计算的值与之前不同k层做测试得到的值进行比较选择最小的
        }
    }
    return dp[1][n]
};

