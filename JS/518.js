/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
//31.48 30.21
var change = function(amount, coins) {
    let n=coins.length;
    let dp=new Array(n+1).fill(new Array(amount+1).fill(0));

    //amount为0，设为1
    for(let i=0;i<=n;i++){
        dp[i][0]=1;
    }

    for(let i=1;i<=n;i++){
        for(j=1;j<=amount;j++){
            if(j-coins[i-1]>=0){
                dp[i][j]=dp[i-1][j]+dp[i][j-coins[i-1]];
            }else{
                dp[i][j]=dp[i-1][j];
            }
        }
    }

    return dp[n][amount];
};

//优化版本，由于当前的状态只与前个状态相关
//89.83 71.38
var change = function(amount, coins) {
    let n=coins.length;
    let dp=new Array(amount+1).fill(0);

    //basecase：amount=0,只有一种方法；
    dp[0]=1;
    for(let i=0;i<n;i++){
        for(let j=1;j<=amount;j++){
            if(j-coins[i]>=0){
                dp[j]=dp[j]+dp[j-coins[i]];
            }
        }
    }
    return dp[amount];
};