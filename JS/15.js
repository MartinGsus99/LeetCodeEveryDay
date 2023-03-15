/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//暴力法,未完成
var threeSum = function(nums) {
    let result=[];
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                if(i!=j && j!=k && i!=k && (nums[i]+nums[j])===(-nums[k])){
                    result.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }

    //去除重复元素；
    for(let i=0;i<result.length;i++){
        result[i]=result[i].sort();  
    }

    
    for(let i=0;i<result.length-1;i++){
        for(let j=i+1;j<result.length;j++){
            if(result[i]===result[j]){
                result.splice(i,1);
            }
        }
    }
    console.log(result)
    return result;
};

nums = [-1,0,1,2,-1,-4]
threeSum(nums);