/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length
  const n = grid[0].length

  const visited = new Array(m).fill().map(() => {
    return new Array(n).fill(0)
  })
  const badOranges = []
  let goodOrange = 0, badOrange = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        badOranges.push({
          x: i,
          y: j
        })
        badOrange++
      } else if (grid[i][j] === 1) {
        goodOrange++
      }
    }
  }
  let res = -1
  goodOrange += badOrange

  const BFS = function (badOranges) {
    let queue = badOranges

    while (queue.length != 0) {
      let tempL = queue.length
      res++
      goodOrange--
      for (let i = 0; i < tempL; i++) {
        let cur = queue.shift()

        if (visited[cur.x][cur.y] == 1) {
          break
        } else {

          visited[cur.x][cur.y] = 1
          let x = cur.x, y = cur.y
          if (x - 1 >= 0 && grid[x - 1][y] === 1) {
            queue.push({
              x: x - 1,
              y: y
            })

          }
          if (x + 1 < m && grid[x + 1][y] === 1) {
            queue.push({
              x: x + 1,
              y: y
            })

          }

          if (y - 1 >= 0 && grid[x][y - 1] === 1) {
            queue.push({
              x: x,
              y: y - 1
            })

          }

          if (y + 1 < n && grid[x][y + 1] === 1) {
            queue.push({
              x: x,
              y: y + 1
            })

          }
          console.log(goodOrange)
        }
      }

    }
  }

  BFS(badOranges)

  if (goodOrange === 0) {
    return res
  } else {
    return -1
  }
}

let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
let grid1 = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]
console.log(orangesRotting(grid1))