/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let map = new Map()

  for (let num of nums) {
    map.set(num, 1)
  }

  let maxLength = 0

  for (let num of map) {
    console.log(num[0])
    if (!map.has(num[0] - 1)) {
      let currentLength = 1
      let currentNum = num[0]

      while (map.has(currentNum + 1)) {
        currentNum += 1
        currentLength += 1
      }

      maxLength = Math.max(maxLength, currentLength)
    }
  }
  return maxLength
}

let nums = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutive(nums))