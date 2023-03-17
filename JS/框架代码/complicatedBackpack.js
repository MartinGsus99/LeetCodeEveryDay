var coinChange=function(amount,coins){
    let n=coins.length;
    let dp=new Array(n+1).fill(new Array(amount+1).fill(0));
    console.log(dp);

    //数组i坐标表示i个硬币，j表示当前的值；
    //basecase:amount=0，所以不需要任何硬币，返回1钟方法；
    for(let i=0;i<=n;i++){
        dp[i][0]=1;
    }
    console.log(dp);

    //当前状态等于：
    //如果当前剩余的减去上一个硬币的大小，小于0，则不添加这个硬币；
    //否则，加上这个硬币；
    for(let i=1;i<=n;i++){
        for(let j=1;j<=amount;j++){
            if(j-coins[i-1]>=0){
                dp[i][j]=dp[i-1][j]+dp[i][j-coins[i-1]];
            }else{
                dp[i][j]=dp[i-1][j];
            }
        }
    }
    console.log(dp);
    return dp[n][amount];
}

amount=5
coins=[1,2,5]
console.log(coinChange(amount,coins));