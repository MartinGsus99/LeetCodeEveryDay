/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length

  const visited = new Array(m).fill().map((item) => {
    return new Array(n).fill(0)
  })

  const track = []
  let flag = false

  const backTrack = function (track, x, y, count) {

    if (visited[x][y]) {
      return
    } else if (board[x][y] != word[count]) {
      return
    } else if (track.length === word.length) {
      return true
    }
    else {
      console.log(x, y, board[x][y])
      track.push(board[x][y])
      visited[x][y] = 1
      if (count === word.length - 1) {
        flag = true
      }
    }

    if (x - 1 >= 0) {
      backTrack(track, x - 1, y, count + 1)
      track.pop()
      visited[x - 1][y] = 0
    }

    if (y - 1 >= 0) {
      backTrack(track, x, y - 1, count + 1)
      track.pop()
      visited[x][y - 1] = 0
    }

    if (x + 1 < m) {
      backTrack(track, x + 1, y, count + 1)
      track.pop()
      visited[x + 1][y] = 0
    }

    if (y + 1 < n) {
      backTrack(track, x, y + 1, count + 1)
      track.pop()
      visited[x][y + 1] = 0
    }

    if (x - 1 >= 0) {
      backTrack(track, x - 1, y, count + 1)
      track.pop()
      visited[x - 1][y] = 0
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      backTrack(track, i, j, 0)
    }
  }
  return flag
}

//let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
let board = [
  ["C", "A", "A"],
  ["A", "A", "A"],
  ["B", "C", "D"]], word = "AAB"
console.log(exist(board, word))