//有向图
function Graph2 () {
  this.vertexes = []
  this.edges = []
  this.addVertex = function (v) {
    if (!this.vertexes.includes(v)) {
      this.vertexes.push(v)
      this.edges[v] = []
    }
  }

  this.addEdge = function (a, b) {
    if (this.vertexes.includes(a) && this.vertexes.includes(b)) {
      if (!this.edges[a].includes(b)) {
        this.edges[a].push(b)
      }
    }
  }
}

//创建图：
var buildGraph = function (nodeNums, edges) {
  let graph = new Graph2()
  for (let i = 0; i < nodeNums; i++) {
    graph.addVertex(i)
  }
  for (let i = 0; i < edges.length; i++) {
    graph.addEdge(edges[i][1], edges[i][0])
  }
  return graph
}


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//19.86 52.35
//解题思路：先将课程表转换有向图，然后判断图中是否存在环
//环的判定由DFS遍历得到，使用onPath表示当前遍历的路径，如果新的节点在onPath中就存在环
var canFinish = function (numCourses, prerequisites) {
  let graph = buildGraph(numCourses, prerequisites)
  var visited = new Array(graph.vertexes.length).fill(0)
  var onPath = []
  var hasCycle = false
  const graphTraverse = function (s, graph) {
    if (onPath[s]) {
      hasCycle = true
    }
    if (visited[s] || hasCycle) {
      return
    }
    //前序代码
    visited[s] = true
    onPath[s] = true
    for (let i = 0; i < graph.edges[s].length; i++) {
      graphTraverse(graph.edges[s][i], graph)
    }

    //后序代码
    onPath[s] = false
  }
  for (let i = 0; i < numCourses; i++) {
    graphTraverse(i, graph)
  }
  return !hasCycle
}

let numCourses = 2, prerequisites = [[1, 0], [0, 1]]
let numCourses1 = 20, prerequisites1 = [[0, 10], [3, 18], [5, 5], [6, 11], [11, 14], [13, 1], [15, 1], [17, 4]]
console.log(canFinish(numCourses1, prerequisites1))