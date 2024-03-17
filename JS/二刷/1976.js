/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
//看不懂，Dijkstra算法+DP
var countPaths = function (n, roads) {
    const mod = 1e9 + 7
    const e = new Array(n).fill(0).map(() => new Array())


    for (const [x, y, t] of roads) {
        e[x].push([y, t])
        e[y].push([x, t])
    }

    const dis = [0].concat(Array(n - 1).fill(Infinity))
    const ways = [1].concat(Array(n - 1).fill(0))
    const q = new MinPriorityQueue()
    q.enqueue([0, 0], 0)

    while (!q.isEmpty()) {
        let t = q.front().element[0], u = q.front().element[1]
        q.dequeue()

        if (t > dis[u]) {
            continue
        }

        for (const [v, w] of e[u]) {
            if (t + w < dis[v]) {
                dis[v] = t + w
                ways[v] = ways[u]
                q.enqueue([t + w, v], t + w)
            } else if (t + w == dis[v]) {
                ways[v] = (ways[u] + ways[v]) % mod
            }
        }
    }
    return ways[n - 1]
}