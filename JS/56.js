/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//填充数组
var merge = function (intervals) {
  const line = new Array()

  const n = intervals.length

  for (let i = 0; i < n; i++) {
    let s = intervals[i][0]
    let e = intervals[i][1]

    for (let i = 0; i < e - s ; i++) {
      line[s + i] = 1
    }
  }

  let left = 0
  let right = 0
  let res = []
  while (right < line.length) {
    console.log(left, right)
    if (line[left] === 1) {
      let newList = []
      newList.push(left)
      right = left
      while (line[right] === 1) {
        right++
      }
      newList.push(right )
      res.push(newList)
      left = right
    }
    left++
  }
  return res
}


let intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]]
let intervals2 = [[1, 4], [5, 6]]
console.log(merge(intervals1))
console.log(merge(intervals2))
