/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
    let count = 0

    const visited = new Array(n).fill(false)
    const restrict = new Set(restricted)

    const dfs = (node) => {
        if (!visited[node] && !restrict.get(node)) {
            visited[node] = true
            count++
        }
        for (let i = 0; i < edges.length; i++) {
            const [a, b] = edges[i]
            if (a === node && !visited[b] && !restrict.get(b)) {
                dfs(b)
            }
        }
        return
    }

    dfs(0)
    return count
}