var dropEggs = function (k, n) {
    var memo = new Map();

    var dp = function (k, n) {
        if (k == 1) {
            return n;
        }
        if (n == 0) {
            return 0;
        }

        if (memo.has([k, n])) {
            return memo.get([k, n]);
        }
        res = Infinity;

        for (let i = 1; i <= n + 1; i++) {
            res = Math.min(res, Math.max(dp(k, n - i), dp(k - 1, i - 1) + 1));
        }
        memo.set([k, n], res);
        return res;
    }

    return dp(k, n);
}

console.log(dropEggs(3, 10))

var myEggsDrop = function (floorHeight, eggNum) {

    let dp = new Array(eggNum).fill(0).map(() => {//创建一个二维数组
        return Array(floorHeight + 1).fill(Infinity)
        //因为后面要比较最小值，所以要赋值为无穷大Infinity来比较
    });

    
    console.log(dp);

    //赋初值:只有一个鸡蛋，最坏情况最高层才会坏，所以dp[1][i]返回i;
    //只有一层楼，最坏情况，任意个数鸡蛋都返回1；
    for(let i=1;i<floorHeight+1;i++){
        dp[1][i]=i;
    }

    dp[0][1]=0;
    dp[1][1]

    for(let i=1;i<floorHeight+1;i++){
        for(let j=1;j<)
    }

    

    console.log(dp);
}

console.log(myEggsDrop(6, 2))

