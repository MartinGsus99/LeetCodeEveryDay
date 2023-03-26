//有载重为w的背包和n个物品；
//怎样装才能装走具有最大价值的东西？

var getMostValuableThings=function(n,w,wt,val)
{
    // const dp=[[]];

    //创建已知的二维数组
    var multiArr=[[1,2,3,4],[5,6,7],[8,9]];
    //创建一个4行6列的二维数组
    var muArr = new Array(4);
    for(var i = 0;i <4;i++) {
        muArr[i] = new Array(6);//申明二维，每一个一维数组里面的一个元素都是一个数组
    }

    const dp=new Array(n);
    for(let i=0;i<w;i++)
    {
        dp[i]=new Array(w);
    }

    for(i=0;i<n;i++)
    {
        for(j=0;j<w;j++)
        {
            dp[i][j]=0;
        }
    }

    console.log("Init dp:")
    console.log(dp);


    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=w;j++)
        {
            if(w-wt[i-1]<0){
                dp[i][w]=dp[i-1][w];
            }else
            {
                //核心代发：当前状态的背包重量和价值是由前一状态的价值加上新加入的物品的价值，然后减去占用的重量获得；
                dp[i][w]=Math.max(dp[i-1][w-wt[i-1]]+val[i-1],dp[i-1][w]);          
            }                           
        }
    }
    console.log(dp)
    return dp[n][w];
}
wt=[2,1,3];
val=[4,2,3];
console.log(getMostValuableThings(3,4,wt,val));