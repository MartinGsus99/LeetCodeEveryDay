// 输⼊: str1 = "abcde", str2 = "ace"
// 输出: 3
// 解释: 最⻓公共⼦序列是 "ace"，它的⻓度是 3

//动态规划思路
//1.明确dp数组的含义；dp[i][j]表示str1[0...i]和str2[0...j]的最长公共子序列
//2.定义base case；dp[0][...] = 0 dp[...][0] = 0
//3.明确选择和状态；选择：如果str1[i] === str2[j]，那么dp[i][j] = dp[i-1][j-1] + 1，否则dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])

//无法通过leetcode的测试用例，但是可以通过本地测试用例
var LCS1 = function (str1, str2) {

    var dp = function (i, j) {
        if (i == -1 || j == -1) {
            return 0
        };
        if (str1[i] === str2[j]) {
            return dp(i - 1, j - 1) + 1
        }
        else {
            return Math.max(dp(i - 1, j), dp(i, j - 1))
        }
    }

    return dp(str1.length - 1, str2.length - 1);
}

var a = "abcde";
var b = "ace";
//console.log(LCS(a, b));

//动态规划思路 39.4 9.06
var LCS = function (str1, str2) {
    var m=str1.length;
    var n=str2.length;

    var dp=new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0));
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(str1[i-1]===str2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1;
            }else{
                console.log(i,j)
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}

console.log(LCS(a, b));