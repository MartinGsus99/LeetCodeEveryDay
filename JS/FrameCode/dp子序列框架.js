//1.一维dp数组:在子数组string[0...i]中，要求得最长递增子序列长度为dp[i];
var oneDimensionDp=function(string1){
    let n=string1.length;
    let dp=new Array(n).fill(0);

    for(let i=1;i<n;i++){
        for(let j=1;j<i;j++){
            dp[i]=Math.max(dp[i],dp[j]+status); //status为状态转移方程
        }
    }
}

//2.二维dp数组:设计两个字符串/数组得子序列；
//situation1：涉及两个字符串、数组，在子数组string1[0...i]和子数组string2[0...j]中，我们要求得子序列长度为dp[i][j]
//situation2:涉及一个字符串、数组，在子数组string1[i...j]中，我们要求得子序列（最长回文子序列）得长度为dp[i][j];
var twoDimensionDp=function(string1){
    let n=string1.length;
 

    var dp=new Array(n).fill(0).map(()=>new Array(n).fill(0));

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(string1[i]===string1[j]){
                dp[i][j]=dp[i][j]+status;
            }else{
                dp[i][j]=Math.max(status);
            }
        }
    }
}