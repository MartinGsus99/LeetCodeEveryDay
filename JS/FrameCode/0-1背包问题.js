 var zero_oneBackPack=function(amount,n,weight,value){
        var dp=new Array(n+1).fill(new Array(amount+1).fill(0));

        for(let i=1;i<=n;i++){
            for(let j=1;j<=amount;j++){
                if(j-weight[i-1]<0){
                    dp[i][j]=dp[i-1][j];
                }else{
                    dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-weight[i-1]]+value[i-1]);
                }
            }
        }
        return dp[n-1][amount-1];
 }

 console.log(zero_oneBackPack(4,3,[2,1,3],[4,2,3]));