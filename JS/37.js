//26.93 41.33
var solveSudoku = function (board) {
  var isValid = function (row, col, val, board) {
    let len = board.length
    // 行不能重复
    for (let i = 0; i < len; i++) {

      if (board[row][i] === val.toString()) {
        return false
      }
    }
    // 列不能重复
    for (let i = 0; i < len; i++) {
      if (board[i][col] === val.toString()) {
        return false
      }
    }
    let startRow = Math.floor(row / 3) * 3
    let startCol = Math.floor(col / 3) * 3

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val.toString()) {
          return false
        }
      }
    }

    return true
  }


  var print = function (board) {
    for (let i = 0; i < 9; i++) {
      console.log(board[i])
    }
  }

  var backtrack = function (board, i, j) {
    let m = 9, n = 9
    if (j == n) {
      return backtrack(board, i + 1, 0)
    }
    if (i == m) {
      return true
    }

    if (board[i][j] != '.') {
      return backtrack(board, i, j + 1)
    }
    for (let ch = 1; ch <= 9; ch++) {
      if (!isValid(i, j, ch, board)) {
        continue
      }
      board[i][j] = ch.toString()
      //print(board)
      if (backtrack(board, i, j + 1)) {
        return true
      }
      board[i][j] = '.'
    }
    return false
  }
  return backtrack(board, 0, 0)
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(board[0][0])
console.log(solveSudoku(board))

