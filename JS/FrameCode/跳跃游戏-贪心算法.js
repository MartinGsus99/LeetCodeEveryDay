//83.89 75.98
var canJump = function (nums) {
  const n = nums.length
  let farthest = 0

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i])
    if (farthest <= i) {
      return false
    }
  }
  return farthest >= n - 1
}

//dp方法
var canJump2 = function (nums) {
  const n = nums.length
  let memo = new Array(n).fill(n)

  var dp = function (nums, p) {
    let n = nums.length
    if (p >= n - 1) {
      return 0
    }
    if (memo[p] != n) {
      return memo[p]
    }
    let steps = nums[p]

    for (let i = 1; i <= steps; i++) {
      let subProblem = dp(nums, p + i)
      memo[p] = Math.min(memo[p], subProblem + 1)
    }
    return memo[p]
  }
  return dp(nums, 0)

}


//贪心算法方法：站在0位置，可以向前跳1，2，3步，显然选择跳到2可以覆盖的范围更大
//44.93 94.48
var jumpWithWanted = function (nums) {
  const n = nums.length
  let end = 0, farthest = 0
  let jumps = 0

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(nums[i] + 1, farthest)
    if (end == i) {
      jumps++
      end = farthest
    }
  }
  return jumps
}


let nums = [2, 3, 1, 1, 4]
console.log(canJump2(nums))