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
 * @return {number[]}
 */
//18.43 63.92
var findOrder = function (numCourses, prerequisites) {
  let graph = buildGraph(numCourses, prerequisites)
  var visited = new Array(graph.vertexes.length).fill(0)
  var onPath = []
  var hasCycle = false
  var postOrder = []

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
    postOrder.push(s)
    onPath[s] = false
  }
  for (let i = 0; i < numCourses; i++) {
    graphTraverse(i, graph)
  }

  if (hasCycle) {
    return []
  }
  return postOrder.reverse()
}

let numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
let numCourses1 = 2, prerequisites1 = [[1, 0]]
let numCourses2 = 1, prerequisites2 = []
let numCourses3 = 2, prerequisites3 = []
console.log("结果", findOrder(numCourses3, prerequisites3))