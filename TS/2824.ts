function countPairs1(nums: number[], target: number): number {
  let count: number = 0

  for (let i: number = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        count++
      }
    }
  }
  return count
}

function countPairs(nums: number[], target: number): number {
  let count: number = 0

  function binarySearch(
    nums: number[],
    low: number,
    high: number,
    target: number
  ): number {
    let res: number = high + 1
    while (low <= high) {
      const mid: number = low + Math.floor((high - low) / 2)
      if (nums[mid] >= target) {
        res = mid
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return res
  }
  nums.sort((a, b) => a - b)
  let res: number = 0
  for (let i: number = 0; i < nums.length; i++) {
    res += binarySearch(nums, 0, i - 1, target - nums[i])
  }
  return res
}

let nums = [-1, 1, 2, 3, 1],
  target = 2

console.log(countPairs(nums, target))
