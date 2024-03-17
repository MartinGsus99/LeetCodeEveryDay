var minPathCost = function (grid, moveCost) {
  let m = grid.length, n = grid[0].length
  let dp = new Array(2).fill(0).map(() => new Array(n))
  dp[0] = Array.from(grid[0])
  let cur = 0
  for (let i = 1; i < m; i++) {
    let next = 1 - cur
    for (let j = 0; j < n; j++) {
      dp[next][j] = Infinity
      for (let k = 0; k < n; k++) {
        dp[next][j] = Math.min(dp[next][j], dp[cur][k] + moveCost[grid[i - 1][k]][j] + grid[i][j])
      }
    }
    cur = next
  }
  return Math.min(...dp[cur])
}



let grid = [[5, 3], [4, 0], [2, 1]], moveCost = [[9, 8], [1, 5], [10, 12], [18, 6], [2, 4], [14, 3]]
let grid1 = [[5, 1, 2], [4, 0, 3]], moveCost1 = [[12, 10, 15], [20, 23, 8], [21, 7, 1], [8, 1, 13], [9, 10, 25], [5, 3, 2]]

console.log(minPathCost(grid, moveCost))

console.log(minPathCost(grid1, moveCost1))