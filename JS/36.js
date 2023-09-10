/**
 * @param {character[][]} board
 * @return {boolean}
 */
//5.74 5.10
var isValidSudoku = function (board) {
  const isValidRow = function (x, y) {
    let map = new Map()
    for (let i = 0; i < 9; i++) {
      if (map.get(board[x][i])) {
        console.log(x, i, false)
        return false
      } else if (board[x][i] !== '.') {
        map.set(board[x][i], 1)
      }
    }
    return true
  }

  const isValidCol = function (x, y) {
    let map = new Map()
    for (let i = 0; i < 9; i++) {
      if (map.get(board[i][y])) {
        return false
      } else if (board[i][y] !== '.') {
        map.set(board[i][y], 1)
      }
    }
    return true
  }

  //优化思路：同一方块无需重复检查
  const isValidBox = function (x, y) {
    let x_s = Math.floor(x / 3)
    let y_s = Math.floor(y / 3)
    console.log(x_s, y_s)
    let map = new Map()
    for (let i = x_s * 3; i < x_s * 3 + 3; i++) {
      for (let j = y_s * 3; j < y_s * 3 + 3; j++) {
        console.log(i, j)
        if (map.get(board[i][j])) {
          return false
        } else if (board[i][j] !== '.') {
          map.set(board[i][j], 1)
        }
      }
    }
    return true
  }

  let res = true
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        res *= isValidRow(i, j) && isValidCol(i, j) && isValidBox(i, j)
      }
      if (res === false) {
        return false
      }
    }
  }
  return res
}

var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j]
      if (c !== '.') {
        const index = c.charCodeAt() - '0'.charCodeAt() - 1
        rows[i][index]++
        columns[j][index]++
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++
        if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false
        }
      }
    }
  }
  return true
}


let board =
  [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

let board1 =
  [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
console.log(isValidSudoku(board1))