//给与一堆石子，数组为：[3,9,1,2]
//A和B每次从左边或者右边拿一堆，最后谁得石子多谁赢；

//定义数据结构
function Pair(fir, sec) {
    this.fir = fir;
    this.sec = sec;
}

var stoneGame=function(piles){
    let n=piles.length;
    let dp = Array.from(Array(n), () => Array(n).fill());

   

    //init
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
                dp[i][j]=new Pair(0,0);
        }
    }
    //base case
    for(let i=0;i<n;i++){
        dp[i][i].fir=piles[i]
    }

    //斜着遍历数组
    for(let l=2;l<=n;l++){
        for(let i=0;i<=n-l;i++){
            let j=l+i-1;
            let left=piles[i]+dp[i+1][j].sec;
            let right=piles[j]+dp[i][j-1].sec;
            if(left>right){
                dp[i][j].fir=left;
                dp[i][j].sec=dp[i+1][j].fir;
            }else{
                dp[i][j].fir=right;
                dp[i][j].sec=dp[i][j-1].fir;
            }
        }
    }

    let res=dp[0][n-1];
    console.log(dp);
    return res.fir-res.sec;
}

let piles=[3,9,1,2];

console.log(stoneGame(piles))
