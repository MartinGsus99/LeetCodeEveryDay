/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//6.90 73.34
var nextGreaterElement = function(nums1, nums2) {

    var nextGreaterNumResult=function(nums){
        let result=[];
        let stack=[];
        for(let i=nums.length-1;i>=0;i--){
            while(stack.length!=0 && stack[stack.length-1]<=nums[i]){
                stack.pop();
            }
            result[i]=stack.length==0?-1:stack[stack.length-1];
            stack.push(nums[i]);
        }
        return result;
    }

    let result=nextGreaterNumResult(nums2);
    let ans=[];
    for(let i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                ans.push(result[j]);
            }
        }
    }
    return ans;
};