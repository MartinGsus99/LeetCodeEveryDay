/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const n = nums.length


    let left = 0, right = n - 1,ans=n


    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(target<=nums[mid]){
            right=mid-1
            ans=mid
        }else{
            left=mid+1
        }
    }
    return ans
}