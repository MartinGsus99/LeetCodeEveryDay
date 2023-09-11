//Class无向图
function Graph1 () {
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
        this.edges[b].push(a)
      }
    }
  }
}

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

//DFS遍历图:判断是否有环
var traverse = function (graph) {
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
    console.log(s)
    visited[s] = true
    onPath[s] = true
    for (let i = 0; i < graph.edges[s].length; i++) {
      graphTraverse(graph.edges[s][i], graph)
    }

    //后序代码
    onPath[s] = false
  }

  graphTraverse(graph.vertexes[0], graph)
  return hasCycle
}

//BFS遍历图，判断是否有环

let edges1 = [[1, 2], [2, 3], [3, 4]]
console.log(buildGraph(5, edges1))
