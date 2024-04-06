/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
//找到入度为0的所有点，从他们出发开始递归
var getAncestors = function (n, edges) {
    const findInDegree = function (n, edges) {
        let degree = new Array(n).fill(-1)
        for (let i = 0; i < edges.length; i++) {
            degree[edges[i][0]] = 0
        }
        for (let i = 0; i < edges.length; i++) {
            if (degree[[i][0]] === -1) {
                degree[edges[i][0]] = 0
            }
            if (degree[edges[i][1]] == -1) {
                degree[edges[i][1]] = 1
            } else {
                degree[edges[i][1]]++
            }
        }

        let res = []
        for (let i = 0; i < degree.length; i++) {
            if (degree[i] == 0) {
                res.push(i)
            }
        }
        return res
    }

    let ancesters = new Array(n).fill().map(() => [])
    let queue = findInDegree(n, edges)
    while (queue.length != 0) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let cur = queue.pop()
            for (let j = 0; j < edges.length; j++) {
                if (edges[j][0] == cur) {
                    ancesters[edges[j][1]].push(cur)
                    edges.splice(j, 1)
                    j = j - 1
                }
            }
        }
        queue = findInDegree(n, edges)
    }

    const unique = function (arr) {
        return Array.from(new Set(arr))
    }

    for (let i = 0; i < ancesters.length; i++) {
        for (let j = 0; j < ancesters[i].length; j++) {
            ancesters[i] = ancesters[i].concat(ancesters[ancesters[i][j]])
        }
        ancesters[i] = unique(ancesters[i]).sort((a, b) => {
            return a - b
        })

    }

    return ancesters
}

let n = 6, edgeList = [[0, 3], [5, 0], [2, 3], [4, 3], [5, 3], [1, 3], [2, 5], [0, 1], [4, 5], [4, 2], [4, 0], [2, 1], [5, 1]]
console.log(getAncestors(n, edgeList))


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
    const anc = Array(n).fill().map(() => new Set())

    const e = Array(n).fill().map(() => [])

    const indeg = Array(n).fill(0)

    for (const edge of edges) {
        e[edge[0]].push(edge[1])
        indeg[edge[1]]++
    }

    const q = []
    for (let i = 0; i < n; i++) {
        if (!indeg[i]) {
            q.push(i)
        }
    }

    while (q.length) {
        const cur = q.shift()
        for (const nxt of e[cur]) {
            anc[nxt].add(cur)
            for (const i of anc[cur]) {
                anc[nxt].add(i)
            }
            indeg[nxt]--
            if (!indeg[nxt]) {
                q.push(nxt)
            }
        }
    }

    const res = []

    for (let i = 0; i < n; i++) {
        res.push(Array.from(anc[i]).sort((a, b) => a - b))
    }

    return res
}