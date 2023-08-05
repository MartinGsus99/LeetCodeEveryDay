//暴力解法
//water[i]=min(max(height[0...i],max(height[i...end])))-height[i]
/**
 * @param {number[]} height
 * @return {number}
 */
//5.57 5.04
var trap1 = function (height) {
  if (height.length <= 1) {
    return 0
  }
  const findMax = function (max, height) {
    for (let i = 0; i < height.length; i++) {
      if (height[i] > max) {
        max = height[i]
      }
    }
    return max
  }

  const water = new Array().fill(0)
  for (let i = 1; i < height.length; i++) {
    console.log(height.slice(0, i), ":", height.slice(i + 1, height.length))
    water[i] = Math.min(findMax(height[i], height.slice(0, i)), findMax(height[i], height.slice(i + 1, height.length))) - height[i]
  }
  var sum = 0
  water.forEach(function (val) {
    sum += val
  }, 0)
  return sum
}

//备忘录优化 34.01 15.79
var trap2 = function (height) {
  if (height.length === 0) {
    return 0
  }

  let n = height.length

  let ans = 0

  let L_MAX = [], R_MAX = []

  L_MAX[0] = height[0]
  R_MAX[n - 1] = height[n - 1]

  for (let i = 1; i < n; i++) {
    L_MAX[i] = Math.max(height[i], L_MAX[i - 1])
  }

  for (let i = n - 2; i >= 0; i--) {
    R_MAX[i] = Math.max(height[i], R_MAX[i + 1])
  }

  for (let i = 1; i < n - 1; i++) {
    ans += Math.min(L_MAX[i], R_MAX[i]) - height[i]
  }
  return ans
}

//双指针：98.3 90.53
var trap = function (height) {
  if (height.length === 0) {
    return 0
  }
  let n = height.length
  let ans = 0

  let left = 0, right = n - 1

  let L_max = height[0]
  let R_max = height[n - 1]

  while (left <= right) {
    L_max = Math.max(L_max, height[left])
    R_max = Math.max(R_max, height[right])


    if (L_max < R_max) {
      ans += L_max - height[left]
      left++
    } else {
      ans += R_max - height[right]
      right--
    }
  }
  return ans
}


let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
let height1 = [4, 2, 0, 3, 2, 5]
console.log(trap(height1))
