var lenghtOfLIS=function(nums){
    var dp=new Array(nums.length).fill(1);

    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[i],dp[j]+1);
            }
        }
    }

    var res=0;
    for(let i=0;i<dp.length;i++){
        res=Math.max(res,dp[i]);
    }

    return res;
}

var nums=[10,9,2,5,3,7,101,18];
console.log(lenghtOfLIS(nums));