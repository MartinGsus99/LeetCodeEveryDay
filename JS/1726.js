/**
 * @param {number[]} nums
 * @return {number}
 */
//hash统计数对 50% 21.43%
var tupleSameProduct = function (nums) {
  const n = nums.length

  const map = new Map()

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let mux = nums[i] * nums[j]
      if (map.has(mux)) {
        map.set(mux, map.get(mux) + 1)
      } else {
        map.set(mux, 1)
      }
    }
  }

  console.log(map)
  let res = 0

  const calPlus = function (x) {
    let ans = 1
    for (let i = 1; i <= x; i++) {
      ans *= i
    }
    return ans
  }

  for (let i of map) {
    if (i[1] > 1) {
      res += (calPlus(i[1]) / (calPlus(2) * calPlus(i[1] - 2))) * 8
    }
  }
  return res
}

//57 50
var tupleSameProduct = function (nums) {
  const n = nums.length
  const cnt = new Map()
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const key = nums[i] * nums[j]
      cnt.set(key, (cnt.get(key) || 0) + 1)
    }
  }
  let ans = 0
  for (const v of cnt.values()) {
    ans += v * (v - 1) * 4
  }
  return ans
}



let nums = [2, 3, 4, 6, 8, 12]
console.log(tupleSameProduct(nums))