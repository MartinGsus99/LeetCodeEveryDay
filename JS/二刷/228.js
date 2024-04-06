/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const n = nums.length

    let res = []
    let i = 0
    while (i < n) {
        const low = i
        i++
        while (i < n && nums[i] === nums[i - 1] + 1) {
            i++
        }
        const high = i - 1
        const temp = ['' + nums[low]]
        if (low < high) {
            temp.push('->' + nums[high])
        }
        res.push(temp.join(''))
    }
    return res
};

