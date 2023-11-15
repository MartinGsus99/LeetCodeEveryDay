/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length
  const n = grid[0].length

  let isLand = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '1') {
        isLand.push({
          x: i,
          y: j,
        })
      }
    }
  }

  const visited = new Array(m).fill().map(() => {
    return new Array(n).fill(0)
  })

  let res = 0

  const BFS = function (isLand) {
    console.log(isLand)

    if (visited[isLand.x][isLand.y] == 1) {
      return
    } else {
      let queue = []
      queue.push(isLand)
      while (queue.length != 0) {
        let tempLength = queue.length
        for (let i = 0; i < tempLength; i++) {
          let cur = queue.shift()
          x = cur.x
          y = cur.y

          if (visited[x][y] === 0) {
            visited[x][y] = 1
            if (x - 1 >= 0 && visited[x - 1][y] === 0 && grid[x - 1][y] == '1') {
              queue.push({
                x: x - 1,
                y: y
              })
            }
            if (x + 1 < m && visited[x + 1][y] === 0 && grid[x + 1][y] == '1') {
              queue.push({
                x: x + 1,
                y: y
              })
            }

            if (y - 1 >= 0 && visited[x][y - 1] === 0 && grid[x][y - 1] == '1') {
              queue.push({
                x: x,
                y: y - 1
              })
            }

            if (y + 1 < n && visited[x][y + 1] === 0 && grid[x][y + 1] == '1') {
              queue.push({
                x: x,
                y: y + 1
              })
            }
          } else {
            break
          }
        }
      }
      res++
    }

  }
  for (let i = 0; i < isLand.length; i++) {
    //广度遍历该isLand

    BFS(isLand[i])

  }
  return res
}



let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]
console.log(numIslands(grid))