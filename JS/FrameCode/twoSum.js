//找出数组中和为目标数字的两个位置
//穷举  38.03 79.62
var twoSum = function (nums, target) {
  const res = [-1, -1]
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        res[0] = i
        res[1] = j
        return res
      }
    }
  }
  return res
}

//穷举添加hash表减少时间复杂度 71.74 11.04
var twoSum = function (nums, target) {
  let n = nums.length
  let index = {}

  for (let i = 0; i < nums.length; i++) {
    index[nums[i]] = i
  }

  console.log(index)
  for (let i = 0; i < n; i++) {
    let other = target - nums[i]
    if (index[other] && index[other] != i) {
      return [i, index[other]]
    }
  }
  return [-1, -1]
}

//83.85 6.06
var twoSum = function (nums, target) {
  let n = nums.length
  let index = new Map()

  for (let i = 0; i < nums.length; i++) {
    index.set(nums[i], i)
  }

  console.log(index)
  for (let i = 0; i < n; i++) {
    let other = target - nums[i]
    if (index.get(other) && index.get(other) != i) {
      return [i, index.get(other)]
    }
  }
  return [-1, -1]
}

//API方法
class TwoSum {
  frequency = new Map()
  add = function (num) {
    frequency.set(num, (frequency.get(num) || 0) + 1)
  }
  find = function (target) {
    for (key in frequency) {
      let other = target - key
      if (other == key && frequency.get(target) > 1) {
        return true
      }
      if (other != key && frequency.get(other)) {
        return true
      }
    }
    return false
  }
}

//双指针方法,有序才行，重新排序需要记录位置
var twoSum = function (nums, target) {
  let left = 0, right = nums.length - 1
  nums = nums.sort(function (a, b) {
    return a - b
  })

  while (left < right) {
    let sum = nums[left] + nums[right]
    if (sum == target) {
      return [left, right]
    } else if (sum < target) {
      left++
    } else if (sum > right) {
      right--
    }
  }
  return [-1, -1]
}

