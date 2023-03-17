var knapsack=function(weight,n,wtArray,valArray){
    //对于前i个物品，当背包容量为w时，可以装下dp[i][w]价值的东西

    var dp=new Array(n+1).fill(new Array(weight+1).fill(0));
    console.log("初始化dp:",dp);

    //每次新增一个物品
    for(let i=1;i<=n;i++){

        for(let w=1;w<=weight;w++){
            //拿起一个物品，发现剩余的重量小于0，就放下
            if(w-wtArray[i-1]<0){
                dp[i][w]=dp[i-1][w];
            }else{
                //拿起一个物品，w减去重量大于0，则数组为
                dp[i][w]=Math.max(dp[i-1][w-wtArray[i-1]]+valArray[i-1],dp[i-1][w]);
            }
        }
    }
   
    return dp[n][weight];
}

wt=[2,1,3];
val=[4,2,3];
console.log(knapsack(4,3,wt,val))