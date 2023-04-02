//能否将一个数组分为两组，每组数字之和相同；
//转换为背包问题：分为两个子集，那个每个子集的和为总数的一半；
//给与一个总重量为N/2的背包，有nums个武平能否装满背包
var canPartition = function (nums) {
    var sum = 0;
    var n=nums.length;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }

    if (sum % 2 != 0) {
        return false;
    }

    sum = sum / 2;

    var dp = new Array(n + 1).fill(new Array(sum + 1).fill(false));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i <= nums; i++) {
        for (let j = 1; j <= sum; j++) {
            if (j - nums[i - 1] < 0) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            }
        }
    }

    return dp[n][sum];
}

//降低空间复杂度,92.59 99.56
var canPartitionLowSpace=function(nums){
    var sum=0;
    var n=nums.length;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }

    if(sum%2!=0){
        return false;
    }

    sum=sum/2;

    var dp=new Array(sum+1).fill(false);
    dp[0]=true;

    for(let i=0;i<n;i++){
        for(let j=sum;j>=0;j--){
            if(j-nums[i]>=0){
                dp[j]=dp[j] || dp[j-nums[i]];
            }
        }
    }
    console.log(dp)
    return dp[sum];
}

console.log(canPartitionLowSpace([2,13,1]))