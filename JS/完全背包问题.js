//找零问题
//给你一个总数和一堆硬币的面值，硬币可以无限次使用；
//给出所有可能的数量；

var getCoinsChange=function(amount,conis)
{
    var n=conis.length;
    const dp=[][];

    for(let i=0;i<=n;i++)
    {
        dp[i][0]=1;
    }

    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=amount;j++)
        {
            if(j-conis[i-1]>=0)
            {
                dp[i][j]=dp[i-1][j]+dp[i][j-conis[i-1]]
            }else
            {
                dp[i][j]=dp[i-1][j];
            }
        }
    }
    return dp[n][amount];
}

//由于状态只跟前两个有关，因此空间复杂度可以优化
var getCoinsChange=function(amount,conis)
{
    var n=conis.length;
    const dp=[];

    dp[0]=1;
    for(let i=0;i<n;i++)
    {
        for(let j=1;j<=amount;j++)
        {
            if(j-conis[i]>=0)
            {
                dp[j]=dp[j]+dp[j-conis[i]];
            }
        }
    }
    return ap[amount];
}