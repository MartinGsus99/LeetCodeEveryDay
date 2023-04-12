//能够获得正确答案，但是会超时
var maxA1=function(n){
    if(n<=0){
        return 0;
    }

    var dp=function(n,a_num,copy_num){
        if(n<=0){
            return a_num;
        }

        return Math.max(dp(n-1,a_num+1,copy_num),dp(n-1,a_num+copy_num,copy_num),dp(n-2,a_num,a_num));
    }

    return dp(n,0,0);
}

var maxA=function(n){
    //定义为第i次操作获得的A数量
    var dp=new Array(n+1);

    dp[0]=0;

    for(let i=1;i<=n;i++){
        dp[i]=dp[i-1]+1;
        for(let j=2;j<i;j++){
            dp[i]=Math.max(dp[i],dp[j-2]*(i-j+1));
        }
    }
    return dp[n];
}

console.log(maxA(20));