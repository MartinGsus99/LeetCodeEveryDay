/**
 * @param {number[]} nums
 * @return {boolean}
 */

//双指针，从左边开始A，右边开始B，A每次进一位B从右边向左进直到碰到A；
//7.01 94.41
var containsDuplicate = function(nums) {
    for(let indexA=0;indexA<nums.length;indexA++)
    {
        for(let indexB=nums.length-1;indexB>indexA;indexB--){
            if(nums[indexA]==nums[indexB]){
                return true;
            }
        }
    }
    return false;
};

//官方解法：hash表；58.16 25.47
var containsDuplicate = function(nums) {
    const set = new Set();
    for (const x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }
    return false;
};

