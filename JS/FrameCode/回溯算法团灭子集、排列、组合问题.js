//一、子集
//1.归纳法：每个子集都是由更小的子集加上一个新的元素组成
var sunSets = function (nums) {
  if (nums.length == 0) {
    return []
  }

  let n = nums[nums.length]
  nums.pop()

  let res = sunSets(nums)

  let size = res.length
  for (let i = 0; i < size; i++) {
    res.push(res[i])
    res[res.length].push(n)
  }
  return res
}

var revserseSunSets = function (nums) {
  let res = new Array().fill(new Array().fill([]))
  let path = []
  var count = 0

  var backTrack = function (nums, start, path) {
    console.log(count++, 'res', res, "PAth:", path)
    res.push(path.toString())

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backTrack(nums, i + 1, path)
      path.pop()
    }
  }
  backTrack(nums, 0, path)
  return res.length
}

// console.log(revserseSunSets([1, 2, 3]))
//2.组合：输入两个数组n,k 计算[1...n]中k个数字的所有组合
var combine = function (n, k) {
  var res = new Array().fill(new Array())

  let path = []

  var backtrack = function (n, k, start, path) {
    if (k == path.length) {
      res.push(path.toString())
      return
    }

    for (let i = start; i <= n; i++) {
      path.push(i)
      backtrack(n, k, i + 1, path)
      path.pop()
    }
  }
  backtrack(n, k, 1, path)
  return res
}

//console.log(combine(4, 2))

//3.排列：输入一个不包含重复数字的数组nums，返回全部排列
var permute = function (nums) {
  let res = new Array().fill()
  let path = []

  var backTrack = function (nums, path) {
    if (path.length == nums.length) {
      res.push(path.toString())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.indexOf(nums[i]) != -1) {
        continue
      }
      path.push(nums[i])
      backTrack(nums, path)
      path.pop()
    }
  }

  backTrack(nums, path)
  return res
}

console.log(permute([1, 2, 3]))