/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const m = board.length
    const n = board[0].length

    let countMap = new Array(m).fill(new Array(n).fill(0))


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j - 1] == 1) {
                countMap[i][j]++
            }
            if (i - 1 >= 0 && board[i - 1][j] == 1) {
                countMap[i][j]++
            }
            if (i - 1 >= 0 && board[i - 1][j] == 1) {
                countMap[i][j]++
            }
            if (i - 1 >= 0 && j + 1 < n && board[i - 1][j + 1] == 1) {
                countMap[i][j]++
            }
            if (j - 1 >= 0 && board[i][j - 1] == 1) {
                countMap[i][j]++
            }
            if (j + 1 < n && board[i][j + 1] == 1) {
                countMap[i][j]++
            }
            if (i + 1 < m && board[i + 1][j] == 1) {
                countMap[i][j]++
            }
            if (i + 1 < m && j + 1 < n && board[i + 1][j + 1] == 1) {
                countMap[i][j]++
            }
        }
    }

    console.log(countMap)
}

let board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
console.log(gameOfLife(board))