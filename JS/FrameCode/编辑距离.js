/**
 * @param {string} s1
 * @param {string} s2
 * @return {Number}
 */
//14.90 17.00
var minDistance = function (s1, s2) {
    var m = s1.length;
    var n = s2.length;

    //使用fill（）方法来填充数组时，如果使用一个对象或数组作为填充值，
    var dp = new Array(m + 1).fill(new Array(n + 1).fill(0));
   
    var dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }

    console.log(dp)
    //base case
    for (let i = 1; i <= m; i++) {
        dp[i][0] = i;
    }
    console.log(dp)

    for (let i = 1; i <= n; i++) {
        dp[0][i] = i;
    }

    console.log(dp)

    //自低向上求解
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                //字符相同，无需操作，ij同时向前一位
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                //字符不同，在删除，增加，替换三者中选择最快的一个结果；
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }
    console.log(dp)
    return dp[m][n];
}

//优化方法，未完成
var minDistance = function (word1, word2) {
    var m = word1.length;
    var n = word2.length;

    //base case
    var leftUp=0;
    var left=1;
    var up=1;
    var cur=0;

    //自低向上求解
    var length=Math.min(m,n);
    for(let i=1;i<=m;i++){
       for(let j=1;j<=n;j++){
         if(word1[i-1]==word2[j-1]){
            cur=leftUp;
         }else{
            cur=Math.min(leftUp+1,up+1,left+1);
            if(cur==leftUp+1){

            }
         }
       }
    }
 

    return dp[m][n];
}





var s1 = "rad";
var s2 = "apple";

console.log(minDistance(s1, s2));