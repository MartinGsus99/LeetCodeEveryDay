/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

//深度优先算法
var findOrder = function (numCourses, prerequisites) {
  let stack = new Array()
  console.log(stack)
  if (prerequisites.length === 0) {
    return stack
  }


  let map = new Map()
  for (let i = 0; i < numCourses; i++) {
    map.set(i, 0)
  }

  let cur = prerequisites[0][1]

  const dfs = function (cur) {
    //标记当前节点
    map.set(cur, 1)
    for (let i = 0; i < prerequisites.length; i++) {
      if (prerequisites[i][1] === cur && map.get(prerequisites[i][0]) !== 1) {
        dfs(prerequisites[i][0])
      }
      if (i == prerequisites.length - 1) {
        stack.push(cur)
      }
    }
  }

  dfs(cur)
  return stack.reverse()
}


let numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
let numCourses1 = 2, prerequisites1 = [[1, 0]]
let numCourses2 = 1, prerequisites2 = []
console.log("结果", findOrder(numCourses2, prerequisites2))