/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length

  const res = []

  const dp = function (x, y, sum) {
    console.log(x, y, sum, triangle[x].length)
    if (y === triangle[x].length - 1 || x === n) {
      return
    }
    if (x === n - 1) {
      res.push(sum)
    }
    dp(x + 1, y, sum + triangle[x][y])
    dp(x + 1, y + 1, sum + triangle[x][y])
  }

  let min = res[0]
  for (let i = 0; i < res.length; i++) {
    if (res[i] < min) {
      min = res[i]
    }
  }

  dp(0, 0, 0)
  console.log('res', res)
  return min
}

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
console.log(minimumTotal(triangle))