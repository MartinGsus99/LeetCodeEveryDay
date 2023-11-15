/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const track = []
  const map = new Map()
  const res = []

  const backTrack = function (nums, track) {
    if (track.length === nums.length) {
      let data = track.sort(function (a, b) {
        return a - b
      }).toString()
      if (!map.has(data)) {
        map.set(data, 1)
      }
    }

    for (let i = 0; i < nums.length;i++) {
      if (track.indexOf(nums[i])!==-1){
        
      }
    }
  }

}