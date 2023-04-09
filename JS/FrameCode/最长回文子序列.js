/**
 * @param {string} s
 * @return {number}
 */
//dp方法 35.49 36.37
var longestPalindromeSubseq1 = function (s) {
    let n = s.length;
    let dp = new Array(n).fill(0).map(() => {
        return new Array(n).fill(0);
    });

    //base case
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                dp[i][j] = 1;
            }
        }
    }


    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[0][n - 1];
};


//评论区思想：将字符串反转作为字符串二，求两个字符串的最长公共子序列；21.85 51.23
var longestPalindromeSubseq = function (s) {
    let n=s.length;
    var s1=s.split('').reverse().join('');

    var dp=new Array(n+1).fill(0).map(()=>{
        return new Array(n+1).fill(0);
    });

    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(s[i-1]==s1[j-1]){
                dp[i][j]=dp[i-1][j-1]+1;
            }else{
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j]);
            }
        }
    }
    return dp[n][n];
};


//代码随想录：解法相同，优化较好 87.06 76.23
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {

    const strLen = s.length;
    let dp = Array.from(Array(strLen), () => Array(strLen).fill(0));
    
    for(let i = 0; i < strLen; i++) {
        dp[i][i] = 1;
    }

    for(let i = strLen - 1; i >= 0; i--) {
        for(let j = i + 1; j < strLen; j++) {
            if(s[i] === s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }

    return dp[0][strLen - 1];
};



var s = "cbbd";
console.log(longestPalindromeSubseq(s));