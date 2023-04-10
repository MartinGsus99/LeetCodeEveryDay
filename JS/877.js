/**
 * @param {number[]} piles
 * @return {boolean}
 */
//动态规划方法：5.08 5.08
function Pair(fir, sec) {
    this.fir = fir;
    this.sec = sec;
}
var stoneGame = function (piles) {
    let n = piles.length;
    let dp = Array.from(Array(n), () => Array(n).fill());



    //init
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = new Pair(0, 0);
        }
    }
    //base case
    for (let i = 0; i < n; i++) {
        dp[i][i].fir = piles[i]
    }

    //斜着遍历数组
    for (let l = 2; l <= n; l++) {
        for (let i = 0; i <= n - l; i++) {
            let j = l + i - 1;
            let left = piles[i] + dp[i + 1][j].sec;
            let right = piles[j] + dp[i][j - 1].sec;
            if (left > right) {
                dp[i][j].fir = left;
                dp[i][j].sec = dp[i + 1][j].fir;
            } else {
                dp[i][j].fir = right;
                dp[i][j].sec = dp[i][j - 1].fir;
            }
        }
    }

    let res = dp[0][n - 1];
    if (res.fir - res.sec > 0) {
        return true;
    } else {
        return false;
    }
};

//优化;等待优化