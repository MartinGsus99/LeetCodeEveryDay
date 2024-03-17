var minimumFuelCost = function (roads, seats) {
  const n = roads.length
  const g = new Array(n + 1).fill(0).map(() => new Array())

  for (const e of roads) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  console.log(g)
  let res = 0

  const dfs = function (cur, fa) {
    let peopleSum = 1
    console.log(cur, fa)
    for (const ne of g[cur]) {
      if (ne != fa) {
        const peopleCnt = dfs(ne, cur)
        peopleSum += peopleCnt
        res += Math.floor((peopleCnt + seats - 1) / seats)
      }
    }
    return peopleSum
  }
  dfs(0, -1)
  return res
}

let roads = [[0, 1], [0, 2], [0, 3]], seats = 5
console.log(minimumFuelCost(roads, seats))