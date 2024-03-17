/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if (n === 1) {
        return [0]
    }

    let minDepth = Infinity
    let minStartNode = []
    const bfs = function (startNode) {
        const visited = new Set()
        let queue = []
        queue.push(startNode)
        let depth = 0
        while (queue.length != 0) {
            let size = queue.length
            for (let i = 0; i < size; i++) {
                let cur = queue.shift()
                visited.add(cur)
                for (let i = 0; i < edges.length; i++) {
                    if (edges[i][0] == cur && !visited.has(edges[i][1])) {
                        queue.push(edges[i][1])
                    }
                }
                for (let i = 0; i < edges.length; i++) {

                    if (edges[i][1] == cur && !visited.has(edges[i][0])) {
                        queue.push(edges[i][0])

                    }
                }
            }
            depth++
        }
        return depth
    }

    for (let i = 0; i < n; i++) {
        let temp = bfs(i)
        if (temp < minDepth) {
            minDepth = temp
            minStartNode = []
            minStartNode.push(i)
        } else if (temp == minDepth) {
            minStartNode.push(i)
        }
    }
    return minStartNode

}

//let n = 4, edges = [[1, 0], [1, 2], [1, 3]]
let n = 6, edges = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]
console.log(findMinHeightTrees(n, edges))


var findMinHeightTrees = function(n, edges) {
    const ans = [];
    if (n === 1) {
        ans.push(0);
        return ans;
    }
    const adj = new Array(n).fill(0).map(() => new Array());
    for (const edge of edges) {
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
    }

    const parent = new Array(n).fill(-1);
    /* 找到与节点 0 最远的节点 x */
    const x = findLongestNode(0, parent, adj);
    /* 找到与节点 x 最远的节点 y */
    let y = findLongestNode(x, parent, adj);
    /* 求出节点 x 到节点 y 的路径 */
    const path = [];
    parent[x] = -1;
    while (y !== -1) {
        path.push(y);
        y = parent[y];
    }
    const m = path.length;
    if (m % 2 === 0) {
        ans.push(path[Math.floor(m / 2) - 1]);
    }
    ans.push(path[Math.floor(m / 2)]);
    return ans;
}

const findLongestNode = (u, parent, adj) => {
    const n = adj.length;
    const queue = [];
    const visit = new Array(n).fill(false);
    queue.push(u);
    visit[u] = true;
    let node = -1;

    while (queue.length) {
        const curr = queue.shift();
        node = curr;
        for (const v of adj[curr]) {
            if (!visit[v]) {
                visit[v] = true;
                parent[v] = curr;
                queue.push(v);
            }
        }
    }
    return node;
};
