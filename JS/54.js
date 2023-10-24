/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//使用visited矩阵标记访问与否
var spiralOrder = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const total = m * n
  let visited = new Array(m).fill(new Array(n).fill(0))



  let indexX = 0
  let indexY = 0
  //0右-1小-2左-3上
  let direction = 0
  let count = 0
  let res = []
  while (count < total) {
    console.log(matrix[indexX][indexY])
    console.log(visited)
    if (direction === 0) {
      for (let i = indexY; i < m; i++) {
        if (!visited[indexX][i]) {
          count++
          visited[indexX][i] = 1
          res.push(matrix[indexX][i])
        } else {
          direction = (direction + 1) % 4
          indexX = indexX
          indexY = i - 1
          return
        }
      }
    }
    if (direction === 1) {
      for (let i = indexX; i < n; i++) {
        if (!visited[indexX][i]) {
          count++
          visited[indexX][i] = 1
          res.push(matrix[indexX][i])
        } else {
          direction = (direction + 1) % 4
          indexX = i - 1
          indexY = indexY
          return
        }
      }
    }
    if (direction === 2) {
      for (let i = indexY; i >= 0; i--) {
        if (!visited[indexX][i]) {
          count++
          visited[indexX][i] = 1
          res.push(matrix[indexX][i])
        } else {
          direction = (direction + 1) % 4
          indexX = indexX
          indexY = i + 1
          return
        }
      }
    }
    if (direction === 3) {
      for (let i = indexY; i >= 0; i--) {
        if (!visited[indexX][i]) {
          count++
          visited[indexX][i] = 1
          res.push(matrix[indexX][i])
        } else {
          direction = (direction + 1) % 4
          indexX = i + 1
          indexY = indexY
          return
        }
      }
    }
  }




}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix))