/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const numsMap = new Set()

    for (const num of nums) {
        numsMap.add(num)
    }

    let longest = 0

    for (const num of numsMap) {
        if (!numsMap.has(num - 1)) {
            let curNum = num
            let curStreak = 1

            while (numsMap.has(curNum + 1)) {
                curNum += 1
                curStreak += 1
            }
            longest = Math.max(longest, curStreak)
        }
    }

    return longest
}

let nums = [100, 4, 200, 1, 3, 2]

console.log(longestConsecutive(nums))