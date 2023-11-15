/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let track = []
  let res = new Array()
  const backTrack = function (nums, track) {
    if (track.length === nums.length) {
      res.push(Array.from(track))
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (track.indexOf(nums[i]) !== -1) {
        continue
      }
      track.push(nums[i])
      backTrack(nums, track)
      track.pop()
    }
  }
  backTrack(nums, track)
  return res
}

let nums = [1, 2, 3]
console.log(permute(nums))