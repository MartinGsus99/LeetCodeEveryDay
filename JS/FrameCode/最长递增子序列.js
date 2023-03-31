//动态规划方法
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

//二分查找方法,没通过
var binarySearchLIS=function(nums){
    var top=new Array(nums.length);

    //初始化牌堆；
    var piles=0;

    for(let i=0;i<nums.length;i++){
        var poker=nums[i];

        var left=0;
        var right=piles;
        while(left<right){
            var mid=(left+right)/2;
            if(top[mid]>poker){
                right=mid;
            }else if(top[mid]<poker){
                left=mid+1;
            }else{
                right=mid;
            }
        }
        if(left==piles){
            piles++;
        }
        top[left]=poker;
    }

    return piles;
}