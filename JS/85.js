/**
 * @param {character[][]} matrix
 * @return {number}
 */
//思路：对当前节点的宽度和高度都进行dp
var maximalRectangle = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  const dp_w = new Array(m).fill().map(() => {
    return new Array(n).fill(0)
  })

  const dp_h = new Array(m).fill().map(() => {
    return new Array(n).fill(0)
  })

  if (matrix[0][0] === "0") {
    dp_h[0][0] = 0
    dp_w[0][0] = 0
  } else {
    dp_h[0][0] = 1
    dp_w[0][0] = 1
  }

  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === "0") {
      dp_h[i][0] = 0
      dp_w[i][0] = 0
    } else {
      dp_h[i][0] = dp_h[i - 1][0] + 1
      dp_w[i][0] = 1
    }
  }

  for (let i = 1; i < n; i++) {
    if (matrix[0][i] === "0") {
      dp_h[0][i] = 0
      dp_w[0][i] = 0
    } else {
      dp_h[0][i] = 1
      dp_w[0][i] = dp_w[0][i - 1] + 1
    }
  }


  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === "0") {
        dp_w[i][j] = 0
        dp_h[i][j] = 0
      } else {
        dp_h[i][j] = Math.min(dp_h[i - 1][j], dp_h[i][j - 1], dp_h[i - 1][j - 1]) + 1
        dp_w[i][j] = Math.min(dp_w[i - 1][j], dp_w[i][j - 1], dp_w[i - 1][j - 1]) + 1
      }
    }
  }

  console.log(dp_h, dp_w)


  let max = dp_h[0][0] * dp_w[0][0]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let temp = dp_h[i][j] * dp_w[i][j]
      if (temp > max) {
        max = temp
      }
    }
  }
  return max
}

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/maximal-rectangle/solutions/535672/zui-da-ju-xing-by-leetcode-solution-bjlu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var maximalRectangle = function (matrix) {
  const m = matrix.length
  if (m === 0) {
    return 0
  }
  const n = matrix[0].length
  const left = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1
      }
    }
  }

  let ret = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '0') {
        continue
      }
      let width = left[i][j]
      let area = width
      for (let k = i - 1; k >= 0; k--) {
        width = Math.min(width, left[k][j])
        area = Math.max(area, (i - k + 1) * width)
      }
      ret = Math.max(ret, area)
    }
  }
  return ret
}



let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
console.log(maximalRectangle(matrix))