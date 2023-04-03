/**
 * @param {number[]} nums
 * @return {number}
 */
//状态转移方程：如果偷了i家，则当前金额等于Math.max(val[j])+val[i];
//65.58 79.94
var rob = function(nums) {
    if(nums.length==0){
        return 0;
    }

    if(nums.length==1){
        return nums[0];
    }
    if(nums.length<=2){
        return Math.max(nums[0],nums[1]);
    }

    var dp=new Array(nums.length).fill(0);
    //base case:dp[i]代表偷到了i家能获得的最大金额；
    dp[0]=nums[0];
    dp[1]=Math.max(nums[0],nums[1]);
    console.log(dp)
    for(let i=2;i<nums.length;i++){
        console.log(dp)
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i]);
    }
    console.log(dp)
    return dp[nums.length-1];
};

//优化方法:40.95 96.25
var rob = function(nums) {
    if(nums.length==0){
        return 0;
    }

    if(nums.length==1){
        return nums[0];
    }
    if(nums.length<=2){
        return Math.max(nums[0],nums[1]);
    }

  
    var a=nums[0];
    var b=Math.max(nums[0],nums[1]);
    var c;
    for(let i=2;i<nums.length;i++){
        c=Math.max(b,a+nums[i]);
        a=b;
        b=c;
    }
 
    return c;
};

var nums=[2,1,1,2];
console.log(rob(nums));
