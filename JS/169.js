// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

//思路1：先求出多数数n\2;遍历记录次数；
//思路2：排序，遍历用temp记录最多的；

//思路3：排序之后，下标为n/2的一定是众数
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length == 1) {
        return undefined;
    } else {
        const most_times = Math.floor(nums.length / 2);
        nums = nums.sort();
        console.log(most_times, nums[most_times]);
        return nums[most_times];
    }
};

nums1 = [3,3,4];
majorityElement(nums1);