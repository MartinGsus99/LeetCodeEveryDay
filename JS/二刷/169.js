/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map=new Map()

    for(let i=0;i<nums;i++){
        map.set(nums[i],map.has(nums[i])?map.get(nums[i])+1:1)
        console.log(map);
        if(map.get(nums[i])>nums.length/2){
            return nums[i]
        }
    }
  
};